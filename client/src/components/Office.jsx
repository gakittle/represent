import React from 'react';
import Rep from './Rep.jsx';

const Office = props => {
  const { items, offices } = props;
  return (
    <div id="offices">
      {offices.map(index => {
        return (
          <div id="office" key={items.offices[index].name}>
            <div id="office-name">{items.offices[index].name}</div>
            <Rep items={items} reps={items.offices[index].officialIndices} />
          </div>
        );
      })}
    </div>
  );
};

export default Office;
