$(document).ready(function () {
    var socket = io('http://localhost:8080');

    socket.on('connect', function () {
        console.log('Connected');
    });

    socket.on('message', function (data) {

        var data = JSON.parse(data);
        var currentdate = new Date();

        $('.chat-messages').append(
            '<div class="message">' +
            '<div class="message-header">' +
            '<div class="nickname">' + data.nickname + '</div>' +
            '<div class="send-time">'
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds() + '</div>' +
            '</div>' +
            '<div class="content">' + data.content + '</div>' +
            '</div>'
        );
    });

    socket.on('disconnect', function () {
        console.log('Disconnected');
    });

    $("#sender").click(function () {
        var writer = $("#writer");
        var message = writer.val();
        writer.val("");
        socket.emit('message', message);
    });
});