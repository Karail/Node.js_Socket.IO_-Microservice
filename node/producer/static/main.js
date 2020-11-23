const socket = io.connect('http://localhost:3000/', {query: `token=${'qweasdzxc'}`});

socket.on('channel-started', (data) => {
    console.log('started channel', data);
})
socket.on('channel-stopped', (data) => {
    console.log('stopped channel', data);
})

socket.on('channel-remove', (data) => {
    console.log('remove channel', data);
})
socket.on('channel-edit', (data) => {
    console.log('edit channel', data);
})

socket.on('channel-shared', (data) => {
    console.log('shared channel', data);
})


socket.on('time-add', (data) => {
    console.log('add time', data);
})
socket.on('time-edit', (data) => {
    console.log('edit time', data);
})
socket.on('time-remove', (data) => {
    console.log('remove time', data);
})


socket.on('market-add', (data) => {
    console.log('edit market', data);
})
socket.on('market-edit', (data) => {
    console.log('edit market', data);
})
socket.on('market-remove', (data) => {
    console.log('remove market', data);
})