import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RWD from '../RWD/RWD';
import WebSocketDemo from '../WebSocket/WebSocket';
import Content from '../Contents/Contents';
import Index from '../Layout/Index';

export default function PageRouter() {
  return (
    <Routes>
      <Route path="/" element={Index(<Content />)}/>
      <Route path="/rwd" element={Index(<RWD />)}/>
      <Route path="/webSocket" element={Index(<WebSocketDemo />)}/>
  </Routes>
  );
}
