import Head from "next/head";
import { useRouter } from "next/router";

import faviconIco from "@/assets/favicons/favicon.ico";
import appleTouchIcon from "@/assets/favicons/apple-touch-icon.png";
import favicon32 from "@/assets/favicons/favicon-32x32.png";
import favicon16 from "@/assets/favicons/favicon-16x16.png";
import defaultImage from "@/assets/images/default.jpg";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
}

const pageImage = process.env.NEXT_PUBLIC_ROOT_URL + defaultImage.src.slice(1);

const ROOT_URL = process.env.NEXT_PUBLIC_ROOT_URL as string;

export const SEO = ({
  title,
  description,
  image = pageImage,
  type = "website",
}: SEOProps) => {
  const router = useRouter();
  const url = `${ROOT_URL}/${router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta name="description" content={description} />
      <meta name="robots" content="follow, index" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@JeffreySunny1" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta property="og:site_name" content="Jeffrey's Blog" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />

      {/* Google Site Ownership Verification */}
      <meta
        name="google-site-verification"
        content="a0Mzfa1xwDcidlG7r7CQwBBN_DPZCqIWkBJ3SXCGT38"
      />

      <link rel="shortcut icon" href={faviconIco.src} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon.src} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32.src} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16.src} />
      {/* <link rel="mask-icon" href="" color="#5bbad5" /> Add mask icon */}
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="canonical" href={url} />
    </Head>
  );
};
