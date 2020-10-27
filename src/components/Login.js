import React from "react";
import "./style/login.css"
import {auth, provider} from "../firebase/firebase";
import {useStateValue} from "./StateProvider";
import {actionValues} from "./redux/Reducer";


export default () => {
    const [{user}, dispatch] = useStateValue()
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(r => {
                console.log(r);
                dispatch({
                    type: actionValues.SET_USER,
                    user: user
                })
            })
            .catch(err => alert(err.message))
    }
    return <div className="login">
        <div className="login-container">
            <img
                src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
                alt="logo"
            />
            <h1>Sign in to Slack</h1>
            <p>Continue with the Google account or email address you use to sign in.</p>
            <button onClick={signIn}>Continue with Google</button>
        </div>
    </div>
}