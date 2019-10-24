import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Boulder',
      zip: 80305,
      country: "USA",
      state: "Colorado"
    };
  }
  componentDidMount() {
    fetch('/weather/zip', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"zip": this.state.zip}),
    })
    .then(data => data.text())
    .then(data => console.log(data))
    .catch((err) => console.log(err.response, "ERR"))
  }
  render () {
    return (
      <div id="app">
        "HEllo world"
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
