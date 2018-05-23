import React from 'react';
import { fetchJson } from './dataSources';


/**
 * Renders a list of users.
 *
 * @param {Object[]} users: [{id: 3, name: 'Sam'},...]
 */
class UserList extends React.Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    fetchJson('/data/users.json', (data) => {
      this.setState({ users: data });
    });
  }

  render() {
    return (
      <ul className="users">
        {this.state.users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default UserList;
