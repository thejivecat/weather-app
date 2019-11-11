import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
    }
  }
  updateZip (e) {
    this.setState({
      zip: e.target.value
    })
  }
  handleSubmit () {
    this.props.updateWeatherData(this.state.zip);
    // this.setState({
    //   zip: '',
    //   state: '',
    //   city: ''
    // })
    
  }
  render() {
    return (
      <div className="searchForm">
        <div className="inputs">
          <input className="zip" value={this.state.zip} onChange={e => this.updateZip(e)} type="text" placeholder="Enter Zipcode" />
        </div>
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </div>
    )
  }
}

export default Search;