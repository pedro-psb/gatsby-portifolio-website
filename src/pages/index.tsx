import { Container, Divider, Space, Title } from '@mantine/core';
import { graphql } from 'gatsby';
import React from 'react';
import { AboutSection } from '../components/Layout/About';
import { BlogSection } from '../components/Layout/BlogSection';
import { HeroText } from '../components/Layout/Hero';
import Layout from '../components/Layout/Layout';
import { Projects } from '../components/Layout/Projects';
import { aboutMeList, heroDescription, projectsList } from '../components/data';

export default function HomePage({ data }) {
  const posts = data.allBlogPost.nodes;
  return (
    <Layout>
      <Space h={50} />
      <HeroText text={heroDescription} />
      <Projects projects={projectsList} />
      <BlogSection posts={posts} />
      <AboutSection about={aboutMeList} />
    </Layout>
  );
}

export const query = graphql`
  query LandpagePostsQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 4) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
