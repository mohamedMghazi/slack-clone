import React from 'react';
import './components/style/App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar";

export default() => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
          <SideBar />
      </div>
    </div>
  );
}