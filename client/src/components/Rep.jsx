import React from 'react';

const Rep = props => {
  const { items, reps } = props;
  return (
    <div id="reps">
      {reps.map(index => {
        const rep = items.officials[index];
        if (rep.name === 'VACANT') {
          return <div className="rep">{rep.name}</div>;
        }
        const pic =
          rep.photoUrl ||
          'http://chittagongit.com//images/default-profile-icon/default-profile-icon-24.jpg';
        const phone = rep.phones ? rep.phones[0] : '';
        const email = rep.emails ? rep.emails[0] : '';
        const url = rep.urls ? rep.urls[0] : '';
        if (rep.channels) {
          var social = rep.channels.map(channel => {
            return (
              <div className="info">
                {channel.type}: {channel.id}
              </div>
            );
          });
        } else {
          var social = <div className="info" />;
        }
        const address = rep.address
          ? rep.address[0]
          : {
              line1: '',
              city: '',
              state: '',
              zip: ''
            };

        return (
          <div className="rep" key={rep.name}>
            <div className="col1">
              <div className="wrap">
                <img src={pic} />
              </div>
            </div>
            <div className="col2">
              <div className="info name">{rep.name}</div>
              <div className="info">{rep.party}</div>
              <div className="info">{address.line1}</div>
              <div className="info">
                {address.city}, {address.state} {address.zip}
              </div>
            </div>
            <div className="col3">
              <div className="info">{phone}</div>
              <div className="info">{email}</div>
              <div className="info">{url}</div>
              <div id="info">{social}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Rep;
