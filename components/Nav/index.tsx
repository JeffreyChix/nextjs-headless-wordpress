import Link from "next/link";

export const Nav = () => {
  return (
    <header className="container mx-auto py-4 px-4">
      <div className="navbar w-full md:w-3/5 mx-auto border-b-2">
        <div className="flex items-center justify-center pb-4 text-base md:text-xl">
          <Link href="/" className="px-4">
            Home
          </Link>
          <Link href="#" className="px-4">
            Blog
          </Link>
          <Link href="#" className="px-4">
            About
          </Link>
          <Link href="#" className="px-4">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};
