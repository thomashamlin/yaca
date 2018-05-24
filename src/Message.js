import React from 'react';
import moment from 'moment';


function Message({ date, avatar, name, message }) {
  const timeOfDay = moment(new Date(date)).format('h:mm A');
  const avatarURL = `/data/${avatar}`;
  return (
    <li>
      <img src={avatarURL} alt={name} />
      <div className="content">
        <div className="meta">
          <div className="name"> {name} </div>
          <div className="date"> {timeOfDay} </div>
        </div>
        <p> {message} </p>
      </div>
    </li>
  );
}

export { Message };
