import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Roboto } from "@next/font/google";
import Link from "next/link";
import styles from "../styles/Component.module.css";
import MenuItem from "@/components/MenuItem";
import { menuPages1 } from "@/utils/home";
import ChildMenuItem from "@/components/ChildMenuItem";
import { useRouter } from "next/router";

const roboto = Roboto({
  weight: ["400", "700", "500", "900"],
  subsets: ["latin"],
});

export default function ViewItem({ children }: { children: JSX.Element }) {
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
    console.log(articles);
    let h = document.querySelector("header");
    router.events.on("hashChangeComplete", () => {
      const { hash } = window.location;
      setHash(hash.replace("#", ""));
    });
    document.body.addEventListener("scroll", () => {
      if (!h) return;
      // @ts-ignore
      if (document.body.scrollTop > h.offsetHeight) {
        h.classList.remove("bg-[#00000000]");
        h.classList.add("bg-slate-900/[0.25]");
      } else {
        h.classList.add("bg-[#00000000]");
        h.classList.remove("bg-slate-900/[0.25]");
      }
    });
  }, []);
  return (
    <>
      <header
        className={
          "sticky top-0 w-full z-40  mx-auto p-2 backdrop-blur transition-colors border-slate-50/[0.05] border-b-2 " +
          styles.mainHeader
        }
      >
        <div className="p-2 w-full bg-[#00000000] max-w-7xl mx-auto">
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

      <div
        id={"main-content"}
        className={"max-w-7xl w-full mx-auto pt-5 " + styles.mainContent}
      >
        <div className="z-20 hidden fixed lg:block w-[18.5rem] h-full mb-20 px-5 overflow-auto pt-10">
          <section>
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
          <section className="mt-5">
            <h2 className={roboto.className + " text-slate-200 font-bold"}>
              On this page
            </h2>
            <section className="mt-2 border-l border-slate-600 space-y-1">
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
        </div>

        <div className="p-2 lg:ml-[19.5rem] px-5 lg:px-0">{children}</div>
      </div>
    </>
  );
}
