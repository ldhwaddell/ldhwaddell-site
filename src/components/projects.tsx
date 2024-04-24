import React from "react";
import { TypographyH2 } from "./typography/h2";
import { projects } from "@/data/projects";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { Button } from "./ui/button";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center justify-center py-5 bg-background"
    >
      <div className="w-3/4">
        <TypographyH2 text="Projects" />


        <div className="grid grid-cols gap-3 mt-3">
          {projects.map((project, index) => {
            return (
              <GlowCapture key={index}>
                <Glow color={project.color}>
                  <div className="grid grid-cols-2 border rounded-md bg-background-secondary px-5 py-4 glow:ring-[.5] glow:border-glow glow:ring-glow glow:bg-glow/[.15]">
                    <Image
                      src={project.image.path}
                      width={200}
                      height={200}
                      alt={project.image.alt}
                    />
                    <p>{project.description}</p>
                  </div>
                </Glow>
              </GlowCapture>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
