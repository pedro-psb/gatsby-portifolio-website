import { Container, Divider, Space, Title, createStyles } from '@mantine/core';
import { graphql } from 'gatsby';
import React from 'react';
import { AboutSection } from '../components/Layout/About';
import { BlogSection } from '../components/Layout/BlogSection';
import { HeroText } from '../components/Layout/Hero';
import Layout from '../components/Layout/Layout';
import { Projects } from '../components/Layout/Projects';
import { aboutMeList, projectsList, sectionText } from '../components/data';

export default function HomePage({ data }) {
  const posts = data.allBlogPost.nodes;

  return (
    <Layout>
      <HeroText description={sectionText.hero} />
      <Projects projects={projectsList} description={sectionText.projects} />
      <BlogSection posts={posts} description={sectionText.blogging} />
      <AboutSection about={aboutMeList} description={sectionText.aboutMe} />
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
        slug
        title
        date(formatString: "MMM YYYY")
        tags
      }
    }
  }
`;
