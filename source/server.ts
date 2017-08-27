import * as express from "express";
import * as http from "http"
import * as socketIo from "socket.io";
import {Routes} from "./routes";

export class Server {

    public port: number = 8080;
    public app: any;
    private server: any;
    private io: any;
    private routes: Routes;

    constructor() {
        this.createApp();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = http.createServer(this.app);
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);

            this.routes = new Routes();
            this.routes.init(this.io);
        });
    }
}