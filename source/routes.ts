
export class Routes {

    public socketIo: any;

    public init(socketIo: any) {
        this.socketIo = socketIo;

        this.connection();
    }

    public connection() {
        this.socketIo.on('connection', function (socket) {
            socket.emit('message', 'New user. Welcome to chat!');
            
            socket.on('message', function (data) {
                console.log('Receive data: ' + data);
            });

            socket.on('disconnect', function () {
                socket.emit('Goodbye!');
            });
        });
    }
    
    public broadcast() {

    }
}