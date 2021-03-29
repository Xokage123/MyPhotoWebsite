import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Autf from '../components/autf';

import '../css/header.css';

class Header extends Component {

  logOutButton() {
    console.log("EXIT");
    this.props.getOut();
    localStorage.clear();
    window.location.assign("http://viewerphoto.ru/");
    // https://unsplash.com/oauth/login
    // Autf();
  }

  render() {

    return (
          <header className='header'>
            <img src="./src/img/binoculars.png" />
            <button id='logIn' onClick={() => this.props.getLogin(true)}>LOG IN</button>
            <button id='logOut' className='hidden' onClick={() => this.logOutButton()}>LOG OUT</button>
          </header>
    )
  }
}

export default Header;
