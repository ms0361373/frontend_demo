import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div style={{ height: 40, width: '100%', padding: 5 }}>
      <Link to={'/'}>
        <div>回首頁</div>
      </Link>
    </div>
  );
}
