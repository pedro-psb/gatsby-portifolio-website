import * as React from 'react';
import PostPage from '../../components/blog_post';

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => <PostPage post={post} title={title} location={location} previous={previous} next={next} />;

export default Post;
