import React from 'react';
import ReactDOM from 'react-dom';
import ChatForm from './ChatForm';
import MessageList from './MessageList';
import UserList from './UserList';
import { fetchJson } from './dataSources';
import '../styles/main.scss';


function showLastMessage() {
  const main = document.getElementsByTagName('main')[0];
  main.scrollTop = main.scrollHeight;
}

class App extends React.Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      messages: [],
      users: []
    };

    // Bind `this` to the function's `this` so it isn't changed later.
    // Otherwise we get "Cannot read property 'setState' of undefined".
    // bind() returns a fn where `this` always has the value it had when
    // bind was called.
    this.handleMessageSend = this.handleMessageSend.bind(this);
  }

  componentDidMount() {
    // Fetch initial data
    fetchJson('/data/messages.json', (data) => {
      this.setState({ messages: data });
    });
    fetchJson('/data/users.json', (data) => {
      this.setState({ users: data });
    });
  }

  handleMessageSend(text) {
    const now = new Date();
    // This would return current authenticated user
    const user = '<Current User>';
    // Build an object representing this chat
    const msg = {
      // A random ID is good enough for now; used by React `key` so must be unique
      id: Math.floor((Math.random() * 1000) + 1000),
      avatar: 'unknown.jpeg',
      date: now.toJSON(),
      name: user,
      message: text
    };
    this.setState(() => ({ messages: [...this.state.messages, msg] }));
    // A real app would save this to a DB here
  }

  render() {
    return (
      <div id="container">
        <aside id="users" className="column">
          <UserList users={this.state.users} />
        </aside>
        <main className="column">
          <section id="messages">
            <MessageList messages={this.state.messages} showLastMessage={showLastMessage} />
          </section>
          <footer>
            <ChatForm onSend={this.handleMessageSend} />
          </footer>
        </main>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
