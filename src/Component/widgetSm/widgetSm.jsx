import React from "react";
import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function widgetsm() {
  return (
    <div className="widgetsm">
      <span className="widgetSmTitle">New Employees</span>
      <ul className="widgetSmLsit">
        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/18/21/36/portrait-2865605_960_720.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mathew Luke</span>
            <span className="widgetSmUserTitle">Producer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcom" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/18/21/36/portrait-2865605_960_720.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mathew Luke</span>
            <span className="widgetSmUserTitle">Producer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcom" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/18/21/36/portrait-2865605_960_720.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mathew Luke</span>
            <span className="widgetSmUserTitle">Producer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcom" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/18/21/36/portrait-2865605_960_720.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mathew Luke</span>
            <span className="widgetSmUserTitle">Producer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcom" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/18/21/36/portrait-2865605_960_720.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mathew Luke</span>
            <span className="widgetSmUserTitle">Producer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcom" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
