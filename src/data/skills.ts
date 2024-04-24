import Airflow from "@/components/icons/apache-airflow.svg";
import AWS from "@/components/icons/aws.svg";
import Bash from "@/components/icons/bash.svg";
import Docker from "@/components/icons/docker.svg";
import Git from "@/components/icons/Git.svg";
import NextJS from "@/components/icons/nextjs.svg";
import Postgres from "@/components/icons/postgres.svg";
import Python from "@/components/icons/python.svg";
import React from "@/components/icons/react.svg";
import Selenium from "@/components/icons/selenium.svg";
import Tailwind from "@/components/icons/tailwind.svg";
import Typescript from "@/components/icons/typescript.svg";

type Skill = {
  text: string;
  Icon: React.ElementType;
};

export const skills: Skill[] = [
  { text: "Python", Icon: Python },
  { text: "Typescript", Icon: Typescript },
  { text: "Apache Airflow", Icon: Airflow },
  { text: "Amazon Web Services", Icon: AWS },
  { text: "Bash", Icon: Bash },
  { text: "Docker", Icon: Docker },
  { text: "Git", Icon: Git },
  { text: "Next.JS", Icon: NextJS },
  { text: "Postgres", Icon: Postgres },
  { text: "React", Icon: React },
  { text: "Selenium", Icon: Selenium },
  { text: "Tailwind", Icon: Tailwind },
];
