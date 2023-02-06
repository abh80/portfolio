import Head from 'next/head'
import Image from 'next/image'
import {Roboto, Kanit} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import ViewItem from "@/components/ViewItem";
import Link from "next/link";
import React from "react";
import ViewItemDivider from "@/components/ViewItemDivider";
import {SkillsSets} from "@/utils/skillsets";
import StackButton from "@/components/StackButton";

const roboto = Roboto({weight: "400", subsets: ["latin"]});
const kanit = Kanit({subsets: ["latin"], weight: ["600", "500", "400"]});

export default function Home() {
    return (
        <>
            <Head>
                <title>Abh80 - Home</title>
                <meta name="description" content="A portfolio of Abh80"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="robots" content="index, follow"/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
            </Head>

            <ViewItem>
                <>
                    <section id={"about-me"}>
                        <h1 className={kanit.className + " text-white text-2xl font-bold"}>
                            <Link scroll={true} href={"#about-me"}>About Me</Link></h1>
                        <div className="h-5"></div>
                        <h2 className={kanit.className + " text-white text-lg leading-loose"}>Abh80 is a highly
                            motivated individual
                            currently enrolled in high school. They possess a strong interest in the field of
                            programming
                            and have a solid understanding of the programming languages like Java and JavaScript. Their
                            eagerness
                            to learn and grow their skills in this field make them a valuable asset to any team or
                            project.</h2>
                        <div className="h-5"/>
                        <div className="float-right mr-10 ml-10 hover:cursor-pointer rounded-md relative">
                            <Image className={styles.img1}
                                   alt={"Logo"}
                                   src="/adaptive-logo-dark.svg" height={100} width={100} style={{height: 200, width: 200}}/>
                            <Image className={styles.img2}
                                   alt={"Logo"}
                                   src="/logo.svg" height={100} width={100} style={{height: 200, width: 200}}/>
                        </div>
                        <h2 className={kanit.className + " text-white text-lg leading-loose"}>My main interest in web
                            development started in May 2020 when I started developing some static webpages and loved
                            the frontend work, as time went on I also created some discord bots and Rest API projects
                            with Express.js. Now for the most of the part I was really interested in Android
                            development, so I went into
                            learning and Java and Android along with it I also learnt the spring boot.</h2>
                        <div className="h-5"/>
                        <h2 className={kanit.className + " text-white text-lg"}>
                            Along with programming my hobbies include listening to music, playing video games.
                        </h2>
                    </section>
                    <ViewItemDivider/>
                    <section id={"skills"}>
                        <h1 className={kanit.className + " text-white text-2xl font-bold"}>
                            <Link scroll={true} href={"#skills"}>Skills</Link></h1>
                        <div className="h-5"></div>
                        <h2 className={kanit.className + " text-white text-lg"}>I have experience with the following
                            stacks / programming languages / tools :</h2>
                        <div className="h-5"></div>
                        <div className="flex flex-wrap gap-2">
                            {SkillsSets.map((x, i) => <StackButton key={i} href={x.url} name={x.name} icon={x.icon}/>)}
                        </div>
                    </section>
                    <ViewItemDivider/>
                    <section id={"projects"}>
                        <h1 className={kanit.className + " text-white text-2xl font-bold"}>
                            <Link scroll={true} href={"#projects"}>Projects</Link></h1>
                        <div className="h-5"></div>
                        <h2 className={kanit.className + " text-white text-lg"}>Here some pinned projects that I want to
                            show on first first page but seems like for more you may want to go to {" "}
                            <Link href={"/projects"} className="text-sky-400 hover:underline">the projects section
                            </Link>
                        </h2>
                        <div className="h-5"></div>
                        <div className="flex flex-wrap gap-2">

                        </div>
                    </section>
                </>
            </ViewItem>

        </>
    )
}
