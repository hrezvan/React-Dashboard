import React from 'react';
import { NotificationsNone , Language , Settings } from '@material-ui/icons';
import './navbar.css';

function Navbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>Admin</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREURSKMljVXEm57DuInU5lTToyHcaiYmWnmA&usqp=CAU' alt='' className='topAvatar' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
