import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';
import './App.css';

import {useSocket} from './hooks';

export default function App() {
	const [history, setHistory] = useState([]);
	const socket = useSocket();

	useEffect(() => {
		socket.connect(msg => {
			console.log('New message');
			setHistory(prev => [...prev, msg]);
		});
	}, [socket]);

	return (
		<div className="app">
			<Header />
			<ChatHistory history={history} />
			<ChatInput send={socket.send} />
		</div>
	);
}
