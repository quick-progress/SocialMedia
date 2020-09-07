import React from 'react';
import  './header.css';

export default function Header() {
  return(
    <header className="header">
      <img className="header__logo" src="./logo_150x150.png" alt="logo"></img>
      <a className="header__site-name">Социальная сеть</a>
    </header>
  )
}