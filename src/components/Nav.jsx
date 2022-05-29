// Nav.jsx contain the components for Navbar which is called in Home.jsx ('/' route)
// Nav.jsx contains default export of Nav component.

/* Nav component:
    Nav component is used to create navbar. This takes four parameters: 
        1. minimal parameter is used to create minimal design.
        2. authToken is used to check if the client is authenticated.
        3. showModal is used to show the modal, its possible values are 'true', 'false'.
        4. setShowModal is used to set the showModal value.
    It contains: one function (handleClick).
    handleClick:
        This function is used to set the value of showModel to true and isSignUp to false.

    Nav component returns nav tag which contains logo and login button.
    logo:
        There are two logos white and color, which show on the basis of minimal parameter.
    nav-button:
        This button is visible when authToken and minimal are false.
        On click, showModal value is set to be 'true' through handleClick function.
        This button is disabled according to the value of showModal.
*/

// import required modules
import React from 'react';
// import logos
import whiteLogo from '../images/tinder_logo_white.png';
import colorLogo from '../images/color-logo-tinder.png';

// Create Nav component
const Nav = ({ minimal, authToken, showModal, setShowModal, setIsSignUp }) => {

    // Create a function to handle the click.
    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false);
    }

    return (
        <nav className='nav'>
            {/* Add color logo and white logo according to minimal */}
            <div className='logo-container'>
                <img src={minimal ? colorLogo : whiteLogo} alt='logo' className='logo' />
            </div>
            {/* Show login in button if authToken and minimal are false */}
            {
            !authToken && !minimal && 
            <button className='nav-button' onClick={handleClick} disabled={showModal}>
                Log In
            </button>
            }
        </nav>
    );
};

// Export Nav
export default Nav;
