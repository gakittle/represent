import React from 'react';
import Office from './Office.jsx';

const Level = props => {
  const { items } = props;
  const levels = Object.keys(items.divisions);
  return (
    <div id="levels">
      {levels.map(level => {
        const region = items.divisions[level];
        if (region.officeIndices) {
          return (
            <div id="level" key={region.name}>
              <div id="level-name">{region.name}</div>
              <Office items={items} offices={region.officeIndices} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Level;
