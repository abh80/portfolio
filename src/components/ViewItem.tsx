import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Roboto } from "@next/font/google";
import Link from "next/link";
import styles from "../styles/Component.module.css";
import MenuItem from "@/components/MenuItem";
import { menuPages1 } from "@/utils/main";
import ChildMenuItem from "@/components/ChildMenuItem";
import { useRouter } from "next/router";

const roboto = Roboto({
  weight: ["400", "700", "500", "900"],
  subsets: ["latin"],
});

export default function ViewItem({
  children,
  header,
}: {
  children: JSX.Element;
  header?: JSX.Element;
}) {
  const router = useRouter();
  const [active, setActive]: [string | null, React.SetStateAction<any>] =
    useState(null);
  const [articles, setArticles]: [Array<string>, React.SetStateAction<any>] =
    useState([]);
  const [curr_hash, setHash]: [string | null, React.SetStateAction<any>] =
    useState("");
  useEffect(() => {
    setHash(window.location.hash?.replace("#", ""));
    setActive(window.location.pathname);
    setArticles(
      Array.from(document.querySelectorAll("#__next section"))
        .filter((x) => x.id.trim())
        .map((x) => x.id)
    );
    let h = document.querySelector("header");
    router.events.on("hashChangeComplete", () => {
      const { hash } = window.location;
      setHash(hash.replace("#", ""));
    });
    document.body.addEventListener("scroll", () => {
      if (!h) return;
      // @ts-ignore
      if (document.body.scrollTop > h.offsetHeight) {
        h.classList.remove("bg-[#0d1b1c]");
        h.classList.add("bg-slate-900/[0.25]");
      } else {
        h.classList.add("bg-[#0d1b1c]");
        h.classList.remove("bg-slate-900/[0.25]");
      }
    });
  }, []);
  return (
    <>
      <header
        className={
          "sticky top-0 w-full z-[999] backdrop-blur transition-colors border-slate-50/[0.05] border-b-2 bg-[#0d1b1c] p-2 " +
          styles.mainHeader
        }
      >
        <div className="p-2 w-full max-w-7xl mx-auto">
          <Link href={"/"} className={"flex gap-2 w-fit " + styles.logoH}>
            <Image
              src={"/adaptive-logo-dark.svg"}
              alt={"Main logo for header"}
              width={30}
              height={30}
            />
            <h1 className={roboto.className + " text-white text-2xl"}>Abh80</h1>
          </Link>
        </div>
      </header>
      {header ? (
        <main className="bg-gradient-to-b from-[#0d1b1c] to-transparent w-full pb-24 pt-40">
          {header}
        </main>
      ) : (
        <div className="h-40 w-full"></div>
      )}
      <div
        id={"main-content"}
        className={
          "max-w-7xl w-full mx-auto pt-5 relative flex lg:gap-8 " +
          styles.mainContent
        }
      >
        <div className="relative">
          <div className="top-40 sticky z-20 hidden lg:block w-[15.5rem] bg-[#0f617e]/20 rounded-lg mr-0 pt-3 pb-5 overflow-auto space-y-5 backdrop-blur border border-slate-200/5">
            <section className="border-b border-slate-200/10 px-5 pb-3">
              <h1 className={"font-bold text-slate-300 " + roboto.className}>
                Table of contents
              </h1>
            </section>
            <section className="px-5">
              {menuPages1.map((x, i) => (
                <MenuItem
                  title={x.title}
                  bgColor={x.bgColor}
                  key={i}
                  active={active == x.url}
                  icon={x.icon}
                  url={x.url}
                />
              ))}
            </section>

            {articles.length ? (
              <section className="px-5">
                <h2 className={roboto.className + " text-slate-200 font-bold"}>
                  On this page
                </h2>
                <section className="mt-2 border-l border-slate-600 space-y-1.5">
                  {articles.map((x, i) => (
                    <ChildMenuItem
                      title={x.replace("-", " ")}
                      hash={x}
                      key={i}
                      active={curr_hash == x}
                    />
                  ))}
                </section>
              </section>
            ) : null}
          </div>
        </div>
        <div className="p-2 px-3 lg:px-5">{children}</div>
      </div>
      <footer className="w-full mx-auto bg-transparent bg-gradient-to-b from-transparent to-[#0d1b1c] px-2 md:px-3">
        <div className="block pb-10 pt-24 flex items-center px-1 justify-between w-full max-w-7xl mx-auto">
          <div className="md:max-w-[320px] w-full space-y-3">
            <h3
              className={
                "font-bold text-slate-400 text-md leading-loose " +
                roboto.className
              }
            >
              About Me
            </h3>
            <h4
              className={
                "font-semibold text-slate-300 text-sm " + roboto.className
              }
            >
              I am a Java and Javascript developer. I am very interested in
              making android and web apps along with backend servers with Spring
              and PostgreSQL
            </h4>
          </div>
        </div>
        <div className="block border-t border-slate-200/10 pb-32 pt-10 flex flex-wrap items-center px-1 justify-between w-full max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-3">
            <Image
              className="h-5 w-5 opacity-50"
              src="/adaptive-logo-dark.svg"
              alt="Footer logo"
              height={50}
              width={50}
            />
            <h5 className={"text-slate-400 font-semibold " + roboto.className}>
              Copyright © {new Date().getFullYear()} Abh80
            </h5>
          </div>

          <div className="flex flex-wrap items-center">
            <Link
              target="_blank"
              href="https://github.com/abh80/portfolio"
              className="devicon-github-original text-slate-400 hover:text-slate-300 cursor-pointer text-[1.2rem]"
            ></Link>
          </div>
        </div>
      </footer>
    </>
  );
}
