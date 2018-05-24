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
    <form onSubmit={handleSend}>
      <input type="text" name="message" />
      <button type="submit">Send</button>
    </form>
  );
}

export default ChatForm;
