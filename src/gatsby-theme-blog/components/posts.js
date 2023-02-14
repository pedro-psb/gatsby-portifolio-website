import * as React from 'react';
import Posts from '../../components/blog';

const NewPosts = ({ location, posts, siteTitle, socialLinks }) => (
  <Posts location={location} posts={posts} siteTitle={siteTitle} socialLinks={socialLinks} />
);

export default NewPosts;
