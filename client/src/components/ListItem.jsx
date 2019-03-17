import React from 'react';

const ListItem = props => {
  return (
    <div>
      {props.office.name}
      {props.office.officialIndices}
    </div>
  );
};

export default ListItem;
