// src/components/MessageFetcher.jsx
import React from 'react';

function MessageFetcher({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Get Message</button>
    </div>
  );
}

export default MessageFetcher;