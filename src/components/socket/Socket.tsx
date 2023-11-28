import {Fragment, useEffect, useState} from 'react'
import io from 'socket.io-client';

function Socket() {

    const [messageInput, setMessageInput] = useState('');
    const [receivedMessages, setReceivedMessages] = useState<any[]>([]);
    const [socket, setSocket] = useState<any>(null);

    const sendMessage = () => {
        if (socket && messageInput.trim() !== '') {
            socket.emit('pingSocket', messageInput);
            setMessageInput('');
        }
    };

    useEffect(() => {
        const newSocket = io('https://worker.gpd.girostack.com/');
        setSocket(newSocket);
        newSocket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });
        newSocket.on('transaction', (message) => {
            console.log('Received transaction update from server :', message);
        });
        newSocket.on('pingSocket', (message) => {
            console.log('Received ping from socket :', message);
        });
        return () => {
            newSocket.disconnect();
        };
    }, []);

    return (
        <Fragment>
            <div>
                <h1>WebSocket Example</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your message"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
                <div>
                    <h2>Received Messages:</h2>
                    <ul>
                        {receivedMessages.map((message, index) => (
                            <li key={index}>{message}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Socket
