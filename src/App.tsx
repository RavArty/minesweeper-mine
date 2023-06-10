import React, { FC } from 'react';

const App: FC = () => {
  return (
    <div className="App">
      <Header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </Header>
    </div>
  );
};

interface HeaderProps {
  logo?: string;
  children?: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ logo, children }) => {
  return (
    <header className="App-header">
      {Boolean(logo) && <img src={logo} className="App-logo" alt="logo" />}
      {children}
    </header>
  );
};

interface LinkProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export default App;
