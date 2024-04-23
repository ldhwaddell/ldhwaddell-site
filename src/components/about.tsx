import React from "react";
import { TypographyH2 } from "./typography/h2";
import { Separator } from "./ui/separator";

const About = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Separator />

      <div className="w-3/4 py-5 ">
        <TypographyH2 text="About Me" />
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I am a software engineeer interested in designing systems to collect,
          process, and analyze data.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I am a recent Computer Science graduate from Saint Mary&apos;s
          University.
        </p>
      </div>
    </section>
  );
};

export default About;
