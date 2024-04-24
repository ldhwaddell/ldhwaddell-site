import React from "react";
import { TypographyH2 } from "./typography/h2";
import { skills } from "@/data/skills";
import { Skills } from "./skills";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center py-5"
    >
      <div className="w-3/4">
        <TypographyH2 text="About Me" />
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I am a dedicated software engineer interested in designing systems to
          collect, process, and analyze data.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Having recently graduated with a degree in Computer Science from Saint
          Mary&apos;s University, I am eager to develop my technical skills and
          grow as an engineer.
        </p>
      </div>

      <Skills />
    </section>
  );
};

export default About;
