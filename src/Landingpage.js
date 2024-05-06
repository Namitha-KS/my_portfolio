// src/components/LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: 'black', display: 'flex', height: '100vh' }}>
      {/* Left section */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: 'white' }}>
          {/* Your picture here */}
        </div>
        <div style={{ color: 'white', marginTop: '20px' }}>
          Your Name
        </div>
      </div>
      {/* Right section */}
      <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ backgroundColor: 'white', margin: '10px', height: '100px', textAlign: 'center' }}>
          HELLO
        </div>
        <div style={{ backgroundColor: 'white', margin: '10px', height: '100px', textAlign: 'center' }}>
          WORK
        </div>
        <div style={{ backgroundColor: 'white', margin: '10px', height: '100px', textAlign: 'center' }}>
          PASSION
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
