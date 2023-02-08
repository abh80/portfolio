import React from "react";
import { Roboto } from "@next/font/google";
import Link from "next/link";

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
    <Link
      href={"#" + hash}
      className={
        "flex group w-full cursor-pointer gap-3 transition-all border-l border-slate-600 hover:border-slate-500 -ml-px"
      }
    >
      <span
        className={[
          "text-[1rem] font-semibold align-middle transition-all ml-5 capitalize",
          active
            ? "text-slate-200"
            : "text-slate-500 group-hover:text-slate-300 group-hover:scale-[1.1] transform",
          roboto.className,
        ].join(" ")}
      >
        {title}
      </span>
    </Link>
  );
}
