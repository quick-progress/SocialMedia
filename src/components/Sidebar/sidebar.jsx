import React from 'react';
import  './sidebar.css';

export default function Sidebar() {
  return(
    <sidebar className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-nav__list">
          <li className="sidebar-nav__items">
            <img className="sidebar-nav__icon" src="./profile.svg"></img>
            <a href="#" className="sidebar-nav__text">Profile</a>
          </li>
          <li className="sidebar-nav__items">
            <img className="sidebar-nav__icon" src="./messages.svg"></img>
            <a href="#" className="sidebar-nav__text">Messages</a>
          </li>
          <li className="sidebar-nav__items">
            <img className="sidebar-nav__icon" src="./news.svg"></img>
            <a href="#" className="sidebar-nav__text">News</a>
          </li>
          <li className="sidebar-nav__items">
            <img className="sidebar-nav__icon" src="./music.svg"></img>
            <a href="#" className="sidebar-nav__text">Music</a>
          </li>
          <li className="sidebar-nav__items">
            <img className="sidebar-nav__icon" src="./settings.svg"></img>
            <a href="#" className="sidebar-nav__text">Settings</a>
          </li>
        </ul>
      </nav>
    </sidebar>
  )
}