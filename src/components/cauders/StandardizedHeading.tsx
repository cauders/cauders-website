
'use client';

import { cn } from "@/lib/utils";
import ScrollFadeIn from "./ScrollFadeIn";

type Line = {
  text: string;
  className?: string;
};

interface StandardizedHeadingProps {
  lines: (string | Line)[];
  className?: string;
}

export default function StandardizedHeading({ lines, className }: StandardizedHeadingProps) {
  const processedLines = lines.map(line =>
    typeof line === 'string' ? { text: line } : line
  );

  return (
    <h2 className={cn("font-headline text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-tight", className)}>
      {processedLines.map((line, lineIndex) => (
        <ScrollFadeIn
          key={lineIndex}
          direction={lineIndex % 2 === 0 ? 'left' : 'right'}
          delay={0.1}
          className="text-highlight-group"
        >
          <span className={cn("block", line.className)}>
            {line.text === "Ideas Into Powerful & Creative" ? (
              <>
                <span className="word-highlight">Ideas </span>
                <span className="word-highlight">Into </span>
                <span className="bg-gradient-text text-transparent bg-clip-text">
                  <span className="word-highlight">Powerful </span>
                  <span className="word-highlight">& </span>
                  <span className="word-highlight">Creative </span>
                </span>
              </>
            ) : line.text === "Why People Choose Cauders" ? (
              <>
                <span className="word-highlight">Why </span>
                <span className="word-highlight">People </span>
                <span className="bg-gradient-text text-transparent bg-clip-text">
                  <span className="word-highlight">Choose </span>
                  <span className="word-highlight">Cauders</span>
                </span>
              </>
            ) : line.text === "Reach Out Your Way" ? (
              <>
                <span className="word-highlight">Reach </span>
                <span className="word-highlight">Out </span>
                <span className="bg-gradient-text text-transparent bg-clip-text">
                  <span className="word-highlight">Your </span>
                  <span className="word-highlight">Way</span>
                </span>
              </>
            ) : (
              line.text.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="word-highlight">
                  {word}{' '}
                </span>
              ))
            )}
          </span>
        </ScrollFadeIn>
      ))}
    </h2>
  );
}
