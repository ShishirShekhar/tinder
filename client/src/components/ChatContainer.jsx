// ChatContainer.jsx contain the components for chat-box, ....
// .... which is called in Dashboard.jsx ('/dashboard' route).
// ChatContainer.jsx contains default export of ChatContainer component.

/* ChatContainer component:
  ChatContainer component is used to create the Chat box.

  ChatContainer component returns 
  ChatHeader component, two option buttons, MatchesDisplay and ChatDisplay component.
*/

// Import required modules.
import React from 'react';
// Import required components.
import ChatHeader from './ChatHeader';
import MatchesDisplay from './MatchesDisplay';
import ChatDisplay from './ChatDisplay';

const ChatContainer = ({ user }) => {
  return (
    // Create division for chat container
    <div className='chat-container'>
      {/* Add ChatHeader */}
      <ChatHeader user={user} />
      {/* Create division for matches and chat option */}
      <div>
        <button className="option">Matches</button>
        <button className="option">Chat</button>
      </div>
      {/* Add MatchesDisplay */}
      <MatchesDisplay />
      {/* Add ChatDisplay */}
      <ChatDisplay />

    </div>
  );
};

// Export ChatContainer
export default ChatContainer;
