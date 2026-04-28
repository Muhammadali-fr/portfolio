"use client";

import Link from "next/link";
import HeaderContactMeButton from "../app/(root)/components/HeaderContactMeButton";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Skills", href: "/skills" },
    ];

    return (
        <>
            <header className="w-full border-b c-border-color bg-[#f5f5f5]/80 sticky top-0 backdrop-blur-md z-98">
                <div className="c-width flex items-center justify-between ">
                    <Link href={"/"}><p className="text-[20px] font-medium">Muhammadali</p></Link>
                    <ul className="hidden sm:flex items-center justify-center gap-5 text-[15px]">
                        <li className={`py-3 ${isActive("/") && "border-b border-black "}`}><Link href={"/"}>Home</Link></li>
                        <li className={`py-3 ${isActive("/about") && "border-b border-black "}`}><Link href={"/about"}>About</Link></li>
                        <li className={`py-3 ${isActive("/projects") && "border-b border-black "}`}><Link href={"/projects"}>Projects</Link></li>
                        <li className={`py-3 ${isActive("/skills") && "border-b border-black "}`}><Link href={"/skills"}>Skills</Link></li>
                        {/* <HeaderContactMeButton /> */}
                    </ul>

                    <div className="sm:hidden py-3">
                        <Image onClick={() => setOpen(true)} width={25} height={25} src={"/icons/menu.svg"} alt="menu icon" />
                    </div>
                </div>
            </header>
            <div
                onClick={() => setOpen(false)}
                className={`w-full h-screen fixed inset-0 bg-black/40 z-99 transition ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            <aside
                className={`fixed top-0 right-0 h-screen w-[280px] bg-white z-100 shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-3 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Menu</h2>
                    <X onClick={() => setOpen(false)} />
                </div>

                <ul className="p-6 flex flex-col gap-5 text-lg">
                    {links.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={isActive(item.href) ? "font-bold" : ""}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
};