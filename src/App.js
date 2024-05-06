import React from 'react';
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <div className="left-section">
          {/* Profile picture and name section */}
          <div className="profile-picture">
            {/* Add your image here (replace with actual image path) */}
            <img src="images/me.png" alt="PP" />
          </div>
          <div className="name-image">
            {/* Add your image here (replace with actual image path) */}
            <img src="images/Namitha S.png" alt="name" />  
          </div>
        </div>
        <div className="right-section">
          <button onClick={() => navigateToAbout()}>HELLO</button>
          <button>WORK</button>
          <button>PASSION</button>
        </div>
      </div>
    </div>
  );
}

// Function to simulate navigation (replace with actual routing library later)
function navigateToAbout() {
  console.log('Navigating to About page');
}

export default App;
