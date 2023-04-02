import { Hero } from "@/components/Hero";

import { PostBlock } from "@/components/PostBlock";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto py-8">
        <h3 className="text-xl">All my posts (5)</h3>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <PostBlock post={""} />
          <PostBlock post={""} />
          <PostBlock post={""} />
          <PostBlock post={""} />
        </div>
      </div>
    </>
  );
}
