import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test Table</h1>
        <h3>This is just practice to get used to JSX</h3>
        <Person />
        <Table responsive bordered>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Mike</td>
            <td>38</td>
          </tr>
        </Table>
        <Button bsStyle="success" bsSize="large">Testing</Button>
      </div>
    );
  }
}

export default App;
