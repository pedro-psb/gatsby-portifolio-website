import Footer from 'gatsby-theme-blog/src/components/home-footer';
import OldLayout from 'gatsby-theme-blog/src/components/layout';
import PostList from 'gatsby-theme-blog/src/components/post-list';
import SEO from 'gatsby-theme-blog/src/components/seo';
import * as React from 'react';
import Layout from './Layout/Layout';

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout>
    <OldLayout location={location} title={siteTitle}>
      <SEO title="Home" />
      <main>
        <PostList posts={posts} />
      </main>
      <Footer socialLinks={socialLinks} />
    </OldLayout>
  </Layout>
);

export default Posts;
