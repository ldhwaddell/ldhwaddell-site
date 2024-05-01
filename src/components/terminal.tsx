"use client";

import localFont from "next/font/local";

import React, { useState, useEffect } from "react";
import { terminal } from "@/config/terminal";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

const monoFont = localFont({ src: "../fonts/JetBrainsMono-Regular.ttf" });

export function Terminal() {
  const [showRestart, setShowRestart] = useState(false);
  const [typedText, setTypedText] = useState(terminal.prompt);
  const [outputText, setOutputText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : undefined
  );

  // Handle the width of the screen changing
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle the typing of the text
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

  // Handle the display of the command output based on screen size
  useEffect(() => {
    if (showOutput && width !== undefined) {
      const output =
        width < 881 ? terminal.outputMobile : terminal.outputDesktop;
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
    <section className="w-full flex flex-col items-center justify-center py-0 bg-secondary">
      <div className="w-3/4 min-w-[400px] relative terminal-height">
        <pre
          className={cn(
            monoFont.className,
            "h-full w-full text-terminal p-6 font-mono whitespace-pre leading-tight flex flex-col relative"
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
