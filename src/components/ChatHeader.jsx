// ChatHeader.jsx contain the components for chat-box header, ....
// .... which is called in ChatContainer.jsx.
// ChatHeader.jsx contains default export of ChatHeader component.

/* ChatHeader component:
  ChatHeader component is used to create the header for chat-box.

  ChatHeader component returns client profile, name and logout icon.
*/

// Import required modules.
import React from 'react';

const ChatHeader = () => {
  return (
    <div className='chat-container-header'>
      {/* Create a division to show user profile and name */}
      <div className="profile">
        <div className="img-container">
          <img src="" alt="" />
        </div>
        <h3>UserName</h3>
      </div>
      {/* Create logout icon */}
      <i className="log-out-icon">⬅</i>
    </div>
  );
};

// Export ChatHeader
export default ChatHeader;
