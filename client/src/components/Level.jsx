import React from 'react';
import Office from './Office.jsx';

const Level = props => {
  const { items } = props;
  const levels = Object.keys(items.divisions);
  console.log(levels);
  return (
    <div id="levels">
      {levels.map(level => {
        const region = items.divisions[level];
        if (region.officeIndices.length) {
          return (
            <div id="level">
              <div>{region.name}</div>
              <Office items={items} offices={region.officeIndices} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Level;
