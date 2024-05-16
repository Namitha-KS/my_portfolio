import React, { useState } from 'react';
import './App.css';
import twitterLogo from './icons/twitter.png';
import linkedinLogo from './icons/linkedin.png';
import instagramLogo from './icons/instagram.png';
import emailLogo from './icons/email.png';
import githubLogo from './icons/github.png';
import spotifyLogo from './icons/spotify.png';
import telegramLogo from './icons/telegram.png';
import discordLogo from './icons/discord.png';

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
            <div className="cool-font">NA<span class="green-letter">M</span>ITHA S</div>
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

      <footer className="footer">
        <div className="social-icons">
          <img src={emailLogo} alt="Email" onClick={() => navigateToExternalLink('namigowri2006@gmail.com')} />
          <img src={githubLogo} alt="GitHub" onClick={() => navigateToExternalLink('https://github.com/Namitha-KS')} />
          <img src={twitterLogo} alt="Twitter" onClick={() => navigateToExternalLink('https://twitter.com/13_cs2')} />
          <img src={linkedinLogo} alt="LinkedIn" onClick={() => navigateToExternalLink('https://www.linkedin.com/in/nami-tha-s/')} />
          <img src={telegramLogo} alt="Telegram" onClick={() => navigateToExternalLink('namigowri2006@gmail.com')} />
          <img src={discordLogo} alt="Discord" onClick={() => navigateToExternalLink('namigowri2006@gmail.com')} />
          <img src={instagramLogo} alt="Instagram" onClick={() => navigateToExternalLink('https://www.instagram.com/namitha.ks/')} />
          <img src={spotifyLogo} alt="Spotify" onClick={() => navigateToExternalLink('namigowri2006@gmail.com')} />
        </div>
        <p>&copy; 2024 Namitha S</p>
      </footer>
    </div>
  );
}

export default App;
