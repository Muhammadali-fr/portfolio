"use client";

import Link from "next/link";
import HeaderContactMeButton from "../app/(root)/components/HeaderContactMeButton";
import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header className="w-full border-b c-border-color bg-[#f5f5f5]/80 sticky top-0 backdrop-blur-md z-3">
            <div className="c-width flex items-center justify-between ">
                <Link href={"/"}><p className="text-[20px] font-medium">Muhammadali</p></Link>
                <ul className="flex items-center justify-center gap-5 text-[15px]">
                    <li className={`py-3 ${isActive("/") && "border-b border-black "}`}><Link href={"/"}>Home</Link></li>
                    <li className={`py-3 ${isActive("/about") && "border-b border-black "}`}><Link href={"/about"}>About</Link></li>
                    <li className={`py-3 ${isActive("/projects") && "border-b border-black "}`}><Link href={"/projects"}>Projects</Link></li>
                    <li className={`py-3 ${isActive("/skills") && "border-b border-black "}`}><Link href={"/skills"}>Skills</Link></li>
                    {/* <HeaderContactMeButton /> */}
                </ul>
            </div>
        </header>
    );
};