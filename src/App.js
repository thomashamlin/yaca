import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList';
import { fetchJson } from './dataSources';
import '../styles/main.scss';


class App extends React.Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetchJson('/data/users.json', (data) => {
      this.setState({ users: data });
    });
  }

  render() {
    return (
      <div id="container">
        <aside id="users" className="column">
          <UserList users={this.state.users} />
        </aside>
        <main className="column">
          <section id="messages">
          </section>
          <footer>
            <form>
              <input type="text" name="message" />
              <button type="submit">Send</button>
            </form>
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
