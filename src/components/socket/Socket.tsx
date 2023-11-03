import {Fragment, useEffect, useState} from 'react'
import io from 'socket.io-client';
import './App.css'

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
        const newSocket = io('https://worker-dev-v2.mystash.ng/');
        // const newSocket = io('https://3bf1-148-252-132-173.ngrok-free.app/');
        setSocket(newSocket);
        newSocket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });
        newSocket.on('setCompleted', (message) => {
            console.log('Received message from server:', message);
            setReceivedMessages((prevMessages: any[]) => [...prevMessages, message]);
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
