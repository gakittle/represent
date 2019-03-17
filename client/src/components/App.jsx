import React from 'react';
import $ from 'jquery';
import Address from './Address.jsx';
import List from './List.jsx';
import GCI_API_KEY from '../config/config.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        offices: [],
        officials: []
      }
    };
    this.search = this.handleSearch.bind(this);
  }

  handleSearch(e, address) {
    e.preventDefault();
    document.getElementById('input').value = '';
    const queryURL = `https://www.googleapis.com/civicinfo/v2/representatives?address=${address}&key=${GCI_API_KEY}`;
    fetch(queryURL)
      .then(res => {
        res.json().then(data => {
          console.log(data);
          this.setState({ items: data });
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <h1>Represent</h1>
        <h3>
          Do you know who speaks for you? Enter your address here for a one-stop
          overview!
        </h3>
        <Address search={this.search} />
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
