// Test Socket.IO connection from Node.js
const io = require('socket.io-client');

const socket = io('http://localhost:3000', {
    query: { username: 'rehan' }
});

socket.on('connect', () => {
    console.log('✅ Connected to server!');
    console.log('Socket ID:', socket.id);
});

socket.on('disconnect', () => {
    console.log('❌ Disconnected from server');
});

socket.on('connect_error', (error) => {
    console.error('❌ Connection error:', error.message);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nClosing connection...');
    socket.disconnect();
    process.exit();
});

console.log('Attempting to connect to ws://localhost:3000...');
console.log('Press Ctrl+C to disconnect');
