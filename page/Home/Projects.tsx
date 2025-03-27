import Container from "@/components/custom/Container";
import SkillsCard from "@/components/custom/SkillsCard";
import { skills } from "@/data";

export default function Projects() {
    return (
        <div className="bg-black pt-20" id="projects">
            <Container>
                <div className='bg-black/60  rounded-3xl dark:bg-slate-800 p-2 sm:p-10 mt-10  sm:-mt-15' id="skills">
                    <div className='flex flex-col justify-center items-center font-bold gap-2'>
                        <h2 className='text-3xl '>Projects</h2>
                        <div className="text-gray-400 mt-4 max-w-4xl">
                            <p className="text-gray-400 mt-4">
                                A collection of impactful projects showcasing expertise in frontend and backend development, API integrations, cloud computing, and performance optimization. These projects highlight problem-solving skills, scalability, and a user-centric approach in building innovative and efficient solutions.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 p-1 sm:grid-cols-3 gap-2 p-1 md:grid-cols-6 sm:gap-4 sm:p-2">
                            {skills.map((data, index) => (
                                <SkillsCard key={index} img={data.image.src} name={data?.name} />
                            ))}
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}
