import React from 'react';
import { Message } from './Message';


function byDateAsc(msg1, msg2) {
  const date1 = new Date(msg1.date);
  const date2 = new Date(msg2.date);
  return (date1 < date2) ? -1 : 1;
}


class MessageList extends React.Component {
  componentDidMount() {
    this.props.showLastMessage();
  }

  componentDidUpdate() {
    this.props.showLastMessage();
  }

  render() {
    const { messages } = this.props;
    const messagesChron = [...messages].sort(byDateAsc);
    return (
      <ol id="messages">
        {messagesChron.map(message => (
          <Message
            key={message.date}
            avatar={message.avatar}
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
