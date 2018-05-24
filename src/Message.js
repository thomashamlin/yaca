import React from 'react';
import moment from 'moment';


function Message({ date, name, message }) {
  const timeOfDay = moment(new Date(date)).format('h:mm A');
  return (
    <li>
      <div className="meta">
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
