import { getSlug } from "@/utils/mdx";
import { kanit, roboto } from "@/providers/font";
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
    <h3
      className={
        kanit.className +
        " dark:text-white md:text-lg text-base leading-loose font-bold "
      }
    >
      {children}
    </h3>
  );
}

export function P({ children }: any) {
  return (
    <p
      className={`${roboto.className} dark:text-white md:text-md text-base leading-loose mdx-heading--p`}
    >
      {children}
    </p>
  );
}
