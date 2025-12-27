import { Injectable } from "@nestjs/common";

interface ChatMessage {
  from: string;
  to: string;
  content: string;
}

@Injectable()
export class ChatGatewayService {
    private messages: ChatMessage[] = [];

    async saveMessage(payload: ChatMessage){
        this.messages.push(payload);
        return this.messages;
    }

    async getMessages(user:string){
        return this.messages.filter(msg => msg.from === user || msg.to === user)
    }
}
