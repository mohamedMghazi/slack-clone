import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

//
import './components/style/App.css';
import Chat from "./components/Chat";

export default() => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
          <SideBar />
          <BrowserRouter>
              <Switch>
                  <Route path="/rooms/:roomId" component={Chat} />
              </Switch>
          </BrowserRouter>
      </div>
    </div>
  );
}