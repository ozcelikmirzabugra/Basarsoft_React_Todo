import React from 'react';

function Header({ count }) {
  return (
    <header className="header">
      <p>Counter: {count}</p>
    </header>
  );
}

export default Header;
