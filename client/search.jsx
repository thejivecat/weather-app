import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      state: '',
      city: '',
    }
  }
  updateZip (e) {
    this.setState({
      zip: e.target.value
    })
  }
  updateCity (e) {
    this.setState({
      city: e.target.value
    })
  }
  updateState (e) {
    this.setState({
      state: e.target.value
    })
  }
  render() {
    return (
      <div className="searchForm">
          <input className="zip" value={this.state.zip} onChange={e => this.updateZip(e)} type="text" placeholder="Enter Zipcode" />
          <input className="state" value={this.state.state} onChange={e => this.updateState(e)} type="text" placeholder="Enter State" />
          <input className="city" value={this.state.city} onChange={e => this.updateCity(e)} type="text" placeholder="Enter City" />
      </div>
    )
  }
}

export default Search;