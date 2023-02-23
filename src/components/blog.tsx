import { Group, Space, Text, Title } from '@mantine/core';
import { Link } from 'gatsby';
import SEO from 'gatsby-theme-blog/src/components/seo';
import * as React from 'react';
import Layout from './Layout/Layout';
import { Section } from './Layout/Section';

const PostLink = ({ title, slug, date, excerpt }) => (
  <article style={{ margin: '30px 0' }}>
    <header>
      <Group>
        <Link to={slug} style={{ textDecoration: 'none' }}>
          <Title order={2} style={{ color: 'gray' }}>
            {title.toUpperCase() || slug.toUpperCase()}
          </Title>
        </Link>
        <Text color="dimmed" size="sm">
          {date}
        </Text>
      </Group>
    </header>
    <section>{excerpt}</section>
  </article>
);

const PostList = ({ posts }) => (
  <>
    {posts.map((node) => (
      <PostLink key={node.slug} {...node} />
    ))}
  </>
);

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout socialLinks={socialLinks}>
    <SEO title="Blog" />
    <Space h={150} />
    <Section size="sm">
      <main>
        <PostList posts={posts} />
      </main>
    </Section>
  </Layout>
);

export default Posts;
