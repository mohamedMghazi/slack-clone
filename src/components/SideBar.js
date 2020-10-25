import React from "react";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOptions from "./SidebarOptions";
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

//
import "./style/SideBar.css";

export default () => {
    return <div id="sidebar">
        <div className="sidebar-header">
           <div className="sidebar-info">
               <h2>clever Programmer</h2>
               <h3>
                   <FiberManualRecordIcon/>
                   Mohamed Ghazi
               </h3>
           </div>
            <CreateIcon />
        </div>
        <SidebarOptions Icon={InsertCommentIcon} title="Thread" />
        <SidebarOptions Icon={InboxIcon} title="Mentions & reaction" />
        <SidebarOptions Icon={DraftsIcon} title="Saved items" />
        <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
        <SidebarOptions Icon={PeopleAltIcon} title="People & user Groups" />
        <SidebarOptions Icon={AppsIcon} title="Apps" />
        <SidebarOptions Icon={FileCopyIcon} title="File browser" />
        <SidebarOptions Icon={ExpandLessIcon} title="Show less" />
        <div className="border"></div>
        <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
        <div className="border"></div>
        <SidebarOptions Icon={AddIcon} title="Add channel" />
    </div>
}