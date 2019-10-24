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
  render() {
    return (
      <div className="searchForm">
        <div className="zipInput">
          <input value={this.state.zip} onChange={e => this.updateZip(e)} type="text" placeholder="Enter Zipcode" />
        </div>
      </div>
    )
  }
}

export default Search;