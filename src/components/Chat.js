import React from "react";
import { useParams } from "react-router-dom";

//
import "./style/Chat.css";

export default () => {
    const { roomId } = useParams();

    return <div className="chat">
        <h1>{roomId}</h1>
    </div>
}