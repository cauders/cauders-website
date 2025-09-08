
'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import { Loader2, ArrowUp, X, Send, RefreshCw, User } from 'lucide-react';
import { cn } from '@/lib/utils';
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
    "How can I contact you?",
];

const mockResponses: { [key: string]: { text: string; options?: string[], newState?: string } } = {
    'initial': {
        text: "Hello! I'm the virtual assistant for Cauders. How can I help you today?",
        options: ["Our Services", "Our Portfolio", "Contact Us"],
        newState: 'main_menu',
    },
    'services': {
        text: "Cauders offers a range of services including Web Development, Mobile App Development, AI Integrations, and UI/UX Design. Which area interests you the most?",
        options: ["Web Development", "Mobile Apps", "AI Integrations", "UI/UX Design", "Go back"],
        newState: 'services_menu',
    },
    'portfolio': {
        text: "You can view Cauders' recent work on the portfolio page. It showcases projects in web, mobile, and AI. Would you like me to take you there?",
        options: ["Yes, take me to the portfolio", "No, thanks"],
        newState: 'portfolio_link',
    },
    'contact': {
        text: "You can reach Cauders via the contact page for project inquiries, or email directly at info@cauders.com for other questions. What would you like to do?",
        options: ["Go to Contact Page", "Ask another question"],
        newState: 'contact_link',
    },
    'web_development': {
        text: "Cauders builds high-performance, secure, and scalable web applications using cutting-edge technologies. From custom portals to enterprise-grade solutions, we create seamless digital experiences that drive engagement and conversion.",
        options: ["Tell me about Mobile Apps", "What about AI?", "Go back"],
        newState: 'services_menu',
    },
    'mobile_apps': {
        text: "Cauders' mobile apps are designed for iOS and Android with a focus on speed, usability, and flawless performance. Whether it’s a startup MVP or a fully-featured enterprise application, we ensure smooth navigation and optimized functionality for end users.",
        options: ["Tell me about Web Development", "What about AI?", "Go back"],
        newState: 'services_menu',
    },
    'ai_integrations': {
        text: "Cauders' AI-powered solutions bring automation, personalization, and predictive analytics to your digital products. From chatbots and machine learning models to business intelligence systems, we turn data into intelligent business outcomes.",
        options: ["Tell me about Web Development", "What about Mobile Apps?", "Go back"],
        newState: 'services_menu',
    },
    'ui/ux_design': {
        text: "User experience defines product success. The UI/UX design team at Cauders creates intuitive, engaging, and visually stunning interfaces that elevate user satisfaction while driving conversions and brand loyalty.",
        options: ["Tell me about Web Development", "What about Mobile Apps?", "Go back"],
        newState: 'services_menu',
    },
    'go_back': {
        text: "Is there anything else I can help you with?",
        options: ["Our Services", "Our Portfolio", "Contact Us"],
        newState: 'main_menu',
    },
    'yes,_take_me_to_the_portfolio': {
        text: "Excellent! I'll redirect you to our portfolio page now. You'll see a range of our projects there.",
        newState: 'redirect_portfolio'
    },
    'go_to_contact_page': {
        text: "Perfect. Taking you to the contact page where you can send us a message directly.",
        newState: 'redirect_contact'
    },
    'no,_thanks': {
        text: "No problem! Is there anything else I can help you with?",
        options: ["Our Services", "Our Portfolio", "Contact Us"],
        newState: 'main_menu',
    },
    'ask_another_question': {
        text: "Of course. What would you like to know?",
        options: ["Our Services", "Our Portfolio", "Contact Us"],
        newState: 'main_menu',
    },
    'default': {
        text: "I'm not sure how to answer that. Would you like to be directed to our contact page to speak with a human?",
        options: ["Yes, take me to the contact page", "No, thanks"],
        newState: 'main_menu',
    }
};


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
    if (messageText.trim()) {
      const userMessage: Message = { role: 'user', content: messageText, state: currentState };
      setMessages((prev) => [...(hasStartedChat ? prev : []), userMessage]);
    }
    
    setInput('');
    setIsLoading(true);

    // Simulate backend call
    setTimeout(() => {
        let responseKey = messageText.toLowerCase().replace(/\s/g, '_').replace(/[?/]/g, '');
        
        if(responseKey.includes('service')) responseKey = 'services';
        if(responseKey.includes('portfolio') || responseKey.includes('project')) responseKey = 'portfolio';
        if(responseKey.includes('contact')) responseKey = 'contact';
        if(responseKey.includes('back')) responseKey = 'go_back';


        const response = mockResponses[responseKey as keyof typeof mockResponses] || mockResponses['default'];

        if(response.newState === 'redirect_portfolio'){
             window.location.href = 'https://www.portfolio.cauders.com/';
             setIsLoading(false);
             return;
        }
        if(response.newState === 'redirect_contact' || responseKey === 'yes,_take_me_to_the_contact_page'){
             window.location.href = '/contact';
             setIsLoading(false);
             return;
        }

        const botMessage: Message = { role: 'bot', content: response.text, options: response.options, state: response.newState };
        setMessages((prev) => [...prev, botMessage]);
        if (response.newState) {
            setCurrentState(response.newState);
        }
        setIsLoading(false);
    }, 1000);
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
          aria-label="Toggle Cauders Chatbot"
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
                <CardHeader className="flex flex-row items-center justify-between border-b p-4">
                    <div className="flex items-center gap-2">
                       {hasStartedChat && (
                         <div className="w-10 h-10 animate-fade-in-down">
                              <Lottie 
                                  animationData={robotAnimation} 
                                  loop={true}
                              />
                          </div>
                       )}
                       <div>
                         <CardTitle className="text-foreground">Cauders</CardTitle>
                         <div className="flex items-center gap-1.5 mt-1">
                           <span className="relative flex h-2 w-2">
                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                           </span>
                           <p className="text-xs text-green-500 font-medium">Online</p>
                         </div>
                       </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={clearChat} aria-label="Clear chat">
                        <RefreshCw className="w-5 h-5 text-foreground/70 transition-transform duration-300 hover:rotate-180" />
                    </Button>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col overflow-hidden p-0">
                <ScrollArea className="flex-grow pr-4 max-w-full" ref={scrollAreaRef}>
                    <div className="space-y-4 flex flex-col min-h-full p-4">
                    {!hasStartedChat && (
                         <div className="flex flex-col items-center justify-center flex-grow gap-2 p-4 text-center animate-fade-in-up">
                            <div className="w-32 h-32 mb-4">
                                <Lottie animationData={robotAnimation} loop={true} />
                            </div>
                            <p className="text-lg font-semibold text-foreground">Welcome to Cauders!</p>
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
                                <AvatarFallback className={cn(message.role === 'bot' ? 'bg-black' : 'bg-foreground/10')}>
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
                <CardFooter className="p-4 border-t">
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
