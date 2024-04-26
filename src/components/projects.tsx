import React from "react";
import { TypographyH2 } from "./typography/h2";
import { projects } from "@/data/projects";
import { GlowCapture, Glow } from "@codaworks/react-glow";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Link from "next/link";
import ExternalLink from "@/components/icons/external-link.svg";
import { Separator } from "./ui/separator";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center justify-center py-5 bg-background"
    >
      <div className="w-3/4">
        <TypographyH2 text="Projects" />

        <div className="grid grid-cols gap-3 mt-4">
          {projects.map((project, index) => {
            return (
              <GlowCapture key={index}>
                <Glow color={project.color}>
                  <div className="grid grid-cols-2 border rounded-md bg-background-secondary px-5 py-5 glow:ring-[.5] glow:border-glow glow:ring-glow glow:bg-glow/[.15]">
                    <Image
                      src={project.image.path}
                      width={400}
                      height={400}
                      alt={project.image.alt}
                      className="rounded-md drop-shadow-xl"
                    />
                    <div>
                      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <Separator className="mb-2" />
                      {project.tags.map((tag, index) => {
                        return (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="mr-2 mb-4"
                          >
                            {tag}
                          </Badge>
                        );
                      })}
                      <p className="mb-4">{project.description}</p>
                      <Button asChild>
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub <ExternalLink className="ml-3" />
                        </Link>
                      </Button>
                    </div>
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
