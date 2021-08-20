import React from 'react';
import './widgetLg.css';

const WidgetLg = () => {
    return ( 
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTR">
                    <th className="widgetLgTH">Customer</th>
                    <th className="widgetLgTH">Date</th>
                    <th className="widgetLgTH">Amount</th>
                    <th className="widgetLgTH">Status</th>
                </tr>
                <tr className="widgetLgTR">
                    <td className="widgetLgUser">
                        <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetLgIMG" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">120 $</td>
                    <td className="widgetLgStatus">
                        <button className="widgetLgButtonApproved">Approved</button>
                    </td>
                </tr>
                <tr className="widgetLgTR">
                    <td className="widgetLgUser">
                        <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetLgIMG" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">120 $</td>
                    <td className="widgetLgStatus">
                        <button className="widgetLgButtonDeclined">Declined</button>
                    </td>
                </tr>
                <tr className="widgetLgTR">
                    <td className="widgetLgUser">
                        <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetLgIMG" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">120 $</td>
                    <td className="widgetLgStatus">
                        <button className="widgetLgButtonPending">Pending</button>
                    </td>
                </tr>
                <tr className="widgetLgTR">
                    <td className="widgetLgUser">
                        <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetLgIMG" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 June 2021</td>
                    <td className="widgetLgAmount">120 $</td>
                    <td className="widgetLgStatus">
                        <button className="widgetLgButtonApproved">Approved</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}
 
export default WidgetLg;