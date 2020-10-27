import React from "react"

export default ({message, timestamp, user, userImg}) => {
    return <div className="message">
        <img src={userImg} alt="user" />
        <div className="message-info">
            <h4>{user} <span className="message-timestamp">{new Date(timestamp?.toDate().toUTCString())}</span> </h4>
            <p>{message}</p>
        </div>
    </div>
}