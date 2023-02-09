import Link from "next/link";
import { Kanit, Roboto } from "@next/font/google";
import Image from "next/image";
import styles from "../styles/Component.module.css";
import React from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ["500", "400", "700"] });
const kanit = Kanit({ subsets: ["latin"], weight: ["600", "500", "400"] });
export default function ProjectCard({ project }: { project: any }) {
  function showExtIcon(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.currentTarget.parentElement?.classList.add(styles.showLink);
  }

  function hideExtIcon(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.currentTarget.parentElement?.classList.remove(styles.showLink);
  }

  return (
    <div
      className={
        "hover:cursor-pointer overflow-hidden relative border-2 border-sky-500 gap-2 rounded-md p-3 w-96 bg-sky-700/30 shadow-md z-20 hover:-translate-y-2 relative transform transition-all backdrop-blur-xl shadow-sky-500 grid grid-flow-row " +
        styles.card
      }
    >
      <Link
        href={project.html_url}
        onMouseEnter={showExtIcon}
        onMouseLeave={hideExtIcon}
        target={"_blank"}
        className="w-fit flex"
      >
        <h2
          className={
            "text-sky-300 text-md font-bold hover:underline " + kanit.className
          }
        >
          {project.full_name}
        </h2>
      </Link>
      <i
        className={
          "fa-solid fa-up-right-from-square fa-sm text-white absolute top-5 right-3 " +
          styles["ext-icon"]
        }
      ></i>
      <span
        className={
          "fa-solid fa-arrow-right fa-sm text-white absolute top-5 right-3 " +
          styles["int-icon"]
        }
      ></span>

      <Link
        href={project.html_url}
        onMouseEnter={showExtIcon}
        onMouseLeave={hideExtIcon}
        target={"_blank"}
        className="w-max-fit flex"
      >
        <h1
          className={
            "text-white text-xl font-bold hover:underline " + kanit.className
          }
        >
          {project.name}
        </h1>
      </Link>
      <div className="flex gap-1 flex-wrap">
        {project.topics.map((x: string, i: number) => (
          <div
            className="text-white text-md px-2 py-0.5 rounded-full bg-sky-700"
            key={i}
          >
            {x}
          </div>
        ))}
      </div>
      <h2 className="text-white text-lg font-semibold ">
        {project.description}
      </h2>
      <div className="grid grid-flow-col mb-1 gap-1">
        <div className="flex gap-1 h-full align-middle items-center ">
          <i className="fa-regular fa-star fa-sm text-white"></i>
          <span className={roboto.className + " text-md text-white "}>
            {project.stargazers_count}
          </span>
        </div>
        <div className="flex gap-1 relative">
          {project.contributors.map((x: any, i: number) => (
            <Image
              src={x.avatar_url}
              className={
                "rounded-full w-8 h-8 transform absolute bg-black ring-2 ring-sky-700"
              }
              style={{ left: i * 10 + i * 10 }}
              key={i}
              width={50}
              height={50}
              alt={"contributor profile picture"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
