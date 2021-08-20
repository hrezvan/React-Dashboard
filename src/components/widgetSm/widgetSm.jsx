import React from 'react';
import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

const WidgetSm = () => {
    return ( 
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetIMG" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Lisa Kordow</span>
                        <span className="widgetSmJob">Frontend Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetIMG" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Lisa Kordow</span>
                        <span className="widgetSmJob">Frontend Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetIMG" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Lisa Kordow</span>
                        <span className="widgetSmJob">Frontend Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetIMG" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Lisa Kordow</span>
                        <span className="widgetSmJob">Frontend Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://icon-library.com/images/free-woman-icon/free-woman-icon-4.jpg" alt="widgetIMG" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Lisa Kordow</span>
                        <span className="widgetSmJob">Frontend Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}
 
export default WidgetSm;