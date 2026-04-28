


import Image from 'next/image';
import Link from 'next/link';

export default function Projects({ projects, color }: { projects: any, color: any }) {

    return (
        <ul className='w-full grid md:grid-cols-2 gap-5'>
            {projects.map((project: any, index: any) => (
                <li style={{ backgroundColor: color }} key={index} className={`rounded-3xl overflow-hidden h-[440px] border border-gray-100`}>
                    <Image className='border-b border-[#F5F5F5] w-full h-[250px] object-top object-cover' src={project.image} alt={project.title} />
                    <div className='p-10 space-y-5'>
                        <div>
                            <p className='text-[19px] font-semibold'>{project.title}</p>
                            <p className='text-[17px]'>{project.description}</p>
                        </div>

                        <Link className='mt-5 text-blue-700 hover:underline' href={project.link || "/"}>Visit site {'>'} </Link>
                    </div>
                </li>
            ))}
        </ul>
    )
};