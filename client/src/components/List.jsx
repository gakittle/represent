import React from 'react';
import Level from './Level.jsx';

const List = props => {
  const { items } = props;
  return (
    <div id="list">
      You have {items.officials.length} elected representatives.
      <h4> Your Representatives </h4>
      <Level items={items} />
    </div>
  );
};

export default List;
