import React from 'react';

const Rep = props => {
  const { items, reps } = props;
  return (
    <div id="reps">
      {reps.map(index => {
        const rep = items.officials[index];
        if (rep.name === 'VACANT') {
          return <div id="rep">{rep.name}</div>;
        }
        // const pic = rep.photoUrl || defaultPic;
        const phone = rep.phones ? rep.phones[0] : 'Not Available';
        const email = rep.emails ? rep.emails[0] : 'Not Available';
        const url = rep.urls ? rep.urls[0] : 'Not Available';
        return (
          <div id="rep" key={rep.name}>
            <div id="col1">
              <div className="profile" />
            </div>
            <div id="col2">
              <div className="info">{rep.name}</div>
              <div className="info">{rep.party}</div>
              <div className="info">Phone: {phone}</div>
              <div className="info">Email: {email}</div>
              <div className="info">{url}</div>
            </div>
            {/* <div id="col3">
              {rep.channels.map(social => {
                return (
                  <div className="info">
                    {social.type}: {social.id}
                  </div>
                );
              })}
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default Rep;
