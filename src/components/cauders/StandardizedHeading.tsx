
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
    <h2 className={cn("font-headline text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight", className)}>
      {processedLines.map((line, lineIndex) => (
        <ScrollFadeIn
          key={lineIndex}
          direction={lineIndex % 2 === 0 ? 'left' : 'right'}
          delay={0.1}
          className="text-highlight-group"
        >
          <span className={cn("block", line.className)}>
            {line.text.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className="word-highlight">
                {word}{' '}
              </span>
            ))}
          </span>
        </ScrollFadeIn>
      ))}
    </h2>
  );
}
