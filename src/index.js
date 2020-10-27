import React from 'react';
import ReactDOM from 'react-dom';
import './components/style/Main.css';
import App from './App';
import {StateProvider} from "./components/StateProvider";
import Reducer, {initialState} from "./components/redux/Reducer";

ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={Reducer}>
            <App />
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root'));
