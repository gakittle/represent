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
        <form>
          <input
            id="input"
            defaultValue="Enter your address here"
            type="text"
            onChange={event => {
              this.setState({ address: event.target.value });
            }}
          />
          <input
            type="submit"
            value="Show me!"
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
