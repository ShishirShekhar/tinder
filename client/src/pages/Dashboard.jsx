// Dashboard.jsx contains all the components for '/dashboard' route.
// DashBoard.jsx contains default export of DashBoard component.

/* DashBoard component:
  DashBoard component is used to create the dashboard of the app.

  DashBoard contains one state and two function.
  State(lastDirection/setLastDirection): We have this state to update the swipe direction.
  Function:
    1. swiped: 
      This function is used to update the swipe direction.
    2. outOfFrame:
      This function is used to console log if card left's the screen.

  DashBoard component returns ChatContainer component and Tinder swipe card.
*/

// Import required modules
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
// Import required component
import ChatContainer from "../components/ChatContainer";

// Create a temporary database for name and image
const db = [
  {
    name: "Richard Hendricks",
    url: "https://html.com/wp-content/uploads/flamingo.webp",
  },
  {
    name: "Erlich Bachman",
    url: "https://html.com/wp-content/uploads/flamingo.webp",
  },
  {
    name: "Monica Hall",
    url: "https://html.com/wp-content/uploads/flamingo.webp",
  },
  {
    name: "Jared Dunn",
    url: "https://html.com/wp-content/uploads/flamingo.webp",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://html.com/wp-content/uploads/flamingo.webp",
  },
];

// Create Dashboard function
const Dashboard = () => {
  // Create characters.
  const characters = db;
  // Create state for swipe direction.
  const [lastDirection, setLastDirection] = useState();

  // Create a function to set direction on swipe.
  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction);
  };

  // Create a function to handle if card goes out of screen. 
  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    // Create division for dashboard
    <div className="dashboard">
      {/* Add ChatContainer */}
      <ChatContainer />

      {/* Add swipe carrd */}
      <div className="swipe-container">
        <div className="card-container">
          {/* Loop through all the characters. */}
          {characters.map((character) => (
            // Add TinderCard component.
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              {/* Add background Image to the card */}
              <div className="card"
                  style={{ backgroundImage: "url(" + character.url + ")" }}
              >
                {/* Add name to the card. */}
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
          {/* Show swipe direction on the screen */}
          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
          </div>
          
        </div>
      </div>
    </div>
  );
};

// Export Dashboard
export default Dashboard;
