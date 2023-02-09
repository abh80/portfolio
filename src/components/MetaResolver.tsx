import Head from "next/head";
import React from "react";

export default function MetaResolver({
  title = "Abh80",
  description = "Portfolio of Abh80",
  banner = "https://abh80.site/banner.png",
}: {
  title?: string;
  description?: string;
  banner?: string;
}) {
  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta property="twitter:creator" content="@trackerstars" />
      <meta property="twitter:title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="twitter:image" content={banner} />
      <meta property="og:thumbnail" content={banner} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
      <title>{title}</title>
      <meta name="description" content="A portfolio of Abh80" />
      <meta name="theme-color" content="#0098e5" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="og:color" content="#0098e5" />
    </Head>
  );
}
