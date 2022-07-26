import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="./home" className="link">
              <li className="sidebarListItem">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>

            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>

            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="./UserList" className="link">
              <li className="sidebarListItem">
                <PersonOutlineIcon className="sidebarIcon" />
                Teams
              </li>
            </Link>

            <Link to="./ProductList" className="link">
              <li className="sidebarListItem">
                <FreeBreakfastIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              Transactions
            </li>

            <li className="sidebarListItem">
              <EqualizerIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              Mail
            </li>

            <li className="sidebarListItem">
              <ConnectWithoutContactIcon className="sidebarIcon" />
              Feedback
            </li>

            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutlineIcon className="sidebarIcon" />
              Manage
            </li>

            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>

            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
