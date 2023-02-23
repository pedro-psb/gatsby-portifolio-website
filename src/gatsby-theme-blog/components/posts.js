import * as React from 'react';
import Posts from '../../components/blog';

const NewPosts = ({ location, posts, siteTitle }) => (
  <Posts location={location} posts={posts} siteTitle={siteTitle} />
);

export default NewPosts;
