"use client"; // Ensure this runs only on the client side

import dynamic from "next/dynamic";
import Container from "@/components/custom/Container";
import ProjectsCard from "@/components/custom/ProjectsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "@/data";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const settings = {
  dots: true,
  infinite: false,
  speed: 0,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

export default function Projects() {
  return (
    <div className="bg-black pt-20" id="projects">
      <Container>
        <div
          className="bg-black/60 rounded-3xl dark:bg-slate-800 p-2 sm:p-10 mt-10 sm:-mt-15"
          id="skills"
        >
          <div className="flex flex-col justify-center items-center font-bold gap-2">
            <h2 className="text-3xl">Projects</h2>
            <div className="text-gray-400 mt-4 max-w-4xl">
              <p className="text-gray-400 mt-4">
                A collection of impactful projects showcasing expertise in
                frontend and backend development, API integrations, cloud
                computing, and performance optimization.
              </p>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {projects.map((data, i) => (
            <div key={i} className="px-2 flex justify-center">
              <ProjectsCard img={data.image.src} name={`Project ${i + 1}`} />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}
