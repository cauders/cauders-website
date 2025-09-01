
"use server";

import { chat, type ChatInput } from "@/ai/flows/chat-flow";

export async function submitChatMessage(input: ChatInput) {
    return await chat(input);
}
