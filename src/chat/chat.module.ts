import { Module } from "@nestjs/common";
import { ChatGatewayService } from "./chat.gateway";
import { ChatGateway } from "./gateway";

@Module({
    imports: [],
    providers: [ChatGatewayService, ChatGateway],
})

export class ChatModule {}