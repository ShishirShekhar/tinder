// ChatInput.jsx contain the components for chat-box, ....
// .... which is called in ChatContainer.jsx.
// ChatInput.jsx contains default export of ChatInput component.

/* ChatInput component:
  ChatInput component is used to to get chat input in the chat-box.

  ChatInput contains one state and one function.
  1. State(textarea, setTextarea): This is used to set the value of textarea.
  2. Function(handleChange): This is used to update the value of textarea on change.

  ChatInput component returns textarea and a button.
*/

// import required modules.
import React from 'react';
import { useState } from 'react';

const ChatInput = () => {
    // Create state for textarea.
    const [textarea, setTextarea] = useState(null);

    // Create a function to handle change.
    const handleChange = (e) => {
        setTextarea(e.target.value);
    };

    return (
        <div className='chat-input'>
            {/* Create a text area */}
            <textarea 
                    name="textarea" id="textarea"
                    value={textarea} onChange={handleChange}
            />
            {/* Create a submit button */}
            <button className='secondary-button'>Submit</button>
        </div>
    );
};

// Export ChatInput.
export default ChatInput;
