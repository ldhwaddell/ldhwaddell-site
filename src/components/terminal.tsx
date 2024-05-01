"use client";

import localFont from "next/font/local";

import React, { useState, useEffect } from "react";
import { terminal } from "@/config/terminal";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

const monoFont = localFont({ src: "../fonts/JetBrainsMono-Regular.ttf" });

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width, height];
};

export function Terminal() {
  const [showRestart, setShowRestart] = useState(false);
  const [typedText, setTypedText] = useState(terminal.prompt);
  const [outputText, setOutputText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [width, height] = useDeviceSize();

  useEffect(() => {
    const typeText = async () => {
      const totalLength = terminal.prompt.length + terminal.command.length;

      if (typedText.length < totalLength) {
        const timer = setTimeout(() => {
          setTypedText(
            typedText +
              terminal.command.charAt(typedText.length - terminal.prompt.length)
          );
        }, terminal.typingSpeed);

        return () => clearTimeout(timer);
      } else if (!showOutput) {
        // Mimic delay after hitting enter on a command
        await new Promise((resolve) => setTimeout(resolve, terminal.sleep));
        setShowOutput(true);
        setShowRestart(true);
      }
    };

    typeText();
  }, [typedText, showOutput]);

  useEffect(() => {
    if (showOutput) {
      // Append the appropriate output based on screen size after command is fully typed
      const output =
        width < 880 ? terminal.outputMobile : terminal.outputDesktop;

      setOutputText(output);
    }
  }, [showOutput, width]);

  const handleRestart = () => {
    setTypedText(terminal.prompt);
    setShowRestart(false);
    setShowOutput(false);
    setOutputText("");
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-0 bg-background">
      <div
        className={cn(
          width < 880 ? " h-[288px]" : "h-[208px]",
          "w-3/4 min-w-[400px] bg-secondary relative"
        )}
      >
        <pre
          className={cn(
            monoFont.className,
            "h-full w-full text-primary p-6 font-mono whitespace-pre leading-tight flex flex-col relative"
          )}
        >
          <span>{typedText}</span>
          <span className="text-center">{outputText}</span>
        </pre>
        {showRestart && (
          <Button
            className="absolute bottom-2 right-2"
            variant="ghost"
            size="icon"
            onClick={handleRestart}
          >
            <Icons.reload className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Restart Animation</span>
          </Button>
        )}
      </div>
    </section>
  );
}
