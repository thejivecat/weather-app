import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search.jsx';
import WeatherCard from './weatherCard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      card1: {
        time: '',
        temp: '',
        description: '',
      },
      card2: {
        time: '',
        temp: '',
        description: '',
      },
      card3: {
        time: '',
        temp: '',
        description: '',
      }
    };
    this.updateWeatherData = this.updateWeatherData.bind(this);
  }
  updateWeatherData (data) {
    fetch('/weather/zip', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"zip": `${data}`}),
    })
    .then(data => data.json())
    .then(data => this.setState({
      card1: data.card1,
      card2: data.card2,
      card3: data.card3
    }))
    .catch((err) => console.log(err.response, "ERR"))
  }
  componentDidMount() {
    // fetch('/weather/zip', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({"zip": this.state.zip}),
    // })
    // .then(data => data.json())
    // .then(data => console.log(data))
    // .then(data => this.setState({
    //   card1: data.card1,
    //   card2: data.card2,
    //   card3: data.card3
    // }))
    // .catch((err) => console.log(err.response, "ERR"))
  }
  render () {
    return (
      <div id="app">
      <h1 className="title-app">The Weather Report</h1>
        <Search updateWeatherData={this.updateWeatherData}/>
        <WeatherCard card={this.state.card1}/>
        <WeatherCard card={this.state.card2}/>
        <WeatherCard card={this.state.card3}/>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
