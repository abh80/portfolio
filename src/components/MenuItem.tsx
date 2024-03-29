import React from "react";
import { Roboto } from "@next/font/google";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
export default function MenuItem({
  title,
  icon,
  bgColor,
  url,
}: {
  title: string;
  icon?: string;
  active?: boolean;
  bgColor?: string;
  url: string;
}) {
  return (
    <Link
      href={url}
      className={"flex group w-full cursor-pointer gap-3 items-center"}
    >
      {icon ? (
        <div
          className={[
            `align-middle transition-all bg-slate-400/50 px-1 rounded-md items-center text-white`,
            bgColor,
          ].join(" ")}
        >
          <i className={icon}></i>
        </div>
      ) : null}
      <span
        className={[
          "text-[0.9rem] font-semibold align-middle transition-color",
          "dark:text-slate-200",

          roboto.className,
        ].join(" ")}
      >
        {title}
      </span>
    </Link>
  );
}
