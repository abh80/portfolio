import React, {useEffect} from "react";
import Image from "next/image";
import {Kanit, Roboto} from "@next/font/google";
import Link from "next/link";

const roboto = Roboto({weight: "400", subsets: ["latin"]});

export default function ViewItem({children}: { children: JSX.Element }) {
    useEffect(() => {
        const hash: string = window.location.hash;
        if (!hash) return;
        const elem: Element | null = document.querySelector(hash);
        if (!elem) return;
        document.querySelector("#__next")?.scrollTo({top: elem.scrollTop})
    }, [])
    return (
        <>
            <header className="sticky top-0 w-full z-40 md:w-3/4 mx-auto p-2 backdrop-blur-sm">
                <div

                    className="p-2 w-full  bg-[#00000000] border-b-2 border-slate-50/[0.05]">
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