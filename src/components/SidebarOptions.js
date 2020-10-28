import React from "react"

//
import "./style/SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "../firebase/firebase";

const SidebarOptions = ({Icon, title, id, addChannelOption}) => {
    const history = useHistory();

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push(title);
        }
    }

    const addChannel = () => {
        const channelName = prompt("Please enter Channel name")

        if (channelName) {
            db.collection("rooms").add({
                name: channelName
            })
        }
    }
    return <div className="sidebarOption"
    onClick={addChannelOption ? addChannel : selectChannel }>
            {Icon && <Icon className="sidebarOption-icon"/>}
            {Icon ? <h3>{title}</h3> : <h3 className="sidebarOption-channel">
                    <span className="sidebarOption-hash">#</span>
                    {title}
                </h3>
            }
        </div>
}

export default (SidebarOptions);