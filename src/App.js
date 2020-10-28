import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

//
import './components/style/App.css';
import Chat from "./components/Chat";
import Login from "./components/Login";
import {useStateValue} from "./components/StateProvider";

export default () => {
    // eslint-disable-next-line
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="app">
            <BrowserRouter>
                {(!user) ?
                    <Login />
                    : <>
                        <Header/>
                        <div className="app-body">
                            <SideBar/>

                            <Switch>
                                <Route path="/" exact>
                                    <h1>Welcome to slack</h1>
                                </Route>
                                <Route path="/room/:roomId" exact component={Chat}/>
                            </Switch>

                        </div>
                    </>}
            </BrowserRouter>
        </div>
    );
}