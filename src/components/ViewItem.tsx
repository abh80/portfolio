import React, {useEffect} from "react";
import Image from "next/image";
import {Kanit, Roboto} from "@next/font/google";
import Link from "next/link";
import * as console from "console";

const roboto = Roboto({weight: "400", subsets: ["latin"]});

export default function ViewItem({children}: { children: JSX.Element }) {
    useEffect(() => {
        let t = document.getElementById("__next")
        let h = document.querySelector("header");
        if (!t) return;
        t.addEventListener("scroll", (c) => {
            if (!h) return;
            if (!t) return;
            // @ts-ignore
            if (t.scrollTop > h.offsetHeight) {
                h.classList.remove("bg-[#00000000]")
                h.classList.add("bg-slate-900/[0.25]")
            } else {

                h.classList.add("bg-[#00000000]")
                h.classList.remove("bg-slate-900/[0.25]")
            }
        })
    }, [])
    return (
        <>
            <header className="sticky top-0 w-full z-40 md:w-3/4 mx-auto p-2 backdrop-blur transition-colors border-slate-50/[0.05] border-b-2">
                <div

                    className="p-2 w-full  bg-[#00000000]">
                    <Link href={"/"} className="flex gap-2 w-fit">
                        <Image src={"/adaptive-logo-dark.svg"} alt={"Main logo for header"} width={30}
                               height={30}/>
                        <h1 className={roboto.className + " text-white text-2xl"}>Abh80</h1>
                    </Link>
                </div>
            </header>

            <div id={"main-content"} className={"md:w-3/4 w-full mx-auto p-2"}>

                <div className="md:grid grid-cols-[200px_minmax(200px,1fr)] pt-10 w-full">
                    <div></div>
                    <div className="">
                        {children}
                    </div>
                </div>

            </div>

        </>
    )
}