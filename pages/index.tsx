import { GetStaticProps } from "next";

import { Hero } from "@/components/Hero";
import { SEO } from "@/components/Seo";
import { PostBlock } from "@/components/PostBlock";
import { getPosts } from "@/lib/service";

export default function HomePage({ posts }: { posts: any }) {
  return (
    <>
      <SEO
        title="Welcome to Jeffrey's Blog"
        description="Access all tech content and beyond"
      />
      <Hero />
      <div className="container mx-auto py-8">
        <h3 className="text-xl">All my posts ({posts.length})</h3>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post: any) => {
            return <PostBlock key={post.slug} post={post} />;
          })}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts(100); // retrieve first 100 posts

  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
};
