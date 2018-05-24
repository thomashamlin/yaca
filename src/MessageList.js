import React from 'react';
import { Message } from './Message';


function byDateAsc(msg1, msg2) {
  return (msg1.date < msg2.date) ? 1 : -1;
}


class MessageList extends React.Component {
  render() {
    const { messages } = this.props;
    const messagesChron = [...messages].sort(byDateAsc);
    return (
      <ol id="messages">
        {messagesChron.map(message => (
          <Message
            key={message.date}
            date={message.date}
            name={message.name}
            message={message.message}
          />
        ))}
      </ol>
    );
  }
}

export default MessageList;
