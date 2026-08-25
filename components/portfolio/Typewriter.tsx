"use client";

import { useEffect, useState } from "react";

const words = [
  "Software Engineer",
  "AI Engineer",
  "Full Stack Developer",
];

export function Typewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let wordIndex = 0;
    let deleting = false;
    let currentText = "";

    const tick = () => {
      const fullText = words[wordIndex];

      if (!deleting) {
        currentText = fullText.slice(0, currentText.length + 1);
        setText(currentText);

        if (currentText === fullText) {
          timer = setTimeout(() => {
            deleting = true;
            tick();
          }, 1500);

          return;
        }

        timer = setTimeout(tick, 150);
        return;
      }

      currentText = fullText.slice(0, currentText.length - 1);
      setText(currentText);

      if (currentText === "") {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;

        timer = setTimeout(tick, 300);
        return;
      }

      timer = setTimeout(tick, 50);
    };

    timer = setTimeout(tick, 300);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  const wordsArray = text.split(" ");
  const lastWord = wordsArray.pop() || "";
  const previousText =
    wordsArray.length > 0 ? `${wordsArray.join(" ")} ` : "";

  return (
    <>
      {previousText}

      <span className="whitespace-nowrap">
        {lastWord}
        <span
          aria-hidden="true"
          className="ml-[2px] inline-block h-[0.9em] w-[2px] animate-pulse bg-[#E26546] align-middle sm:ml-1 sm:w-[4px]"
        />
      </span>
    </>
  );
}