// ChatDisplay.jsx contain the components for chat-box, ....
// .... which is called in ChatContainer.jsx.
// ChatDisplay.jsx contains default export of ChatDisplay component.

/* ChatDisplay component:
  ChatDisplay component is used to create the chat component of the chat-box.

  ChatDisplay component returns Chat and ChatInput components.
*/

// Import required modules
import React from 'react';
// Import required components.
import Chat from '../components/Chat';
import ChatInput from './ChatInput';

const ChatDisplay = () => {
  return (
    <div>
      {/* Add Chat */}
      <Chat />
      {/* Add ChatInput */}
      <ChatInput />
    </div>
  );
};

// Export ChatDisplay.
export default ChatDisplay;
