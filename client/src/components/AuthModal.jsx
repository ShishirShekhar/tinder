// AuthModal.jsx contain the components for AuthModal which is rendered in Home.jsx ('/' route), 
// it can be also accessed through the navbar.
// AuthModal.jsx contains default export of AuthModal component.

/* AuthModal component:
  AuthModal component is used to create auth. This takes three parameters:.
    1. setShowModel:
      This is used to change the value of showModal (which decides if the component is shown.
    2. isSignUp:
      This is used to check if client is signed up or not.
    3. setIsSignUp:
      This is used to set the value of isSignUp.

  AuthModal contains four state and two function.
  State: We have state for email, password, confirmPassword and error.
  Function:
    1. handleClick: 
      This function set the value of showModal to false and isSignUp to true.
    2. handleSubmit:
      This function is used to prevent the default behavior of submit button
      and add more functionality to it.

  AuthModal component returns auth-modal division which contains close-icon, title, description and form.
*/

// Import required modules
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookie } from 'react-cookie';

// Create AuthModal component
const AuthModal = ({ setShowModal, isSignUp, setIsSignUp }) => {
  // Initialize navigate.
  let navigate = useNavigate();

  // Create required state.
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  // Create cookie
  const [cookie, setCookie] = useCookie(['user']);

  // Create a function to setShowModal as false on click
  const handleClick = () => {
    setShowModal(false);
    setIsSignUp(true);
  };

  // Create a function to submit behavior.
  const handleSubmit = async (e) => {
    // prevent default behavior of form.
    e.preventDefault();
    // try signing up and catch if error.
    try {
      if (isSignUp && (password !== confirmPassword)) {
        setError('Password need to match!!')
        return;
      }
      // Send email and password to backend.
      const response = await axios.post('http://localhost:8000/signup', { email, password });

      // Set cookies.
      setCookie('Email', response.data.email);
      setCookie('UserId', response.data.userId);
      setCookie('AuthToken', response.data.token);

      // If success navigate to '/onboarding'.\
      const success = response.status === 201;
      if (success) {
        navigate('/onboarding');
      };
    }
    catch(error) {
      console.log(error);
    }
  };

  return (
    <div className='auth-modal'>
      {/* Create a close button */}
      <div className='close-icon' onClick={handleClick}>&#10006;</div>

      {/* Add heading and description */}
      <h2>{isSignUp ? 'Create Account' : 'Log in'}</h2>
      <p>By clicking Log In, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.</p>

      {/* Create the auth form */}
      <form onSubmit={handleSubmit}>
        {/* email input */}
        <input type='email' name='email' 
              id='email' placeholder='email' 
              required={true} 
              onChange={(e) => setEmail(e.target.value)} 
        />
        {/* password input */}
        <input type='password' name='password' 
              id='password' placeholder='password' 
              required={true} 
              onChange={(e) => setPassword(e.target.value)} 
        />
        {/* confirm password input if client is not signed up */}
        {
          isSignUp && 
          <input type='password' name='password-check' 
                id='password-check' placeholder='confirm password' 
                required={true} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        }
        {/* submit */}
        <input type='submit' className='secondary-button' />
        {/* Show if any error */}
        <p>{error}</p>
        
      </form>

      <hr />
      <h2>GET THE APP!</h2>
    </div>
  );
};

// Export AuthModal
export default AuthModal;
