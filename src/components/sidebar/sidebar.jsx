import React from 'react';
import { Home , TrendingUp , Timeline , Report , AttachMoney , PermIdentity , MailOutline , ChatBubbleOutline , Feedback , Shop , Airplay , Equalizer} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrraper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link className='link' to='/home'>
                            <li className="sidebarListItem">
                                <Home className='sidebarIcon'/>
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon'/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link className='link' to='/users'>
                        <li className="sidebarListItem">
                            <PermIdentity className='sidebarIcon'/>
                            User
                        </li>
                        </Link>
                        <Link className='link' to='/products'>
                            <li className="sidebarListItem">
                                <Shop className='sidebarIcon'/>
                                Products
                            </li>
                        </Link>
                        
                        <li className="sidebarListItem">
                            <AttachMoney className='sidebarIcon'/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <Equalizer className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className='sidebarIcon'/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className='sidebarIcon'/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className='sidebarIcon'/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Airplay className='sidebarIcon'/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
