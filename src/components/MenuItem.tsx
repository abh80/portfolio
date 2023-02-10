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
        "flex group w-full cursor-pointer gap-2 transition-all items-center " +
        (active ? "" : "transform hover:scale-[1.1]")
      }
    >
      {icon ? (
        <div
          className={[
            `align-middle transition-all bg-slate-400/50 px-1 rounded-md items-center`,
            active ? bgColor : "",
            active ? "text-white" : "text-slate-300",
            `group-hover:bg-blue-400`,
          ].join(" ")}
        >
          <i className="fa-solid fa-house fa-sm"></i>
        </div>
      ) : null}
      <span
        className={[
          "text-[0.9rem] font-semibold align-middle transition-all",
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
