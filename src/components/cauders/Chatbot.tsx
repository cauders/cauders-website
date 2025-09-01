
'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import { Loader2, ArrowUp, X, Send, RefreshCw, User } from 'lucide-react';
import { submitChatMessage } from '@/app/actions';
import { cn } from '@/lib/utils';
import type { ChatInput } from '@/ai/flows/chat-flow';
import Lottie from 'lottie-react';
import robotAnimation from '@/../public/lottie/robot-animation.json';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type Message = {
  role: 'user' | 'bot';
  content: string;
  options?: string[];
  state?: string;
};

const icebreakers = [
    "What services do you offer?",
    "Tell me about your projects.",
    "I need to contact support.",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPeeking, setIsPeeking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentState, setCurrentState] = useState('initial');
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
  
  const processMessage = async (messageText: string) => {
    if (isLoading) return;
    
    // Start with a clean slate if it's the first message
    const initialHistory = hasStartedChat ? messages : [];

    if (messageText.trim()) {
      const userMessage: Message = { role: 'user', content: messageText, state: currentState };
      setMessages((prev) => [...(hasStartedChat ? prev : []), userMessage]);
    }
    
    setInput('');
    setIsLoading(true);

    try {
        const chatInput: ChatInput = {
            history: initialHistory.map(m => ({ role: m.role, content: m.content, state: m.state })),
            message: messageText,
            currentState: messageText ? currentState : 'initial',
        }
      const response = await submitChatMessage(chatInput);
      const botMessage: Message = { role: 'bot', content: response.text, options: response.options, state: response.newState };
      setMessages((prev) => [...prev, botMessage]);
      setCurrentState(response.newState);
    } catch (error) {
      const errorMessage: Message = {
        role: 'bot',
        content: 'Sorry, something went wrong. Please try again later.',
        state: 'initial',
      };
      setMessages((prev) => [...prev, errorMessage]);
      setCurrentState('initial');
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    processMessage(input);
  };
  
  const handleOptionClick = (option: string) => {
    processMessage(option);
  };

  const handleIcebreakerClick = (question: string) => {
    if (!isOpen) setIsOpen(true);
    processMessage(question);
  };

  const clearChat = () => {
    setMessages([]);
    setCurrentState('initial');
  }
  
  const lastBotMessage = messages.filter(m => m.role === 'bot').pop();
  const showInput = !lastBotMessage?.options || lastBotMessage.options.length === 0;

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        {isPeeking && !isOpen && (
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
          aria-label="Toggle Caudbot"
        >
          {isOpen ? <X className="w-8 h-8 text-background transition-transform duration-300 group-hover:rotate-90" /> :  <div className="w-8 h-8 relative group-hover:[&>svg]:scale-110 group-hover:[&>svg]:-rotate-12">
            <svg
                className="absolute inset-0 w-full h-full text-background transition-transform duration-300 ease-out"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M21 11.5C21 16.7467 16.7467 21 11.5 21C11.1991 21 10.9014 20.9893 10.608 20.9684C7.8893 22.0427 4.5 22.4999 4.5 22.4999C4.5 22.4999 4.87329 20.245 5.5 18.2C3.20062 16.3333 2 14.0333 2 11.5C2 6.25329 6.25329 2 11.5 2S21 6.25329 21 11.5Z"
                stroke="hsl(var(--background))"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            <svg
                className="absolute inset-0 w-full h-full text-background transition-transform duration-300 ease-out"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="8" cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="16" cy="12" r="1.5" />
            </svg>
            </div>}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50">
            <Card className="w-[90vw] max-w-md h-[80vh] max-h-[600px] flex flex-col shadow-2xl rounded-2xl bg-background/70 backdrop-blur-lg border-0 animate-zoom-in">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div className="flex items-center gap-2">
                       {hasStartedChat && (
                         <div className="w-10 h-10 animate-fade-in-down">
                              <Lottie 
                                  animationData={robotAnimation} 
                                  loop={true}
                              />
                          </div>
                       )}
                        <CardTitle className="text-foreground">Caudbot</CardTitle>
                    </div>
                    <Button variant="ghost" size="icon" onClick={clearChat} aria-label="Clear chat">
                        <RefreshCw className="w-5 h-5 text-foreground/70 transition-transform duration-300 hover:rotate-180" />
                    </Button>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col overflow-hidden">
                <ScrollArea className="flex-grow pr-4 max-w-full" ref={scrollAreaRef}>
                    <div className="space-y-4 flex flex-col min-h-full">
                    {!hasStartedChat && (
                         <div className="flex flex-col items-center justify-center flex-grow gap-2 p-4 text-center animate-fade-in-up">
                            <div className="w-32 h-32 mb-4">
                                <Lottie animationData={robotAnimation} loop={true} />
                            </div>
                            <p className="text-lg font-semibold text-foreground">Welcome to Caudbot!</p>
                            <p className="text-sm text-foreground/70">Start by selecting an option below, or ask a question.</p>
                             <div className="flex flex-col items-start gap-2 pt-4 animate-fade-in-up">
                                 {icebreakers.map(q => (
                                     <Button
                                         key={q}
                                         variant="outline"
                                         size="sm"
                                         className="rounded-full bg-background/50 hover:bg-background/80 border-foreground/20 text-foreground/80"
                                         onClick={() => handleIcebreakerClick(q)}
                                         disabled={isLoading}
                                     >
                                         {q}
                                     </Button>
                                 ))}
                             </div>
                         </div>
                    )}
                    {messages.map((message, index) => (
                        <div
                        key={index}
                        className={cn(
                            'flex items-end gap-2 w-full animate-fade-in-up',
                             message.role === 'user'
                            ? 'flex-row-reverse'
                            : 'flex-row'
                        )}
                        style={{animationDelay: `${index * 50}ms`}}
                        >
                            <Avatar className="w-8 h-8">
                                <AvatarFallback className={cn(message.role === 'bot' ? 'bg-primary/20' : 'bg-foreground/10')}>
                                    {message.role === 'bot' ? (
                                        <div className="w-6 h-6">
                                            <Lottie animationData={robotAnimation} loop={true} />
                                        </div>
                                    ) : (
                                        <User className="w-4 h-4 text-foreground/80" />
                                    )}
                                </AvatarFallback>
                            </Avatar>
                            <div className={cn('max-w-[80%] px-3 py-2 text-sm',
                                message.role === 'user'
                                ? 'bg-primary text-primary-foreground chat-bubble-user'
                                : 'bg-muted text-muted-foreground chat-bubble-bot'
                            )}>
                                {message.content}
                            </div>
                        </div>
                    ))}
                    {lastBotMessage?.options && (
                        <div className="flex flex-wrap gap-2 pt-2 animate-fade-in-up" style={{animationDelay: `${messages.length * 50}ms`}}>
                            {lastBotMessage.options.map(option => (
                                <Button
                                    key={option}
                                    variant="outline"
                                    size="sm"
                                    className="rounded-full bg-background/50 hover:bg-background/80 border-foreground/20 text-foreground/80"
                                    onClick={() => handleOptionClick(option)}
                                    disabled={isLoading}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    )}
                     {isLoading && (
                        <div className="flex items-center space-x-2 self-start animate-fade-in-up">
                          <div className="w-8 h-8">
                            <Lottie animationData={robotAnimation} loop={true} />
                          </div>
                          <span className="text-sm text-foreground">Thinking...</span>
                        </div>
                      )}
                    </div>
                </ScrollArea>
                </CardContent>
                <CardFooter className="pt-4">
                  {(showInput || hasStartedChat) && (
                    <form 
                      onSubmit={handleSubmit} 
                      className="chat-input-container w-full"
                    >
                      <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        disabled={isLoading}
                        className="flex-grow bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-3 text-foreground placeholder:text-muted-foreground border-0"
                      />
                      <Button 
                        type="submit" 
                        variant="ghost" 
                        size="icon" 
                        className="h-9 w-9 text-primary disabled:opacity-50" 
                        disabled={isLoading || !input.trim()}
                        aria-label="Send message"
                      >
                        <Send className="h-5 w-5 stroke-[2.5]" />
                        <span className="sr-only">Send</span>
                      </Button>
                    </form>
                  )}
                </CardFooter>
            </Card>
        </div>
      )}
    </>
  );
}
