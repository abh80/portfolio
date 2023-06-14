import { H2, H3, P } from "@/components/mdx/Heading";
import Table from "@/components/mdx/Table";
import Link from "@/components/mdx/Link";
import Hr from "@/components/mdx/Hr";
import Pre from "@/components/mdx/Pre";
import { LI, UL } from "@/components/mdx/Points";
import Quote from "@/components/mdx/Quote";

const components = {
  h2: H2,
  h3: H3,
  table: Table,
  a: Link,
  hr: Hr,
  p: P,
  pre: Pre,
  ul: UL,
  li: LI,
};
export default components;
