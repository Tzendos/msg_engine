import {Server} from "./server";


export class MsgServer {

    public server : Server;

    public start() {
        this.server = new Server();
    }
}