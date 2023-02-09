import Image from "next/image";
import { Kanit } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import ViewItem from "@/components/ViewItem";
import Link from "next/link";
import React from "react";
import ViewItemDivider from "@/components/ViewItemDivider";
import { SkillsSets, ShowProjects } from "@/utils/home";
import StackButton from "@/components/StackButton";
import axios from "axios";
import ProjectCard from "@/components/ProjectCard";
import * as process from "process";
import MetaResolver from "@/components/MetaResolver";

const kanit = Kanit({ subsets: ["latin"], weight: ["600", "500", "400"] });

export default function Home({ projects }: { projects: any }) {
  return (
    <>
      <MetaResolver
        title={"Home - Abh80"}
        description="My portfolio website!. To share your view on email contact@abh80.site"
      />

      <ViewItem>
        <>
          <section id={"about-me"}>
            <h1 className={kanit.className + " text-white text-2xl font-bold "}>
              <Link href={"#about-me"}>About Me</Link>
            </h1>
            <div className="h-5"></div>
            <h2
              className={kanit.className + " text-white text-lg leading-loose "}
            >
              Abh80 is a highly motivated individual currently enrolled in high
              school. They possess a strong interest in the field of programming
              and have a solid understanding of the programming languages like
              Java and JavaScript. Their eagerness to learn and grow their
              skills in this field make them a valuable asset to any team or
              project.
            </h2>
            <div className={"h-5 "} />
            <div className="float-right mr-10 ml-10 hover:cursor-pointer rounded-md">
              <Image
                className={styles.img + " md:visible hidden"}
                alt={"Logo"}
                src="/adaptive-logo-dark.svg"
                height={100}
                width={100}
                style={{ height: 200, width: 200 }}
              />
            </div>
            <h2
              className={kanit.className + " text-white text-lg leading-loose "}
            >
              My main interest in web development started in May 2020 when I
              started developing some static webpages and loved the frontend
              work, as time went on I also created some discord bots and Rest
              API projects with Express.js. Now for the most of the part I was
              really interested in Android development, so I went into learning
              Java and Android along with it I also learnt the spring boot.
            </h2>
            <div className="h-5" />
            <h2 className={kanit.className + " text-white text-lg "}>
              Along with programming my hobbies include listening to music,
              playing video games.
            </h2>
          </section>
          <ViewItemDivider />
          <section id={"skills"}>
            <h1 className={kanit.className + " text-white text-2xl font-bold"}>
              <Link scroll={true} href={"#skills"}>
                Skills
              </Link>
            </h1>
            <div className="h-5"></div>
            <h2 className={kanit.className + " text-white text-lg"}>
              I have experience with the following stacks / programming
              languages / tools :
            </h2>
            <div className="h-5"></div>
            <div className="flex flex-wrap gap-2">
              {SkillsSets.map((x, i) => (
                <StackButton key={i} href={x.url} name={x.name} icon={x.icon} />
              ))}
            </div>
          </section>
          <ViewItemDivider />
          <section id={"projects"}>
            <h1 className={kanit.className + " text-white text-2xl font-bold"}>
              <Link scroll={true} href={"#projects"}>
                Projects
              </Link>
            </h1>
            <div className="h-5"></div>
            <h2 className={kanit.className + " text-white text-lg"}>
              Here some pinned projects that I want to show on first first page
              but seems like for more you may want to go to{" "}
              <Link href={"/projects"} className="text-sky-400 hover:underline">
                the projects section
              </Link>
            </h2>
            <div className="h-5"></div>
            <div className="flex flex-wrap gap-5 mb-20">
              {projects.map((x: any, i: number) => (
                <ProjectCard key={i} project={x} />
              ))}
            </div>
          </section>
        </>
      </ViewItem>
    </>
  );
}

export async function getStaticProps() {
  let projects;
  if (process.env.NODE_ENV == "development") {
    projects = require("../test.json");
  } else {
    const res = await axios.get(
      "https://api.github.com/users/abh80/repos?type=all&per_page=100",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78",
        },
      }
    );

    projects = res.data.filter((x: { full_name: string }) =>
      ShowProjects.includes(x.full_name)
    );
    for (let i = 0; i < projects.length; i++) {
      const contrib = await axios.get(projects[i].contributors_url);
      projects[i].contributors = contrib.data;
    }
  }

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
