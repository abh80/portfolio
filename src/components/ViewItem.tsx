import React, { MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { Roboto } from "@next/font/google";
import Link from "next/link";
import styles from "../styles/Component.module.css";
import MenuItem from "@/components/MenuItem";
import { menuPages1 } from "@/utils/main";
import ChildMenuItem from "@/components/ChildMenuItem";
import { useRouter } from "next/router";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import { setTheme } from "@/utils/Theme";

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
  let animationDropDown = useAnimation();
  const router = useRouter();
  const [isMobile, setMobile] = useState(false);
  const [active, setActive]: [string | null, React.SetStateAction<any>] =
    useState(null);
  const [articles, setArticles]: [Array<string>, React.SetStateAction<any>] =
    useState([]);
  const [curr_hash, setHash]: [string | null, React.SetStateAction<any>] =
    useState("");
  const [isDark, setDark]: [boolean, React.SetStateAction<any>] =
    useState(false);
  const [showThemePref, setThemePref]: [boolean, React.SetStateAction<any>] =
    useState(false);
  useEffect(() => {
    setMobile(window.innerWidth < 768);
    setHash(window.location.hash?.replace("#", ""));
    setActive(window.location.pathname);
    setDark(document.documentElement.classList.contains("dark"));
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
        h.classList.remove("dark:bg-[#0d1b1c]");
        h.classList.add("dark:bg-slate-900/[0.25]");
        // h.classList.remove("bg-white/95");
        // h.classList.add("bg-white");
      } else {
        h.classList.add("dark:bg-[#0d1b1c]");
        // h.classList.add("bg-white/95");
        // h.classList.remove("bg-white");
        h.classList.remove("dark:bg-slate-900/[0.25]");
      }
    });
    window.addEventListener("abh80.themeChangeCompleted", () => {
      setDark(document.documentElement.classList.contains("dark"));
    });
  }, []);

  function handleThemeChange(t: string) {
    setTheme(t);
  }

  const dropDownThemeVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    close: {
      opacity: 0,
      y: 20,
    },
    fade: {
      opacity: 0,
    },
  };
  return (
    <>
      <header
        className={
          "sticky top-0 w-full shadow-sm z-[999] backdrop-blur transition-colors dark:border-slate-50/[0.05] border-slate-900/[0.05] border-b-2 dark:bg-[#0d1b1c] bg-white/75 p-2 " +
          styles.mainHeader
        }
      >
        <div className="p-2 w-full max-w-7xl mx-auto justify-between flex items-center h-full">
          <div className="max-w-fit mr-0">
            <Link href={"/"} className={"flex gap-2 w-fit"}>
              <Image
                src={
                  isDark
                    ? "/adaptive-logo-dark.svg"
                    : "/adaptive-logo-light.svg"
                }
                alt={"Main logo for header"}
                width={isMobile ? 20 : 30}
                height={isMobile ? 20 : 30}
              />

              <h1
                className={
                  roboto.className + " dark:text-white md:text-2xl text-lg"
                }
              >
                Abh80
              </h1>
            </Link>
          </div>
          <div
            className="hidden md:block"
            tabIndex={0}
            onFocus={() => {
              setThemePref(true);
            }}
            onBlur={() => {
              setThemePref(false);
            }}
          >
            <i
              className={
                "fa-solid cursor-pointer text-sky-500 text-xl " +
                (isDark ? "fa-moon" : "fa-lightbulb")
              }
            ></i>
            <AnimatePresence>
              {showThemePref ? (
                <motion.div
                  variants={dropDownThemeVariants}
                  animate="open"
                  initial="close"
                  exit="fade"
                  onAnimationEnd={() => setThemePref(false)}
                  id={"theme-preference"}
                  className={
                    "absolute backdrop-blur-md rounded-md dark:bg-slate-800 bg-white shadow-md mt-5 z-[40] " +
                    roboto.className
                  }
                >
                  <ul className="flex flex-col dark:text-slate-300 text-slate-600">
                    <li
                      onClick={() => handleThemeChange("light")}
                      className="py-2 px-3 gap-2 flex cursor-pointer hover:bg-slate-400/50"
                    >
                      <i className="fa-solid fa-lightbulb"></i>
                      <span className="text-sm">Lights On</span>
                    </li>
                    <li
                      className="py-2 px-3 gap-2 flex cursor-pointer hover:bg-slate-400/50"
                      onClick={() => handleThemeChange("dark")}
                    >
                      <i className="fa-solid fa-moon cursor-pointer"></i>
                      <span className="text-sm">Lights Out</span>
                    </li>
                    <li
                      onClick={() => handleThemeChange("def")}
                      className="py-2 px-3 gap-2 flex cursor-pointer hover:bg-slate-400/50"
                    >
                      <i className="fa-solid fa-desktop"></i>
                      <span className="text-sm">Default</span>
                    </li>
                  </ul>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </header>
      {header ? (
        <main className="dark:bg-gradient-to-b dark:from-[#0d1b1c] dark:to-transparent w-full pb-16 pt-20 md:pb-24 md:pt-40">
          {header}
        </main>
      ) : (
        <div className="h-40 w-full"></div>
      )}
      <div
        id={"main-content"}
        className={
          "max-w-7xl w-full mx-auto pt-5 relative lg:flex lg:gap-8 " +
          styles.mainContent
        }
      >
        <div className="relative ml-8">
          <div className="top-40 sticky z-20 hidden lg:block w-[15.5rem] drop-shadow-md dark:bg-[#0f617e]/20 bg-white rounded-lg mr-0 pt-3 pb-5 overflow-auto space-y-5 backdrop-blur border border-slate-900/[0.1] dark:border-slate-200/5">
            <section className="border-b dark:border-slate-200/10 border-slate-900/[0.1] px-5 pb-3">
              <h1
                className={"font-bold dark:text-slate-300 " + roboto.className}
              >
                Table of contents
              </h1>
            </section>
            <section className="px-5">
              {menuPages1
                .filter((x) => x.url == active)
                .map((x, i) => (
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
                <h2
                  className={
                    roboto.className + " dark:dark:text-slate-200 font-bold"
                  }
                >
                  On this page
                </h2>
                <section className="mt-2 border-l dark:border-slate-600 border-slate-400 space-y-1.5">
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
      <footer className="w-full mx-auto bg-transparent dark:bg-gradient-to-b dark:from-transparent dark:to-[#0d1b1c] px-2 md:px-3">
        <div className="block pb-10 pt-24 flex items-center px-1 justify-between w-full max-w-7xl mx-auto">
          <div className="md:max-w-[320px] w-full space-y-3">
            <h3
              className={
                "font-bold dark:dark:text-slate-400 md:text-md text-sm leading-loose " +
                roboto.className
              }
            >
              About Me
            </h3>
            <h4
              className={
                "font-semibold dark:text-slate-300 md:text-sm text-xs " +
                roboto.className
              }
            >
              I am a Java and Javascript developer. I am very interested in
              making android and web apps along with backend servers with Spring
              and PostgreSQL
            </h4>
          </div>
        </div>
        <div className="block border-t dark:border-slate-200/10 border-slate-900/20 pb-32 pt-10 flex flex-wrap items-center px-1 justify-between w-full max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-3">
            <Image
              className="h-5 md:w-5 opacity-50 md:block hidden"
              src={
                isDark ? "/adaptive-logo-dark.svg" : "/adaptive-logo-light.svg"
              }
              alt="Footer logo"
              height={50}
              width={50}
            />
            <h5
              className={
                "dark:text-slate-400 font-semibold text-xs md:text-base " +
                roboto.className
              }
            >
              Copyright © {new Date().getFullYear()} Abh80
            </h5>
          </div>

          <div className="flex flex-wrap items-center">
            <Link
              target="_blank"
              href="https://github.com/abh80/portfolio"
              className="devicon-github-original dark:text-slate-400 hover:dark:text-slate-300 cursor-pointer text-[1.2rem] md:block hidden"
            ></Link>
            <Link
              target="_blank"
              href="https://github.com/abh80/portfolio"
              className={
                "dark:text-slate-400 hover:dark:text-slate-300 cursor-pointer text-xs block md:hidden underline " +
                roboto.className
              }
            >
              View on Github
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
