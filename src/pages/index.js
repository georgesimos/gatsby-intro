import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read My Blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
          // <pre>{JSON.stringify(post, null, 2)}</pre>
        ))}
      </Layout>
    </>
  );
};
