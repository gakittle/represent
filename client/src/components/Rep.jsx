import React from 'react';

const Rep = props => {
  const { items, reps } = props;
  return (
    <div id="reps">
      {reps.map(index => {
        return (
          <div id="rep" key={items.officials[index].name}>
            {items.officials[index].name}
          </div>
        );
      })}
    </div>
  );
};

export default Rep;
