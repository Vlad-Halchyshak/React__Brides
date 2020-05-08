import React from 'react'
import heart from '../../images/heart.png'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return <header className="header">
    <div className="header__item_Dashboard">
      <span><h6>Brides</h6></span>
      <span><img src={heart} />
        <i>Dating</i></span></div>
    <div className="header__section">
      <div className="header__item"><NavLink to='/friends'>Friends</NavLink></div>
      <div className="header__item"><NavLink to='/chats'>Chats</NavLink></div>
      <div className="header__item"><NavLink to='/VideoCalls'>Video Calls</NavLink></div>
    </div>
    <div className="header__section">
      <div className="header__item"><NavLink to='/profile'>My Profile</NavLink></div>
      <div className="header__item"><NavLink to='/MyAccount'>My account</NavLink></div>
      <div className="header__item">
        {props.isAuth
          ? <button onClick={props.logout}>Logout</button>
          : <NavLink to={'/login'}>Login</NavLink>}</div>

    </div>
  </header>
}


    export default Header