import React from 'react';
import moment from 'moment';


function Message({ date, avatar, name, message }) {
  const timeOfDay = moment(new Date(date)).format('h:mm A');
  const avatarURL = `/data/${avatar}`;
  return (
    <li>
      <div className="meta">
        <img src={avatarURL} alt={name} />
        <div className="name">
          {name}
        </div>
        <div className="date">
          {timeOfDay}
        </div>
      </div>
      <p>
        {message}
      </p>
    </li>
  );
}

export { Message };
