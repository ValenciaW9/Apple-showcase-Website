import React from 'react';

const Header = () => {
  return (
    <header>
      {typeof document !== 'undefined' && document.createElement ? (
        <h1>Apple Products</h1>
      ) : null}
    </header>
  );
};

export default Header;