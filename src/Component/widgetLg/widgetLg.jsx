import React from "react";
import "./widgetLg.css";

export default function widgetLg() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh"> Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>

          <td className="widgetLgDate">11 Jul 2022</td>
          <td className="widgetLgAmount">$1000</td>

          <td className="widgetLgStatus">
            <button className="widgetLmButton Approved">Aprroved</button>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td>
            <img
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">11 Jul 2022</td>
          <td className="widgetLgAmount">$1000</td>

          <button className="widgetLmButton  Decline"> Declined</button>
        </tr>

        <tr className="widgetLgTr">
          <td>
            <img
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">11 Jul 2022</td>
          <td className="widgetLgAmount">$1000</td>

          <button className="widgetLmButton Approve ">Aprroved</button>
        </tr>

        <tr className="widgetLgTr">
          <td>
            <img
              src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">11 Jul 2022</td>
          <td className="widgetLgAmount">$1000</td>

          <button className="widgetLmButton  Declin ">Decline</button>
        </tr>
      </table>
    </div>
  );
}
