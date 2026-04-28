import Link from "next/link";
import StackedImages from "./components/StackedImages";
import { MoveRight } from "lucide-react";

export default function About() {
    return (
        <section className="flex-1 flex flex-col items-center justify-between py-5">
            <div className="c-width space-y-5 py-5 text-[17px]">
                <StackedImages />
                <p className="text-[38px] font-semibold">About me</p>
                <p>I’m <span className="font-bold">Jamolov Muhammadali</span>, a <span className="font-bold">Full-Stack Web Developer</span> from Uzbekistan. I have practical experience building modern web applications from start to finish. My main technologies are <span>JavaScript, TypeScript, React, Next.js, Node.js, and NestJS</span>. I also have solid experience in frontend design, backend systems, and improving website performance.</p>
                <p>I have worked on real projects where I increased website speed, fixed bugs, and improved code structure for better scalability.</p>
                <p>I also build backend systems and APIs with experience in databases, <span className="font-bold">Prisma, Drizzle ORM, and AWS storage services</span>. Many of my personal projects are full-stack applications, including marketplace-style platforms.</p>
                <p>I also worked as a <span className="font-bold">Frontend Instructor</span> at IT Park Baliqchi, where I helped students learn web development and guided 6 students to earn certificates. This experience improved my communication and problem-solving skills.</p>
                <p>I always enjoy learning new technologies and improving my skills. My goal is to become a strong software engineer, work on meaningful projects, and grow with professional teams.</p>
            </div>

            <div className="w-full flex items-center justify-center">
                <Link href={"/projects"}>
                    <button className="flex gap-2 px-5 py-2 c-blue text-white rounded-3xl cursor-pointer group">
                         Projects
                        <MoveRight className="transition-all text-gray-300 group-hover:translate-x-1" />
                    </button>
                </Link>
            </div>
        </section>
    )
}