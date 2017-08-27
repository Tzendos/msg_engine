export class Routes {

    public socketIo: any;

    public init(socketIo: any) {
        this.socketIo = socketIo;

        this.connection();
    }

    public connection() {
        this.socketIo.on('connection', function (socket) {
            socket.emit('message',
                JSON.stringify(
                    {
                        'nickname': 'System',
                        'content': 'New user. Welcome to chat!'
                    }
                ));

            socket.on('message', function (data) {
                console.log(data);

                var content = JSON.stringify(
                    {
                        'nickname': 'Vladimir',
                        'content': data
                    });

                socket.broadcast.emit('message',
                    content
                );
                socket.emit('message', content);
            });

            socket.on('disconnect', function () {
                socket.emit('Goodbye!');
            });
        });
    }

    public broadcast() {

    }
}