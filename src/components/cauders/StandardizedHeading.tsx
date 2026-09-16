
'use client';

import { cn } from "@/lib/utils";
import ScrollFadeIn from "./ScrollFadeIn";
import { typography } from "@/lib/typography";

type Line = {
 text: string;
 className?: string;
 isGradient?: boolean;
 inline?: boolean;
 gradientLastWords?: number;
};

interface StandardizedHeadingProps {
 lines: (string | Line)[];
 className?: string;
 animationType?: 'up' | 'left' | 'alternate';
 gradientType?: 'dark' | 'light';
}

function getSmartGradientLastWords(text: string, requestedWords: number): number {
 if (!text) return requestedWords;
 const words = text.split(' ');
 
 // If the heading is very short (2 words), prevent the whole thing from being a gradient
 // by falling back to highlighting just 1 word, unless requested otherwise for some reason.
 if (words.length <= 2 && requestedWords >= 2) return 1;
 if (words.length <= requestedWords) return requestedWords;

 let startIdx = words.length - requestedWords;
 const stopWords = ['by', 'for', 'across', 'every', 'the', 'and', '&', 'with', 'in', 'to', 'of', 'on', 'at', 'our', 'a', 'an'];
 
 // Shift the start index to the right if it lands on a stop word
 while (startIdx < words.length - 1 && stopWords.includes(words[startIdx].toLowerCase())) {
 startIdx++;
 }
 
 return words.length - startIdx;
}

export default function StandardizedHeading({ lines, className, animationType = 'up', gradientType = 'dark' }: StandardizedHeadingProps) {
 const processedLines: Line[] = lines.map(line => {
 if (typeof line === 'string') {
 return { text: line, isGradient: false };
 }
 return {
 ...line,
 gradientLastWords: line.gradientLastWords ? getSmartGradientLastWords(line.text, line.gradientLastWords) : undefined
 };
 });

 return (
 <h2 className={cn(`font-headline ${typography.headingMain} text-foreground !leading-[1.2] font-medium tracking-tight`, className)}>
 {processedLines.map((line, lineIndex) => (
 <ScrollFadeIn
 key={lineIndex}
 direction={animationType === 'alternate' ? (lineIndex % 2 === 0 ? 'left' : 'right') : animationType}
 delay={animationType === 'alternate' ? 0.1 : (lineIndex * 150 + 100)}
 className={cn("text-highlight-group", line.inline ? "inline-block mr-[0.25em]" : "block")}
 >
 <span className={cn("py-0.5 md:py-1", line.className, line.inline ? "inline-block" : "block")}>
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
 ) : line.text === "Built for People Who Build" ? (
 <>
 <span className="word-highlight">Built </span>
 <span className="word-highlight">for </span>
 <span className="word-highlight">People </span>
 <span className="bg-gradient-text text-transparent bg-clip-text">
 <span className="word-highlight">Who </span>
 <span className="word-highlight">Build</span>
 </span>
 </>
 ) : line.text === "Explore What's Open" ? (
 <>
 <span className="word-highlight">Explore </span>
 <span className="bg-gradient-text text-transparent bg-clip-text">
 <span className="word-highlight">What's </span>
 <span className="word-highlight">Open</span>
 </span>
 </>
 ) : line.text === "Ready to Push Boundaries?" ? (
 <>
 <span className="word-highlight">Ready </span>
 <span className="word-highlight">to </span>
 <span className="bg-gradient-text text-transparent bg-clip-text">
 <span className="word-highlight">Push </span>
 <span className="word-highlight">Boundaries?</span>
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
 ) : line.text === "Join Our Team" ? (
 <>
 <span className="word-highlight">Join </span>
 <span className="word-highlight">Our </span>
 <span className="bg-gradient-text text-transparent bg-clip-text">
 <span className="word-highlight">Team</span>
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
 ) : line.text === "Reach Out Your Way" ? (
 <>
 <span className="word-highlight">Reach Out </span>
 <span className="bg-gradient-text text-transparent bg-clip-text">
 <span className="word-highlight">Your </span>
 <span className="word-highlight">Way</span>
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
 <span className={cn("text-transparent bg-clip-text", gradientType === 'light' ? 'bg-gradient-text-light' : 'bg-gradient-text')}>
 <span className="word-highlight">Business </span>
 <span className="word-highlight">Growth </span>
 </span>
 <span className="word-highlight">with </span>
 <span className="word-highlight">Digital </span>
 <span className="word-highlight">Solutions</span>
 </>
 ) : line.text === "Cauders Web Development" ? (
 <>
 <span className="word-highlight">Cauders </span>
 <span className={cn("text-transparent bg-clip-text", gradientType === 'light' ? 'bg-gradient-text-light' : 'bg-gradient-text')}>
 <span className="word-highlight">Web </span>
 <span className="word-highlight">Development</span>
 </span>
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
 ) : line.text === "The Values That Define Us" ? (
 <>
 <span className="word-highlight">The </span>
 <span className="bg-gradient-text text-transparent bg-clip-text">
 <span className="word-highlight">Values </span>
 </span>
 <span className="word-highlight">That </span>
 <span className="word-highlight">Define </span>
 <span className="word-highlight">Us</span>
 </>
 ) : line.text === "Meet With Our Experts" ? (
 <>
 <span className="word-highlight">Meet </span>
 <span className="word-highlight">With </span>
 <span className="bg-gradient-text text-transparent bg-clip-text">
 <span className="word-highlight">Our </span>
 <span className="word-highlight">Experts</span>
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
 ) : line.text === "Build the Future With Us" ? (
 <>
 <span className="word-highlight">Build </span>
 <span className="word-highlight">the </span>
 <span className="bg-gradient-text text-transparent bg-clip-text">
 <span className="word-highlight">Future </span>
 <span className="word-highlight">With </span>
 <span className="word-highlight">Us</span>
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
 ) : line.text === "Looking for something else?" ? (
 <>
 <span className="word-highlight">Looking </span>
 <span className="word-highlight">for </span>
 <span className="bg-gradient-text text-transparent bg-clip-text">
 <span className="word-highlight">something </span>
 <span className="word-highlight">else?</span>
 </span>
 </>
 ) : line.gradientLastWords ? (
 <>
 {line.text.split(' ').slice(0, -line.gradientLastWords).map((word, wordIndex) => (
 <span key={`normal-${wordIndex}`} className="word-highlight">
 {word}{' '}
 </span>
 ))}
 <span className="bg-gradient-text text-transparent bg-clip-text">
 {line.text.split(' ').slice(-line.gradientLastWords).map((word, wordIndex) => (
 <span key={`grad-${wordIndex}`} className="word-highlight">
 {word}{' '}
 </span>
 ))}
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
