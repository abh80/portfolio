import React from "react";
import { Roboto } from "@next/font/google";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
export default function ChildMenuItem({
  title,
  active,
  hash,
}: {
  title: string;
  active?: boolean;
  hash: string;
}) {
  return (
    <div>
      <Link
        data-hash={hash}
        shallow={true}
        href={"#" + hash}
        className={
          "flex group w-full cursor-pointer gap-3 border-l hover:border-slate-700 border-slate-400 dark:border-slate-600 hover:dark:border-slate-500 -ml-px " +
          (active ? "dark:border-slate-400 border-slate-900" : "")
        }
      >
        <span
          className={[
            "text-[1rem] font-semibold align-middle ml-5 capitalize",
            active
              ? "dark:text-slate-200 text-slate-900"
              : "dark:text-slate-500 dark:group-hover:text-slate-300 text-slate-600",
            roboto.className,
          ].join(" ")}
        >
          {title}
        </span>
      </Link>
    </div>
  );
}
