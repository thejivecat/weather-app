import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Boulder'
    };
  }
  componentDidMount() {
    fetch('/weather', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(data => data.text())
    .then(data => console.log(data))
    .catch((err) => console.log(err.response, "ERR"))
  }
  render () {
    return (
      <div id="app">
        "HEY"
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
