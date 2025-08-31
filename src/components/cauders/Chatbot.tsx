
'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import ChatIcon from './ChatIcon';
import { Loader2, ArrowUp, X } from 'lucide-react';
import { submitChatMessage } from '@/app/actions';
import { cn } from '@/lib/utils';
import type { ChatInput } from '@/ai/flows/chat-flow';
import Lottie from 'lottie-react';
import robotAnimation from '@/../public/lottie/robot-animation.json';

type Message = {
  role: 'user' | 'model';
  content: { text: string }[];
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPeeking, setIsPeeking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const hasStartedChat = messages.length > 0;

  useEffect(() => {
    if (isOpen && scrollAreaRef.current) {
        setTimeout(() => {
            const viewport = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
            if (viewport) {
                viewport.scrollTop = viewport.scrollHeight;
            }
        }, 100);
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsPeeking(false);
      return;
    }

    const peekTimer = setInterval(() => {
      setIsPeeking(true);
      setTimeout(() => setIsPeeking(false), 3000); // Peek duration
    }, 10000); // Time between peeks

    return () => clearInterval(peekTimer);
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: [{ text: input }] };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const chatInput: ChatInput = {
            history: messages,
            message: input,
        }
      const response = await submitChatMessage(chatInput);
      const modelMessage: Message = { role: 'model', content: [{ text: response }] };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'model',
        content: [{ text: 'Sorry, something went wrong. Please try again.' }],
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        {isPeeking && (
          <div className="absolute bottom-0 left-1/2 w-32 h-24 pointer-events-none z-0">
             <div className="animate-peek">
                <Lottie 
                    animationData={robotAnimation} 
                    loop={true} 
                    className="w-full h-full"
                />
             </div>
          </div>
        )}
        <Button
          size="icon"
          className="rounded-full w-16 h-16 shadow-lg group animate-chat-icon-float relative z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle chat"
        >
          {isOpen ? <X className="w-8 h-8 text-background transition-transform duration-300 group-hover:rotate-90" /> : <ChatIcon />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50">
            <Card className="w-[90vw] max-w-md h-[80vh] max-h-[700px] flex flex-col shadow-2xl backdrop-blur-xl border border-primary/20 rounded-2xl animate-zoom-in text-background">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Lottie 
                            animationData={robotAnimation} 
                            loop={true} 
                            className={cn(
                                "transition-all duration-500",
                                hasStartedChat ? "w-10 h-10" : "w-0 h-10"
                            )}
                        />
                        <CardTitle>CaudBot</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                <ScrollArea className="flex-grow pr-4" ref={scrollAreaRef}>
                    <div className="space-y-4 flex flex-col min-h-full">
                     {!hasStartedChat && (
                        <div className="flex flex-col items-center justify-center flex-grow text-center">
                            <div className="w-48 h-48">
                                <Lottie animationData={robotAnimation} loop={true} />
                            </div>
                            <p className="text-background/80 mt-2">Hello! How can I help you today?</p>
                        </div>
                     )}
                    {messages.map((message, index) => (
                        <div
                        key={index}
                        className={cn(
                            'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm',
                             message.role === 'user'
                            ? 'ml-auto bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        )}
                        >
                        {message.content[0].text}
                        </div>
                    ))}
                     {isLoading && (
                        <div className="flex items-center space-x-2">
                          <Loader2 className="h-4 w-4 animate-spin text-primary" />
                          <span className="text-sm">Thinking...</span>
                        </div>
                      )}
                    </div>
                </ScrollArea>
                </CardContent>
                <CardFooter>
                <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                    <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about our services..."
                    disabled={isLoading}
                    className="bg-foreground/50 border-background/20 placeholder:text-background/60"
                    />
                    <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                        <ArrowUp className="h-4 w-4" />
                        <span className="sr-only">Send</span>
                    </Button>
                </form>
                </CardFooter>
            </Card>
        </div>
      )}
    </>
  );
}
