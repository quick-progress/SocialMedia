import React from 'react';
import  './profile.css';

export default function Profile() {
  return (
    <main className="content">
      <div className="content__picture-block"></div>
      <div className="content__personal-info">
        <img className="content__personal-photo" src="./photo.jpg" alt="Фото профиля"></img>
        <div className="info content__info">
          <h2 className="content__name info__name">Dmitry K.</h2>
          <ul className="info__list">
            <li className="info__items">
              <span className="info__label">Date of Birth:</span>
              <span className="info__birthday">2 january</span>
            </li>
            <li className="info__items">
              <span className="info__label">City:</span>
              <span className="info__city">Minsk</span>
            </li>
            <li className="info__items">
              <span className="info__label">Education:</span>
              <span className="info__education">BSU '11</span>
            </li>
            <li className="info__items">
              <span className="info__label">Web Site:</span>
              <span className="info__site"><a href="http://it-kamasutra.com">http://it-kamasutra.com</a></span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}