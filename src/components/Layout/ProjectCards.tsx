import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Center,
  Grid,
  Group,
  Image,
  Text,
  createStyles,
} from '@mantine/core';
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import React from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    boxShadow: theme.shadows.sm,
    border: 'none',
    '&:hover': {
      boxShadow: theme.shadows.md,
    },
  },

  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

export interface ProjectCardProps {
  image: string;
  link: string;
  title: string;
  description: string;
  rating: string;
  author: {
    name: string;
    image: string;
  };
}

export function ProjectCard({
  className,
  image,
  link,
  title,
  description,
  author,
  rating,
  ...others
}: ProjectCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ProjectCardProps>) {
  const { classes, cx, theme } = useStyles();
  const linkProps = { href: link, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <Card withBorder radius="md" className={cx(classes.card, className)} {...others}>
      <Card.Section>
        <a {...linkProps}>
          <Image src={image} height={140} />
        </a>
      </Card.Section>

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        {rating}
      </Badge>

      <Text className={classes.title} weight={500} component="a" {...linkProps}>
        {title}
      </Text>

      <Text size="sm" color="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group position="apart" className={classes.footer}>
        <Group spacing={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart size={16} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark size={16} color={theme.colors.yellow[7]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare size={16} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}

export function CardGrid({ cards }: { cards: ProjectCardProps[] }) {
  return (
    <Grid justify="center">
      {cards.map((data, i) => (
        <Grid.Col key={i} xs={6} md={4} lg={3}>
          <ProjectCard {...data} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
