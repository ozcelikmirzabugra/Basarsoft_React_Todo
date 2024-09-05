import React from 'react';

const Header = ({ count }) => {
  return (
    <header>
      <h1>ToDo List</h1>
      <p>Tasks Count: {count}</p>
    </header>
  );
};

export default Header;
