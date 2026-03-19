import * as net from 'net';

export function checkPort(port: number, host: string, timeout = 1500): Promise<boolean> {
    return new Promise((resolve) => {
        const socket = new net.Socket();

        socket.setTimeout(timeout);

        socket.on('connect', () => {
            socket.destroy();
            resolve(true);
        });

        
        const onClose = () => {
            socket.destroy();
            resolve(false);
        };

        socket.on('timeout', onClose);
        socket.on('error', onClose);
        socket.on('close', onClose);

        socket.connect(port, host);
    });
}