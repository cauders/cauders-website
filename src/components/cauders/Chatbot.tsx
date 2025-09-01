
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, Send, User, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type Message = {
  id: string;
  role: 'user' | 'bot';
  text: string;
  options?: { label: string; value: string }[];
};

const initialBotMessage: Message = {
    id: 'intro',
    role: 'bot',
    text: "Hello! I'm the Cauders virtual assistant. How can I help you today?",
    options: [
        { label: 'Our Services', value: 'services' },
        { label: 'Our Portfolio', value: 'portfolio' },
        { label: 'Contact Us', value: 'contact' },
    ],
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);


  const handleOptionClick = (value: string, label: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: label,
    };
    setMessages(prev => [...prev, userMessage]);
    
    setIsTyping(true);
    setTimeout(() => {
        const botResponse: Message = {
            id: `bot-${Date.now()}`,
            role: 'bot',
            text: `This is a demo. To learn more about "${label}", please visit the corresponding page.`
        };
        setIsTyping(false);
        setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: 'user',
        text: inputValue,
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setIsTyping(true);
    setTimeout(() => {
        const botResponse: Message = {
            id: `bot-${Date.now()}`,
            role: 'bot',
            text: "This is a demo response. Full chat functionality is not enabled."
        };
        setIsTyping(false);
        setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Bubble FAB */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          size="icon"
          className="rounded-full w-16 h-16 shadow-lg shadow-primary/30 animate-chat-icon-float"
          onClick={() => setIsOpen(true)}
        >
          <Bot className="w-8 h-8" />
        </Button>
      </div>

      {/* Chat Panel */}
      <div
        className={cn(
          'fixed bottom-28 right-8 z-50 w-[calc(100%-4rem)] max-w-sm h-[60vh] bg-card border shadow-xl rounded-2xl flex flex-col transition-all duration-500 ease-out',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Bot className="w-6 h-6" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold text-foreground">Cauders Assistant</h3>
              <p className="text-xs text-foreground/70">Online</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-grow p-4 overflow-y-auto hide-scrollbar">
            <div className="space-y-4">
                {messages.map((message) => (
                    <div key={message.id} className={cn(
                        "flex items-end gap-2",
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}>
                        {message.role === 'bot' && <Avatar className="h-8 w-8"><AvatarFallback className="bg-primary/20"><Bot className="w-5 h-5 text-primary" /></AvatarFallback></Avatar>}
                        <div className={cn(
                            "max-w-[80%] p-3 rounded-2xl text-sm",
                            message.role === 'user' ? 'bg-primary text-primary-foreground chat-bubble-user' : 'bg-secondary text-secondary-foreground chat-bubble-bot'
                        )}>
                            <p>{message.text}</p>
                            {message.options && (
                                <div className="mt-3 flex flex-col gap-2">
                                    {message.options.map(option => (
                                        <Button
                                            key={option.value}
                                            variant="outline"
                                            size="sm"
                                            className="bg-card/50"
                                            onClick={() => handleOptionClick(option.value, option.label)}
                                        >
                                            {option.label}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                         {message.role === 'user' && <Avatar className="h-8 w-8"><AvatarFallback><User className="w-5 h-5" /></AvatarFallback></Avatar>}
                    </div>
                ))}
                 {isTyping && (
                    <div className="flex items-end gap-2 justify-start">
                        <Avatar className="h-8 w-8"><AvatarFallback className="bg-primary/20"><Bot className="w-5 h-5 text-primary" /></AvatarFallback></Avatar>
                        <div className="bg-secondary text-secondary-foreground p-3 rounded-2xl chat-bubble-bot">
                            <div className="flex items-center gap-1">
                                <span className="h-2 w-2 rounded-full bg-foreground/50 animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 rounded-full bg-foreground/50 animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 rounded-full bg-foreground/50 animate-bounce"></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow"
              autoComplete="off"
            />
            <Button type="submit" size="icon" className="rounded-full flex-shrink-0">
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
