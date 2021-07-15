import React, {Component} from 'react';
import './TopBar.css'
import {NavLink} from 'react-router-dom';
class TopBar extends Component {

  render() {
    return <div className='TopBar'>
        <NavLink to="/" >
          Splashgram
        </NavLink>
    </div>

  }
}

export default TopBar;