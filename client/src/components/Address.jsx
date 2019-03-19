import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };
  }

  render() {
    return (
      <div id="address">
        <form id="submit">
          <input
            id="input"
            placeholder="Enter your address here"
            type="text"
            onChange={event => {
              this.setState({ address: event.target.value });
            }}
          />
          <input
            id="btn"
            type="submit"
            value="Let's go!"
            onClick={event => {
              this.props.search(event, this.state.address);
            }}
          />
        </form>
      </div>
    );
  }
}

export default Address;
