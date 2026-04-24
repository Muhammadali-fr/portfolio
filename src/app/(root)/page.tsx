import Hero from "@/src/components/Hero";
import Projects from "@/src/components/Projects";

// icons 
import { MoveRight } from "lucide-react";
import Link from "next/link";

// projects 
import { projectsHome } from "@/src/data/projects";

export default function Home() {
    return (
        <div>
            <Hero />

            {/* Projects  */}
            <div className="bg-[#f5f5f5] py-10">
                <div className="c-width space-y-5">
                    <p className="text-[38px] font-semibold">Projects</p>
                    <Projects projects={projectsHome} color="#FFFFFF" />
                    <div className="w-full flex items-center justify-center mt-10">
                        <Link href={"/projects"}>
                            <button className="flex gap-2 px-5 py-2 c-blue text-white rounded-3xl cursor-pointer group">
                                More Projects
                                <MoveRight className="transition-all text-gray-300 group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};