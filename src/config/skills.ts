import { Icons } from "@/components/icons";

type Skill = {
  text: string;
  Icon: React.ElementType;
};

export const languages = [];
export const devops = [];
export const tools = [];

export const skills: Skill[] = [
  { text: "Python", Icon: Icons.python },
  { text: "Typescript", Icon: Icons.typeScript },
  { text: "Rust", Icon: Icons.rust },
  { text: "Amazon Web Services", Icon: Icons.aws },
  { text: "Bash", Icon: Icons.bash },
  { text: "Docker", Icon: Icons.docker },
  { text: "Git", Icon: Icons.git },
  { text: "Postgres", Icon: Icons.postgres },
  { text: "Apache Airflow", Icon: Icons.apacheAirflow },
  { text: "Pandas", Icon: Icons.pandas },
  { text: "Selenium", Icon: Icons.selenium },
  { text: "Next.js", Icon: Icons.nextJS },
  { text: "React", Icon: Icons.react },
];
