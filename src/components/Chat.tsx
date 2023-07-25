import { useUser } from "@/contexts/UserContext";
import { NameInput } from "./NameInput";

export const Chat = () => {
  // Passo 1: Saber o nome do usuário.
  const userCtx = useUser();
  if(!userCtx) return null;// Se não tiver usuário.
  if(!userCtx.user) return <NameInput />

  // Passo 2: Histórico de mensagens.
  // Passo 3: Input de adicionar mensagens.
  return (
    <div className="border border-white/30 rounded-md">
      ...
    </div>
  );
}