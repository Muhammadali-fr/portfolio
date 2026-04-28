import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Skills() {
    return (
        <section className="flex-1 flex flex-col items-center justify-between py-5">
            <div className="c-width space-y-5">
                <p className="text-[38px] font-semibold">Skills</p>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML image" />
                        <p className="font-bold">HTML</p>
                    </li>

                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="HTML image" />
                        <p className="font-bold">CSS</p>
                    </li>

                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="HTML image" />
                        <p className="font-bold">Bootstrap</p>
                    </li>


                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="HTML image" />
                        <p className="font-bold">Tailwind CSS</p>
                    </li>

                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="HTML image" />
                        <p className="font-bold">JavaScript</p>
                    </li>

                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
                        <p className="font-bold">TypeScript</p>
                    </li>

                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="GIT" />
                        <p className="font-bold">GIT</p>
                    </li>

                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Git Hub" />
                        <p className="font-bold">Git Hub</p>
                    </li>

                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                        <p className="font-bold">MongoDB</p>
                    </li>

                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="Postgre SQL" />
                        <p className="font-bold">Postgre SQL</p>
                    </li>


                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="Amazon WS" />
                        <p className="font-bold">Amazon WS</p>
                    </li>

                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" alt="Prisma ORM" />
                        <p className="font-bold">Prisma ORM</p>
                    </li>

                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node JS" />
                        <p className="font-bold">Node JS</p>
                    </li>

                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React JS" />
                        <p className="font-bold">React JS</p>
                    </li>

                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" alt="Nest JS" />
                        <p className="font-bold">Nest JS</p>
                    </li>

                    <li className="bg-[#F5F5F5] flex flex-col items-center justify-center gap-2 py-5 rounded-3xl ">
                        <Image width={100} height={80} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next JS" />
                        <p className="font-bold">Next JS</p>
                    </li>
                </ul>
            </div>
            <div className="w-full flex items-center justify-center">
                <Link href={"/"}>
                    <button className="flex gap-2 px-5 py-2 c-blue text-white rounded-3xl cursor-pointer group">
                        Contact me
                        <MoveRight className="transition-all text-gray-300 group-hover:translate-x-1" />
                    </button>
                </Link>
            </div>
        </section>
    )
}