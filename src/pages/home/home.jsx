import React from 'react';
import Chart from '../../components/chart/chart';
import Featuredinfo from '../../components/featuredinfo/featuredinfo';
import WidgetSm from '../../components/widgetSm/widgetSm';
import WidgetLg from '../../components/widgetLg/widgetLg';
import './home.css';

function Home() {
    return (
        <div className='home'>
            <Featuredinfo />
            <Chart grid />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
