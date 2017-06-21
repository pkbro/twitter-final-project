import React, { PropTypes } from 'react'
import {browserHistory as history} from 'react-router';

class HomePage extends React.Component {
  componentDidMount() {
    fetch(`https://infinite-everglades-64546.herokuapp.com/statuses/user_timeline?screen_name=${this.props.params.screen_name}`)
      .then((raw) => raw.json())
      .then((res) => {
        console.log('res', res)
      })
  }

  _handleClick= () =>{
    history.push(`/homepage/${this.refs.UserInput.value}/profile`);
  }
  render () {
    return (
      <div className="homepage">
        <h1> Home Page</h1>
        <input placeholder="search user" type="text" ref='UserInput'/>
        <button class='uselessAf' onClick={this._handleClick}>daddy</button>
      </div>
    )
  }
}

export default HomePage;
