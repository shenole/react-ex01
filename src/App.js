import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test Table</h1>
        <h3>This is just practice to get used to JSX</h3>
        <table>
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
        </table>
      </div>
    );
  }
}

export default App;
