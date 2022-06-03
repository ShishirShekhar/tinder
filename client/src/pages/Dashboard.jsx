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
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useCookies } from 'react-cookie';
import axios from 'axios';
// Import required component
import ChatContainer from "../components/ChatContainer";

// Create Dashboard function
const Dashboard = () => {
  // Create state for swipe direction.
  const [lastDirection, setLastDirection] = useState();
  // Create state for user.
  const [user, setUser] = useState(null);
  // Create cookie
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  // Get userId.
  const userId = cookies.UserId;

  // Get user.
  const getUser = async () => {
    try {
      // Get user from the backend.
      const response = await axios.get('http://localhost:8000/user', {
        params: { userId }
      });
      // Set user data.
      setUser(response.data);
    }
    catch (err) {
      // Console log if error.
      console.log(err);
    }
  };

  // Update user using useEffect.
  useEffect(() => {
    getUser();
  }, []);

  // Create characters.
  const characters = [
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

  // Create a function to set direction on swipe.
  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction);
  };

  // Create a function to handle if card goes out of screen. 
  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <>
      { user &&
      // Create division for dashboard
        <div className="dashboard">
          {/* Add ChatContainer */}
          <ChatContainer user={user} />

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
      }
    </>
  );
};

// Export Dashboard
export default Dashboard;
