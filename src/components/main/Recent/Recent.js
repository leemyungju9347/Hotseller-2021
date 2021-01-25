import React, { Component } from 'react';
import hashData from '../../../JSON_files/hashtag_trend.json';
import RecentInfoList from './RecentInfoList';

class Recent extends Component {
    state = {
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="recentHash">
                <RecentInfoList hashData={hashData.recent_list}/>
            </div>
        );
    }
}

export default Recent;