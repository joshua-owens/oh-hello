import React from 'react';
import './ChatInput.scss';

export default function ChatInput({ send }) {
    return (
        <div className='chat-input'>
            <input onKeyDown={send} placeholder="Type a message, hit enter to send..."></input>
        </div>
    );
}