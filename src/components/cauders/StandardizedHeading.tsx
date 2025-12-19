
'use client';

import { cn } from "@/lib/utils";
import ScrollFadeIn from "./ScrollFadeIn";

type Line = {
  text: string;
  className?: string;
  isGradient?: boolean;
};

interface StandardizedHeadingProps {
  lines: (string | Line)[];
  className?: string;
}

export default function StandardizedHeading({ lines, className }: StandardizedHeadingProps) {
  const processedLines = lines.map(line =>
    typeof line === 'string' ? { text: line, isGradient: false } : line
  );

  return (
    <h2 className={cn("font-headline text-2xl sm:text-4xl md:text-5xl text-foreground leading-tight font-medium", className)}>
      {processedLines.map((line, lineIndex) => (
        <ScrollFadeIn
          key={lineIndex}
          direction={lineIndex % 2 === 0 ? 'left' : 'right'}
          delay={0.1}
          className="text-highlight-group"
        >
          <span className={cn("block py-0.5 md:py-1", line.className)}>
            {line.isGradient ? (
                <span className="bg-gradient-text text-transparent bg-clip-text">
                    {line.text.split(' ').map((word, wordIndex) => (
                        <span key={wordIndex} className="word-highlight">
                            {word}{' '}
                        </span>
                    ))}
                </span>
            ) : line.text.includes('<span') ? (
              <span dangerouslySetInnerHTML={{ __html: line.text }} />
            ) : line.text === "Ideas Into Powerful & Creative" ? (
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
            ) : line.text === "Why Join Cauders?" ? (
                <>
                    <span className="word-highlight">Why </span>
                    <span className="bg-gradient-text text-transparent bg-clip-text">
                        <span className="word-highlight">Join </span>
                        <span className="word-highlight">Cauders?</span>
                    </span>
                </>
            ) : line.text === "Find Your Next Opportunity with Us" ? (
                <>
                    <span className="word-highlight">Find </span>
                    <span className="word-highlight">Your </span>
                    <span className="word-highlight">Next </span>
                    <span className="bg-gradient-text text-transparent bg-clip-text">
                        <span className="word-highlight">Opportunity </span>
                        <span className="word-highlight">with </span>
                        <span className="word-highlight">Us</span>
                    </span>
                </>
            ) : line.text === "Reach Out Your Way" ? (
              <>
                <span className="word-highlight">Reach Out </span>
                <span className="bg-gradient-text text-transparent bg-clip-text">
                  <span className="word-highlight">Your </span>
                  <span className="word-highlight">Way</span>
                </span>
              </>
            ) : line.text === "We Have Answers" ? (
                <>
                    <span className="word-highlight">We </span>
                    <span className="word-highlight">Have </span>
                    <span className="bg-gradient-text text-transparent bg-clip-text">
                        <span className="word-highlight">Answers</span>
                    </span>
                </>
            ) : line.text === "You Have Questions," ? (
              <>
                <span className="word-highlight">You </span>
                <span className="word-highlight">Have </span>
                <span className="bg-gradient-text text-transparent bg-clip-text">
                  <span className="word-highlight">Questions,</span>
                </span>
              </>
            ) : line.text === "Let Cauders Simplify Your Workflow" ? (
                <>
                    <span className="word-highlight">Let </span>
                    <span className="word-highlight">Cauders </span>
                    <span className="bg-gradient-text text-transparent bg-clip-text">
                        <span className="word-highlight">Simplify </span>
                    </span>
                    <span className="word-highlight">Your </span>
                    <span className="word-highlight">Workflow</span>
                </>
            ) : line.text === "Trusted by Leaders Across Industries" ? (
              <>
                  <span className="word-highlight">Trusted </span>
                  <span className="word-highlight">by </span>
                  <span className="word-highlight">Leaders </span>
                  <span className="bg-gradient-text text-transparent bg-clip-text">
                      <span className="word-highlight">Across </span>
                      <span className="word-highlight">Industries</span>
                  </span>
              </>
            ) : line.text === "Our Core Capabilities" ? (
              <>
                <span className="word-highlight">Our </span>
                <span className="word-highlight">Core </span>
                 <span className="bg-gradient-text text-transparent bg-clip-text">
                  <span className="word-highlight">Capabilities</span>
                </span>
              </>
            ) : line.text === "Powering Sustainable Business Growth with Digital Solutions" ? (
                <>
                    <span className="word-highlight">Powering </span>
                    <span className="word-highlight">Sustainable </span>
                    <span className="bg-gradient-text text-transparent bg-clip-text">
                        <span className="word-highlight">Business </span>
                        <span className="word-highlight">Growth </span>
                    </span>
                    <span className="word-highlight">with </span>
                    <span className="word-highlight">Digital </span>
                    <span className="word-highlight">Solutions</span>
                </>
            ) : line.text === "Tailored Digital Solutions for Every Client Type" ? (
                <>
                    <span className="word-highlight">Tailored </span>
                    <span className="word-highlight">Digital </span>
                    <span className="word-highlight">Solutions </span>
                    <span className="word-highlight">for </span>
                    <span className="bg-gradient-text text-transparent bg-clip-text">
                        <span className="word-highlight">Every </span>
                        <span className="word-highlight">Client </span>
                    </span>
                    <span className="word-highlight">Type</span>
                </>
            ) : line.text === "The Minds Behind Our Success" ? (
              <>
                <span className="word-highlight">The </span>
                <span className="word-highlight">Minds </span>
                <span className="word-highlight">Behind </span>
                <span className="bg-gradient-text text-transparent bg-clip-text">
                  <span className="word-highlight">Our </span>
                  <span className="word-highlight">Success</span>
                </span>
              </>
            ) : line.text === "Let's Build Something Great Together" ? (
                <>
                    <span className="word-highlight">Let's </span>
                    <span className="word-highlight">Build </span>
                    <span className="word-highlight">Something </span>
                    <span className="bg-gradient-text text-transparent bg-clip-text">
                        <span className="word-highlight">Great </span>
                        <span className="word-highlight">Together</span>
                    </span>
                </>
            ) : line.text === "Visit Our Office" ? (
                <>
                    <span className="word-highlight">Visit </span>
                    <span className="bg-gradient-text text-transparent bg-clip-text">
                        <span className="word-highlight">Our </span>
                        <span className="word-highlight">Office</span>
                    </span>
                </>
            ) : line.text === "Share Your Feedback" ? (
                <>
                    <span className="word-highlight">Share </span>
                    <span className="word-highlight">Your </span>
                    <span className="bg-gradient-text text-transparent bg-clip-text">
                        <span className="word-highlight">Feedback</span>
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
