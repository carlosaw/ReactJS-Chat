import { chatReducer } from "@/reducers/chatReducer";
import { Message } from "@/types/Mensage";
import { ReactNode, createContext, useContext, useReducer, useState } from "react";

type ChatContext = {
  chat: Message[];
  addMessage: (user: string, text: string) => void;
}
// CONTEXTO
export const ChatContext = createContext<ChatContext | null>(null);

// PROVIDER
export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chat, dispatch] = useReducer(chatReducer, []);

  const addMessage = (user: string, text: string) => {
    dispatch({
      type: 'add',
      payload: { user, text }
    });
  }

  return (
    <ChatContext.Provider value={{ chat, addMessage }}>{children}</ChatContext.Provider>
  );
}