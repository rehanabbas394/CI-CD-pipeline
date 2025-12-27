import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Socket, Server } from "socket.io";
import { ChatGatewayService } from "./chat.gateway";

@WebSocketGateway({
    cors: {
        origin: '*',
    }
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;     // WebSocket server instance

    private user : Record<string, Socket> = {};
    constructor(
        private readonly chatService: ChatGatewayService
    ){
        console.log('ChatGateway initialized!');
    }

    async handleConnection(client: Socket){
        const username = client.handshake.query.username as string;

        if(!username){
            client.disconnect();
            return;
        }

        this.user[username] = client;
        client.data.username = username;

        console.log("user: ", client.data)

        console.log(`User connected: ${username}`);
    }

    async handleDisconnect(client: Socket){
        const username = client.data.username;

        if(!username){
            return;
        }

        delete this.user[username];
        console.log(`User disconnected: ${username}`);
    }
}