import { Space, Text } from '@mantine/core';
import { getSrc } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from 'gatsby-theme-blog/src/components/seo';
import * as React from 'react';
import Layout from './Layout/Layout';
import { Section } from './Layout/Section';

const Post = ({ post, title, location, previous, next }) => (
  <Layout>
    <Space h={100} />
    <Section size="sm">
      <SEO
        title={post.title}
        description={post.excerpt}
        imageSource={post.socialImage ? getSrc(post.socialImage) : getSrc(post.image)}
        imageAlt={post.imageAlt}
      />
      <main>
        <article>
          <header>
            <Text post={post} />
            <Text>{post.title}</Text>
            <Text>{post.date}</Text>
          </header>
          <section>
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </article>
      </main>
      <Text {...{ previous, next }} />
    </Section>
  </Layout>
);

export default Post;
