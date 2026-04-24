import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full border-b c-border-color bg-[#f5f5f5]/80 sticky top-0 backdrop-blur-md z-3">
            <div className="c-width flex items-center justify-between ">
                <Link href={"/"}><p className="text-[20px] font-medium">Muhammadali</p></Link>
                <ul className="flex items-center justify-center gap-5 text-[15px]">
                    <li className="border-b border-black  py-3"><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/projects"}>Projects</Link></li>
                    <li><Link href={"/skills"}>Skills</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </header>
    );
};