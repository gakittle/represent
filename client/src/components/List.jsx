import React from 'react';
import Level from './Level.jsx';

const List = props => {
  const { items } = props;
  return (
    <div id="list">
      <Level items={items} />
    </div>
  );
};

export default List;
