"use client";

import localFont from "next/font/local";

import React, { useState, useEffect } from "react";
import { terminal } from "@/config/terminal";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

const monoFont = localFont({ src: "../fonts/JetBrainsMono-Regular.ttf" });

export function Terminal() {
  const [typedText, setTypedText] = useState("");
  const [showRestart, setShowRestart] = useState(false);

  useEffect(() => {
    if (typedText.length < terminal.text.length) {
      setTimeout(() => {
        setTypedText(typedText + terminal.text.charAt(typedText.length));
      }, 5);
    } else {
      setShowRestart(true);
    }
  }, [typedText, terminal.text]);

  const handleRestart = () => {
    setTypedText("");
    setShowRestart(false);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-0 bg-background">
      <div className="w-3/4 bg-secondary h-[300px] relative">
        <pre
          className={cn(
            monoFont.className,
            "text-primary p-6 font-mono whitespace-pre leading-tight"
          )}
        >
          {typedText}
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
