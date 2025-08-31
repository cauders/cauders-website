
'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import ChatIcon from './ChatIcon';
import { Loader2, Send, X } from 'lucide-react';
import { submitChatMessage } from '@/app/actions';
import { cn } from '@/lib/utils';
import type { ChatInput } from '@/ai/flows/chat-flow';

type Message = {
  role: 'user' | 'model';
  content: { text: string }[];
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

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
        <Button
          size="icon"
          className="rounded-full w-16 h-16 shadow-lg group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle chat"
        >
          {isOpen ? <X className="w-8 h-8 text-background transition-transform duration-300 group-hover:rotate-90" /> : <ChatIcon />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50">
            <Card className="w-full max-w-sm shadow-2xl animate-fade-in-up glass-effect border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-foreground">Cauders Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                <ScrollArea className="h-80 pr-4" ref={scrollAreaRef}>
                    <div className="space-y-4">
                    {messages.map((message, index) => (
                        <div
                        key={index}
                        className={cn(
                            'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm',
                             message.role === 'user'
                            ? 'ml-auto bg-primary text-primary-foreground'
                            : 'bg-muted'
                        )}
                        >
                        {message.content[0].text}
                        </div>
                    ))}
                     {isLoading && (
                        <div className="flex items-center space-x-2">
                          <Loader2 className="h-4 w-4 animate-spin text-primary" />
                          <span className="text-muted-foreground text-sm">Thinking...</span>
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
                    />
                    <Button type="submit" size="icon" disabled={isLoading}>
                        <Send className="h-4 w-4" />
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
