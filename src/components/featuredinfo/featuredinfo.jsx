import React from 'react';
import { ArrowDownward , ArrowUpward} from '@material-ui/icons';
import './featuredinfo.css';

function Featuredinfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$12.45</span>
                    <span className="featuredMoneyRate">
                        $-11.333
                        <ArrowDownward className='arrowIcon negative' />
                    </span>
                </div>
                <span className='featuredsub'>Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$23.09</span>
                    <span className="featuredMoneyRate">
                        $-1.42
                        <ArrowDownward className='arrowIcon negative'/>
                    </span>
                </div>
                <span className='featuredsub'>Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$52.2</span>
                    <span className="featuredMoneyRate">
                        $6.83
                        <ArrowUpward className='arrowIcon'/>
                    </span>
                </div>
                <span className='featuredsub'>Compared to last month</span>
            </div>
        </div>
    )
}

export default Featuredinfo
