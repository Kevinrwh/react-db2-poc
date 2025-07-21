// src/components/MessageFetcher.jsx
import React, { useState } from 'react';
import { fetchMessage } from '../services/messageService';

const MessageFetcher = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const result = await fetchMessage();
    setMessage(result);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Get Message</button>
      <div>
        {loading ? 'Loading...' : message}
      </div>
    </div>
  );
};

export default MessageFetcher;