import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
//
import "./style/Chat.css";
import db from "../firebase/firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

export default () => {
  const { roomId } = useParams();
  const [ roomDetails, setRoomDetails ] = useState(null);
  const [ roomMessages, setRoomMessages ] = useState([]);
  console.log(roomMessages)
  useEffect(() => {

    if (roomId) {
      db.collection("rooms")
          .doc(roomId)
          .onSnapshot(snapshot => setRoomDetails(snapshot.data()))
    }

    db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())))

  }, [roomId])

  console.log(roomDetails);

  return (
    <div className="chat">
      <div className="chat-header">
        <div className="chat-headerLeft">
          <h4 className="chat-channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat-headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>


      </div>
      <div className="chat-message">
        {
          roomMessages.map(({user, userImage, message, timestamp}, i) => (

              <Message
                  key={i}
                  message={message}
                  user={user}
                  userImg={userImage}
                  timestamp={timestamp}
              />
          ))
        }
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
};
