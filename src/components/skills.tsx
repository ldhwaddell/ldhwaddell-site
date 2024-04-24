import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { skills } from "@/data/skills";

export function Skills() {
  return (
    <div className="px-4">
      <p className="text-muted-foreground font-semibold text-xl mb-2">Skills</p>

      <div className="grid grid-cols-12 gap-3">
        <TooltipProvider delayDuration={100}>
          {skills.map((skill, index) => {
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="p-2 h-16 w-16 border bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md">
                    <skill.Icon className="transition-all filter hover:filter-none grayscale" />
                  </div>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{skill.text}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>
    </div>
  );
}
