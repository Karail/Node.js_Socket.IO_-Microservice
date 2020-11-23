const socket = io('http://localhost:3000')

socket.emit('msgToServer', {
    token: 'qwe',
})

socket.on('msgToClient', (data) => {
    console.log(data);
})