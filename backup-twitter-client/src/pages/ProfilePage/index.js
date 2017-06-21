import React, { PropTypes } from 'react';
import {browserHistory as history} from 'react-router';
import "./Profile.css";

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state={
      profile: [],
      tweets: []
    }
  }

fetchAll = () => {
  // fetchTweets = () => {
    fetch(`https://infinite-everglades-64546.herokuapp.com/statuses/user_timeline?screen_name=${this.refs.newUser.value}`)
      .then((raw) => raw.json())
      .then((res) => {
        console.log('res', res)
        this.setState({
          tweets: res
        })
      })
  // }

  // fetchProfile = () => {
    fetch(`https://infinite-everglades-64546.herokuapp.com/users/show?screen_name=${this.refs.newUser.value}`)
      .then((raw) => raw.json())
      .then((res) => {
        console.log('res', res)
        this.setState({
          profile: res
        })

      })
  // }
}

  render () {
    return(
      <div>
          <div className = 'searchFormContainer'>
            <img className = 'avatar'  src={this.state.profile.profile_image_url_https}/>
            <p>{this.state.profile.screen_name} </p>
            <input className="searchForm" type="text" ref="newUser"/>
            <button className="searchFormButton" onClick={this.fetchAll}>Search</button>
          </div>
          <div className="profile-container">
            <div className="profile-header">
              <img className="profile-photo" />
            </div>
            <div className="profile-lower">

              <div className='profile-buttons'>
                  <button className='profile-button1'><span>Sentiment</span></button>
                  <button className='profile-button2'><span>Timeline</span></button>
                  <button className='profile-button3'><span>Keywords</span></button>
              </div>
            </div>
          </div>
      </div>
    )
  }

}

export default Profile;
