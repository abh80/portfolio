/** @type {import('next').NextConfig} */
import mdx from "@next/mdx";
import remark from "remark-gfm";
import remarkFrontMatter from "remark-frontmatter";
import withMatter from "./src/utils/withMatter.mjs";
import withLayout from "./src/utils/withLayout.mjs";
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: ["img.shields.io", "avatars.githubusercontent.com"],
  },
};
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkFrontMatter, remark, withMatter, withLayout],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

export default withMDX(nextConfig);
