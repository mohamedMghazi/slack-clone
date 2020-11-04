import React, {useState} from "react";
import db from "../firebase/firebase";
import {useStateValue} from "./StateProvider";
import firebase from "firebase";
import { animateScroll as scroll } from "react-scroll";
//
import "./style/chatInput.css";

export default ({ channelName, channelId }) => {
    const [ input, setInput ] = useState('');
    const [{ user }] = useStateValue();


    const sendMessage = (e) => {
        e.preventDefault();
        if(channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            }).catch((err) => console.log(err))
        }
        setInput("");
        scroll.scrollToBottom();
    }

    return <div className="chatInput">
        <form>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName?.toLowerCase()}`}
            />
            <button type="submit" onClick={(e) => sendMessage(e)}>SEND</button>
        </form>
    </div>
}