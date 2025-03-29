import Container from "@/components/custom/Container";

import SkillsCard from "@/components/custom/SkillsCard";
import { skills } from "@/data";
import colorSharp from "../../assets/img/color-sharp.png";

export function Skills() {
  return (
    <div className="relative">
      <Container>
        <div
          className="bg-black/60  rounded-3xl dark:bg-slate-800 p-2 sm:p-10 mt-10  sm:-mt-12"
          id="skills"
        >
          <div className="flex flex-col justify-center items-center font-bold gap-2">
            <h2 className="text-3xl ">Skills</h2>

            <div className="text-gray-400 mt-4 max-w-4xl">
              <p className="text-gray-400 mt-4">
                Proficient in a diverse set of technologies, including frontend
                and backend frameworks, cloud platforms, and development tools.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 p-1 sm:grid-cols-3 gap-2 p-1 md:grid-cols-6 sm:gap-4 sm:p-2">
              {skills.map((data, index) => (
                <SkillsCard
                  key={index}
                  img={data.image.src}
                  name={data?.name}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <img
        className="absolute  inset-0 -z-4 w-[40%]"
        src={colorSharp.src}
        alt="Image"
      />
    </div>
  );
}
