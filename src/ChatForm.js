import React from 'react';


function ChatForm({ onSend }) {
  function handleSend(event) {
    event.preventDefault();
    const inputField = document.querySelector('[name=message]');

    onSend(inputField.value);

    // Clear input field
    inputField.value = '';
  }

  return (
    <form onSubmit={handleSend} method="post">
      <input type="text" name="message" placeholder="Say what's on your mind" autoComplete="off" />
      <button type="submit">Send</button>
    </form>
  );
}

export default ChatForm;
