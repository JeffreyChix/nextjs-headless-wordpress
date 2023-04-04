import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { SEO } from "@/components/Seo";

import { getPosts, getPostBySlug } from "@/lib/service";

export default function PostDetails({ post }: { post: any }) {
  return (
    <>
      <SEO
        title={`${post.title} - Posts`}
        description={post.excerpt}
        image={post.featuredImage.node.sourceUrl}
        type="article"
      />
      <section className="container mx-auto py-12">
        <div
          className="post-header relative flex flex-col items-center justify-center w-full min-h-[200px] rounded-md"
          style={{
            backgroundImage: `url(${post.featuredImage.node.sourceUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute w-full h-full z-10"
            style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
          ></div>
          <div className="z-20 text-center">
            <h1 className="text-2xl md:text-4xl mb-4">{post.title}</h1>
            <p className="italic">By Jeffrey</p>
          </div>
        </div>
        <div
          className="post-content w-full md:w-3/5 mx-auto mt-20 py-6 text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts(100); // retrieve first 100 posts

  return {
    paths: posts.map((post: any) => `/posts/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);

  return {
    props: { post },
  };
};
