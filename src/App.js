import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import Profile from './components/Profile/profile';

function App() {
  return (
    <div className="App__wrap">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;
