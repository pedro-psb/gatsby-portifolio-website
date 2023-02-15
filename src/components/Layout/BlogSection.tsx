import { Button, Center, Container, Grid, SimpleGrid, Title } from '@mantine/core';
import { Link } from 'gatsby';
import React from 'react';
import { Section } from './Section';

import { Avatar, Card, Group, Image, Text, createStyles } from '@mantine/core';
import { IconArticle, IconExternalLink } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
  date: {
    position: 'absolute',
    right: theme.spacing.xs,
    bottom: theme.spacing.xs,
  },
}));

interface ArticleCardVerticalProps {
  image: string;
  category: string;
  title: string;
  date: string;
  slug: string;
}

function ArticleCardVertical({ image, category, title, date, slug }: ArticleCardVerticalProps) {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <div className={classes.body}>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            {category}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
        </div>
        <div className={classes.date}>
          <Text size="xs" color="dimmed">
            {date}
          </Text>
        </div>
      </Group>
    </Card>
  );
}

const useSectionStyles = createStyles((theme) => ({
  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.grape[9],
    letterSpacing: 0.5,
  },
  description: {
    textAlign: 'center',
    marginTop: theme.spacing.xs,
  },
}));

interface BlogSectionProps<T> {
  posts: Array<T>;
}

export function BlogSection({ posts }: BlogSectionProps) {
  const { classes } = useSectionStyles();
  return (
    <Section my="lg" mt={50}>
      <Grid gutter={80} align="center" justify="center">
        <Grid.Col span={12} md={5}>
          <Title align="center">
            <IconArticle color="gray" /> blogging
          </Title>
          <Text color="dimmed" className={classes.description}>
            I like writting sometimes to consolidate knowledge and to share tips and tricks that
            helped me somehow
          </Text>
          <Center mt="md">
            <Link to="/blog">
              <Button variant="light" m="auto" leftIcon={<IconExternalLink size={20} />}>
                full blog
              </Button>
            </Link>
          </Center>
        </Grid.Col>
        <Grid.Col span={12} md={7}>
          <SimpleGrid breakpoints={[{ minWidth: 'sm', cols: 2 }]}>
            {posts.map((post) => (
              <ArticleCardVertical
                category="Tech"
                date="Feb 2023"
                slug={post.slug}
                title={post.title}
                key={post.id}
                image=""
              />
            ))}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Section>
  );
}
