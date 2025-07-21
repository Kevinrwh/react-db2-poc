import React, { useState } from 'react';
import MessageFetcher from '../components/MessageFetcher';

function Home() {
  const [message, setMessage] = useState('');

  const handleGetMessage = () => {
    // will fill this in FE-02-ST2
  };

  return (
    <div>
      <h1>Welcome to the React + Db2 POC</h1>
      <p>This is the Home page.</p>
      <MessageFetcher onClick={handleGetMessage} />
      {message && <p>{message}</p>}
    </div>
  );
}

export default Home;