import Link from "next/link";
import Image from "next/image";

import defaultImage from "@/assets/images/default.jpg";

export const PostBlock = ({ post }: { post: any }) => {
  return (
    <div className="post-block p-2 rounded-md">
      <Link href="/post-link">
        <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
          <Image
            src={defaultImage}
            alt="Post title"
            className="absolute rounded-md h-full w-full object-cover"
          />
        </div>
      </Link>
      <Link href="/post-link" className="post-content my-4">
        <h3 className="text-2xl py-4">Post Title</h3>
        <p className="italic">Post excerpt</p>
      </Link>
    </div>
  );
};
