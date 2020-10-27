import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
//
import "./style/Header.css";
import {useStateValue} from "./StateProvider";

export default () => {
    const [{ user }] = useStateValue();

    return <div id="header">
        <div className="header-left">
            <Avatar className="header-avatar" alt={user?.displayName} src={user?.photoURL} />
            <AccessTimeIcon />
        </div>
        <div className="header-search">
            <SearchIcon />
            <input type="text" placeholder="Search | Slack"/>
        </div>
        <div className="header-right">
            <HelpOutlineIcon />
        </div>
    </div>
}