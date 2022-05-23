// Home.jsx contains all the components for "/" route.
// Home.jsx contains default export of Home component.

/* Home component:
    Nome component is used to create home page.
    It contains two variable: minimal and authToken, two states and one function: handleClick.
    Variables:
        minimal parameter is used to create minimal design.
        authToken is used to check if the client is authenticated.
    State:
        (showModal, setShowModal): This is used to show the AuthModal.
        (isSignUp, setIsSignUp): This is used to check if client is signed up.
    function:
        handleClick is used to change the value of showModal to true using setShowModal.

    Home component returns overlay which contains Nav component and home division.
    Nav component: 
        It is used to render navbar components.
    home division:
        It contains the heading and primary-button and AuthModal.
        primary-button:
            Possible values of primary-button: sign-out, create-an-account,
            these values are shown on the basis of the value of authToken.
        AuthModal:
            AuthModal is shown according to the value of showModal (by default it is false.)
*/

// Import required modules
import React from 'react';
import { useState } from 'react';
// Import required components
import Nav from '../components/Nav';
import AuthModal from '../components/AuthModal';

// Create Home component
const Home = () => {
    // Create auth token
    const authToken = false;
    const minimal = false;

    // Create state for AuthModal and isSignUp
    const [showModal, setShowModal] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);

    // Create a function to setShowModal as true on click
    const handleClick = () => {
        return setShowModal(true);
    };

    return (
        <div className='overlay'>
            {/* Render Nav component  */}
            <Nav 
                minimal={minimal} 
                authToken={authToken} 
                showModal={showModal} 
                setShowModal={setShowModal}
                isSignUp={isSignUp}
                setIsSignUp={setIsSignUp}
            />
            
            <div className='home'>
                {/* Create heading */}
                <h1 className='primary-title'>Swipe Right®</h1>

                {/* Create button with value: sign-out, create-an-account according to authToken */}
                <button className='primary-button' onClick={handleClick}>
                    {authToken ? "Sign out" : "Create an account"}
                </button>

                {/* Render AuthModal according to showModal */}
                {
                    showModal && 
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
                }
            </div>
        </div>
    );
};

// Export Home
export default Home;
