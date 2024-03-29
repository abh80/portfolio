import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function StackButton({
  href,
  name,
  icon,
}: {
  href: string;
  name: string;
  icon: string;
}) {
  return (
    <Link
      target="_blank"
      href={href}
      onMouseEnter={(event) => {
        event.currentTarget.classList.add(styles["is-hovered"]);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.classList.remove(styles["is-hovered"]);
      }}
      className={
        "flex items-center rounded-md border-2 border-sky-500 py-1 px-2 transition-all md:hover:bg-sky-500 group " +
        styles["stack-link-btn"]
      }
    >
      <span
        className={
          "dark:text-white flex gap-2 items-center md:group-hover:text-white transition-all " +
          roboto.className
        }
      >
        <i className={icon + " md:text-xl text-lg"}></i>{" "}
        <p className="md:text-lg text-base">{name}</p>
        <i
          className={
            "fa-solid fa-up-right-from-square fa-xs " + styles["ext-icon"]
          }
        ></i>
      </span>
    </Link>
  );
}
