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
        data-hash={hash}
        shallow={true}
        href={"#" + hash}
        className={
          "flex group w-full cursor-pointer gap-3 border-l border-slate-600 hover:border-slate-500 -ml-px " +
          (active ? "border-slate-400" : "")
        }
      >
        <motion.span
          variants={active ? {} : childVariants}
          className={[
            "text-[1rem] font-semibold align-middle  ml-5 capitalize",
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
