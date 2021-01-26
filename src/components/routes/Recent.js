import React, { Component } from 'react';
import {hashData} from '../../api/api';
import RecentInfoList from '../main/Recent/RecentInfoList';

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