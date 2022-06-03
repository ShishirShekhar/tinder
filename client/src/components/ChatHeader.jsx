// ChatHeader.jsx contain the components for chat-box header, ....
// .... which is called in ChatContainer.jsx.
// ChatHeader.jsx contains default export of ChatHeader component.

/* ChatHeader component:
  ChatHeader component is used to create the header for chat-box.

  ChatHeader component returns client profile, name and logout icon.
*/

// Import required modules.
import React from 'react';
import { useCookies } from 'react-cookie';

const ChatHeader = ({ user }) => {
  // Create cookies.
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  //  Create a function to logout.
  const logout = () => {
    // remove cookies.
    removeCookie('UserId', cookies.userId);
    removeCookie('AuthToken', cookies.AuthToken);

    // Reload the window
    window.location.reload();
  };

  return (
    <div className='chat-container-header'>
      {/* Create a division to show user profile and name */}
      <div className="profile">
        <div className="img-container">
          <img src={user.url} alt={"photo of" + user.fName} />
        </div>
        <h3>{user.fName}</h3>
      </div>
      {/* Create logout icon */}
      <i className="log-out-icon"n onClick={logout}>⬅</i>
    </div>
  );
};

// Export ChatHeader
export default ChatHeader;
