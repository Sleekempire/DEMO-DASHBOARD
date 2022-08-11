import React from "react";
import FeaturedInfo from "./FeaturedInfo/featuredInfo";
import Chart from "./Chart/chart";
import "./home.css";
import { userData } from "../dummyData";
import WidgetLg from "./widgetLg/widgetLg";
import WidgetSm from "./widgetSm/widgetSm";

export default function home() {
  return (
    <div className="Home">
      <FeaturedInfo />
      <Chart data={userData} title="SALE" grid datakey=" ActiveUser" />
      <div className="homeWidgets"></div>
      <WidgetSm />
      <WidgetLg />
    </div>
  );
}
