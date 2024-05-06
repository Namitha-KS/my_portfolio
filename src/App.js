import React, { useState } from 'react';
import './App.css';
import logo from './icons/logo.png'; 

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const navigateToExternalLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </nav>
      </header>

      <div className="button-container">
        <button onClick={togglePopup}>HELLO</button>
        <button onClick={() => navigateToExternalLink('https://github.com/Namitha-KS')}>
          WORK
        </button>
        <button onClick={() => navigateToExternalLink('https://minnie-mouse.stck.me/')}>
          PASSION
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <p className="popup-text">
              <span>&lt;p&gt;</span>By day, you'll find me geeking out over the latest advancements in tech, tinkering with LLMs and RAGs. I try to make efforts to understand Web3.0, Flutter and Docker.<span>&lt;/p&gt;</span>
            </p>
            <p className="popup-text">
              <span>&lt;p&gt;</span>When I'm not pushing the boundaries of technology, you can catch me curled up with a deliciously cheesy rom-com novel.<span>&lt;/p&gt;</span>
            </p>
            <p className="popup-text">
              <span>&lt;p&gt;</span>Speaking of music, I can dance too. And when I'm out, I try to make really good friends around me.<span>&lt;/p&gt;</span>
            </p>
            <p className="popup-text">
              <span>&lt;p&gt;</span>Pouring my heart out in words is like a guilty pleasure, helps me explore the complex world of human psychology.<span>&lt;/p&gt;</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
