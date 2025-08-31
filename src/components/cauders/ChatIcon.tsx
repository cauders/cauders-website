
export default function ChatIcon() {
    return (
      <div className="w-8 h-8 relative group-hover:[&>svg]:scale-110 group-hover:[&>svg]:-rotate-12">
        <svg
          className="absolute inset-0 w-full h-full text-background transition-transform duration-300 ease-out animate-chat-icon-bubble"
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
          className="absolute inset-0 w-full h-full text-background transition-transform duration-300 ease-out animate-chat-icon-dots"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="16" cy="12" r="1.5" />
        </svg>
      </div>
    );
  }
