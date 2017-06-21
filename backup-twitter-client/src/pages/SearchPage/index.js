import React, { Component } from 'react';
import './Search.css';
import {browserHistory as history } from 'react-router';

class SearchPage extends Component {

  fetchData = () =>{
    fetch(`https://infinite-everglades-64546.herokuapp.com/users/show?screen_name=${this.refs.screen_name.value}`)
      .then((raw) => raw.json())
       .then((res) => {
        console.log('res', res)
  })
  history.push(`/search/${this.props.params.screen_name}/profile`);
}

  render() {
    return (
      <div className="search-container">
       <div className="search-content-container">
            <div className="search-content">
                <p className="search-title">TWITTER DATA<i className="fa fa-twitter"></i></p>
                <p className="search-description">ENTER A PUBLIC USERNAME FOR ACCOUNT DATA</p>
                <div className="search-button-input">
                  <input className="search-form" type="text" ref="screen_name" placeholder="USERNAME"></input>
                  <button onClick={this.fetchData} className="search-button">ENTER</button>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default SearchPage
