import React from "react";
import { Roboto } from "@next/font/google";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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
  const containerVariants: Variants = {
    hover: {},
    click: {},
  };
  const childVariants: Variants = {
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    click: {
      scale: 0.9,
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      whileHover="hover"
      whileTap="click"
    >
      <Link
        href={url}
        className={"flex group w-full cursor-pointer gap-3 items-center"}
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
        <motion.span
          variants={active ? {} : childVariants}
          className={[
            "text-[0.9rem] font-semibold align-middle transition-color",
            active
              ? "text-slate-200"
              : "text-slate-500 group-hover:text-slate-300",
            roboto.className,
          ].join(" ")}
        >
          {title}
        </motion.span>
      </Link>
    </motion.div>
  );
}
