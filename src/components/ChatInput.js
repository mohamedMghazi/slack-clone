import React, {useState} from "react";

export default ({ channelName, channelId }) => {
    const [ input, setInput ] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
    }
    return <div className="chatInput">
        <from>
            <input value={input}
                   onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName?.toLowerCase()}`}/>
            <button type="submit" onClick={sendMessage}>SEND</button>
        </from>
    </div>
}