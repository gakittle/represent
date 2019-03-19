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
        divisions: [],
        offices: [],
        officials: []
      }
    };
    this.search = this.handleSearch.bind(this);
  }

  handleSearch(e, address) {
    e.preventDefault();
    document.getElementById('input').value = '';
    fetch(`/api/reps/${address}`).then(res => {
      res.json().then(data => {
        console.log(data);
        this.setState({ items: data });
      });
    });
  }

  render() {
    return (
      <div id="root">
        <div id="banner">
          <h1>Represent</h1>
          <h3>Who speaks for you?</h3>
          <Address search={this.search} />
        </div>
        <div id="msg">
          <div>Speak. Act. </div>
          <div id="msg2">Represent.</div>
        </div>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
