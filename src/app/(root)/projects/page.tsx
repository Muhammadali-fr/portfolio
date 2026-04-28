
// array 
import Projects from "@/src/components/Projects";
import { projects } from "@/src/data/projects";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Products() {

    return (
        <div className="bg-white py-5">
            <div className="c-width space-y-5">
                <p className="text-[38px] font-semibold">Projects</p>
                <Projects projects={projects} color={"#f5f5f5"} />
                <div className="w-full flex items-center justify-center">
                    <Link href={"/skills"}>
                        <button className="flex gap-2 px-5 py-2 c-blue text-white rounded-3xl cursor-pointer group">
                            Skills
                            <MoveRight className="transition-all text-gray-300 group-hover:translate-x-1" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};