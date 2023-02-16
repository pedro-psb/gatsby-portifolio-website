import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  Center,
  Grid,
  Group,
  Image,
  Text,
  createStyles,
} from '@mantine/core';
import {
  IconBookmark,
  IconBrandGithub,
  IconExternalLink,
  IconHeart,
  IconShare,
} from '@tabler/icons-react';
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
    height: 310,
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
    padding: 3,
  },

  footer: {
    marginTop: theme.spacing.md,
    color: theme.colors.gray[7],
    fontWeight: 'bold',
  },
}));

export interface ProjectCardProps {
  image: string;
  linkSource: string;
  linkLive: string;
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
  linkSource,
  linkLive,
  title,
  description,
  author,
  rating,
  ...others
}: ProjectCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ProjectCardProps>) {
  const { classes, cx, theme } = useStyles();

  return (
    <Card withBorder radius="md" className={cx(classes.card, className)} {...others}>
      <Card.Section>
        <Image src={image} height={140} />
      </Card.Section>

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        {rating}
      </Badge>

      <Text className={classes.title} weight={500}>
        {title}
      </Text>

      <Text size="sm" color="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group position="apart" className={classes.footer}>
        <a href={linkSource} target="_blank" rel="noreferrer">
          {/* TODO use component='a' in button */}
          <Button size="xs" variant="light">
            {'< source />'}
          </Button>
        </a>
        <a href={linkLive} target="_blank" rel="noreferrer">
          <Button
            leftIcon={<IconExternalLink size={15} />}
            size="xs"
            variant="subtle"
            disabled={!Boolean(linkLive)}
          >
            live
          </Button>
        </a>
        {/* <ActionIcon className={classes.action}>
            <IconHeart size={16} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark size={16} color={theme.colors.yellow[7]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare size={16} />
          </ActionIcon> */}
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
