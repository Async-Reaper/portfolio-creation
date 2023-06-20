import { io } from 'socket.io-client';

export const createSocketClient = (socketUrl: string) =>
    io(socketUrl, {
        withCredentials: true,
        transports: ['websocket', 'polling'],
        extraHeaders: {},
        reconnectionDelay: 5000,
    });
