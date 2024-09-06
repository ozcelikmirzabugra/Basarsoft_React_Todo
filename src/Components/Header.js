import React from 'react';

const Header = ({ count }) => {
  return (
    <header>
      <h1>Mirz ToDo</h1>
      <p>Tasks Count: {count}</p>
    </header>
  );
};

export default Header;
