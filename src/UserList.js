import React from 'react';


/**
 * Renders a list of users.
 */
function UserList({ users }) {
  return (
    <ul className="users">
      {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
