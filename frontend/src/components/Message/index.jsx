import React, { useState } from 'react';
import './Message.scss';

export default function Message({ data }) {
    const [message, setMessage] = useState(JSON.parse(data))

    return (
        <div className='message'>
            {message.body}
        </div>
    );
}