import {Fragment, useEffect, useState} from 'react'
import io from 'socket.io-client';
import './App.css'

function App() {

    const [messageInput, setMessageInput] = useState('');
    const [receivedMessages, setReceivedMessages] = useState<any[]>([]);
    const [socket, setSocket] = useState<any>(null);

    const sendMessage = () => {
        if (socket && messageInput.trim() !== '') {
            socket.emit('chatMessage', messageInput);
            setMessageInput('');
        }
    };

    useEffect(() => {
        const newSocket = io('https://7f12-2c0f-2a80-2b-ff00-dd47-78e7-d716-fb2c.ngrok-free.app/');
        setSocket(newSocket);

        newSocket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        newSocket.on('chatMessage', (message) => {
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

export default App
