import React from "react";
import { Roboto } from "@next/font/google";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
export default function MenuItem({
  title,
  icon,
  active,
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
      className={
        "flex group w-full cursor-pointer gap-3 transition-all items-center " +
        (active ? "" : "transform hover:scale-[1.1]")
      }
    >
      {icon ? (
        <span
          className={[
            "transition-all bg-slate-400/50 p-1 material-symbols-outlined material-symbols-filled text-white text-[1.1rem] rounded-md group-hover:" +
              bgColor,
            active ? bgColor : "",
          ].join(" ")}
        >
          {icon}
        </span>
      ) : null}
      <span
        className={[
          "text-[1rem] font-semibold align-middle transition-all",
          active
            ? "text-slate-200"
            : "text-slate-500 group-hover:text-slate-300",
          roboto.className,
        ].join(" ")}
      >
        {title}
      </span>
    </Link>
  );
}
