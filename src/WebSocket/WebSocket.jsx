import React, { useState, useEffect } from 'react';

function WebSocketDemo() {
  const [ws, setWs] = useState(null);
  const [text, setText] = useState('');
  const [connected, setConnected] = useState(false);

  useEffect(
    () => () => {
      if (ws) {
        ws.close();
      }
    },
    [ws],
  );

  const handleOpen = () => {
    const webSocket = new WebSocket('ws://localhost:8080/echo');
    setWs(webSocket);
    webSocket.onopen = function (evt) {
      console.log('Socket opened');
      setConnected(true);
    };
    webSocket.onclose = function (evt) {
      console.log('Socket closed');
      setConnected(false);
    };
    webSocket.onerror = function (evt) {
      console.log('Socket error');
      setConnected(false);
    };
  };

  const handleSend = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(text);
    }
  };

  return (
    <div className="App">
      <input onChange={(e) => setText(e.target.value)} value={text} />
      <button onClick={handleOpen} disabled={connected}>
        {connected ? 'Connected' : 'Open'}
      </button>
      <button onClick={handleSend} disabled={!connected}>
        Send
      </button>
    </div>
  );
}

export default WebSocketDemo;
