import ViewItem from "@/components/ViewItem";
import Link from "next/link";
import React from "react";
import ViewItemDivider from "@/components/ViewItemDivider";
import { SkillsSets, ShowProjects } from "@/utils/main";
import StackButton from "@/components/StackButton";
import axios from "axios";
import ProjectCard from "@/components/ProjectCard";
import * as process from "process";
import MetaResolver from "@/components/MetaResolver";
import { motion, Variants } from "framer-motion";
import { kanit, roboto } from "@/providers/font";
export default function Home({ projects }: { projects: any }) {
  const containerVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <MetaResolver
        title={"Home - Abh80"}
        description="Abh80 is a highly motivated individual currently enrolled in high
              school. He possess a strong interest in the field of programming
              and have a solid understanding of the programming languages like
              Java and JavaScript. Their eagerness to learn and grow their
              skills in this field make them a valuable asset to any team or
              project."
      />

      <ViewItem
        header={
          <div className="w-full max-w-7xl mx-auto px-3 relative lg:px-5">
            <motion.div>
              <motion.h2
                transition={{ delay: 0.1 }}
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                className={
                  "font-bold text-[1rem] ml-0.5 text-sky-400 md:text-[1.7rem] " +
                  kanit.className
                }
              >
                Home
              </motion.h2>
            </motion.div>
            <motion.h1
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className={
                "text-3xl font-bold mt-2 dark:text-slate-200 md:text-7xl " +
                roboto
              }
            >
              Hi, I am Abh80
            </motion.h1>
            <motion.h3
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className={
                "mt-3 text-[1rem] dark:text-slate-400 font-semibold md:text-[1.2rem] max-w-[300px] lg:max-w-fit md:max-w-[600px] md:ml-1 " +
                roboto.className
              }
            >
              a{" "}
              <b className="dark:text-slate-300">Java / Javascript developer</b>
              , interested in web and android applications
            </motion.h3>
          </div>
        }
      >
        <>
          <section id={"about-me"}>
            <h1
              className={
                kanit.className +
                " dark:text-white md:text-2xl text-xl font-bold "
              }
            >
              <Link href={"#about-me"}>About Me</Link>
            </h1>
            <div className="h-5"></div>
            <h2
              className={
                kanit.className +
                " dark:text-white md:text-lg text-base leading-loose "
              }
            >
              Abh80 is a highly motivated individual currently enrolled in high
              school. He possess a strong interest in the field of programming
              and have a solid understanding of the programming languages like
              Java and JavaScript. Their eagerness to learn and grow their
              skills in this field make them a valuable asset to any team or
              project.
            </h2>
            <div className={"h-5 "} />
            <h2
              className={
                kanit.className +
                " dark:text-white md:text-lg text-base leading-loose "
              }
            >
              My main interest in web development started in May 2020 when I
              started developing some static webpages and loved the frontend
              work, as time went on I also created some discord bots and Rest
              API projects with Express.js. Now for the most of the part I was
              really interested in Android development, so I went into learning
              Java and Android along with it I also learnt the spring boot.
            </h2>
            <div className="h-5" />
            <h2 className={kanit.className + " dark:text-white text-lg "}>
              Along with programming my hobbies include listening to music,
              playing video games.
            </h2>
          </section>
          <ViewItemDivider />
          <section id={"skills"}>
            <h1
              className={
                kanit.className +
                " dark:text-white md:text-2xl text-xl font-bold"
              }
            >
              <Link scroll={true} href={"#skills"}>
                Skills
              </Link>
            </h1>
            <div className="h-5"></div>
            <h2
              className={
                kanit.className + " dark:text-white md:text-lg text-base"
              }
            >
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
            <h1
              className={
                kanit.className +
                " dark:text-white md:text-2xl text-xl font-bold"
              }
            >
              <Link scroll={true} href={"#projects"}>
                Projects
              </Link>
            </h1>
            <div className="h-5"></div>
            <h2
              className={
                kanit.className + " dark:text-white md:text-lg text-base"
              }
            >
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
