import { getSlug } from "@/utils/mdx";
import { kanit } from "@/providers/font";
import Link from "next/link";

export function H2({ children }: any) {
  const slug = getSlug(children);

  return (
    <section id={slug} className={"mdx-heading mdx-heading--h2 group"}>
      <h2
        className={
          kanit.className + " dark:text-white md:text-2xl text-xl font-bold "
        }
      >
        <Link href={`#${slug}`}>{children}</Link>
      </h2>
    </section>
  );
}

export function H3({ children }: any) {
  return (
    <span
      className={
        kanit.className + " dark:text-white md:text-lg text-base leading-loose "
      }
    >
      {children}
    </span>
  );
}
