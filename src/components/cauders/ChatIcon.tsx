import { MessageSquare } from 'lucide-react';

export default function ChatIcon() {
  return (
    <div className="relative">
      <MessageSquare className="w-8 h-8 text-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center">
        <div className="w-1 h-1 bg-background rounded-full animate-ping" />
      </div>
    </div>
  );
}
