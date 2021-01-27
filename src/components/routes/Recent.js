import React, { Component } from 'react';
import {hashData} from '../../api/api';
import RecentInfoList from '../main/Recent/RecentInfoList';

// 새로운 분석 태그 컴포넌트
class Recent extends Component {
    render() {
        return (
            <div className="recentHash">
                <RecentInfoList hashData={hashData.recent_list}/>
            </div>
        );
    }
}

export default Recent;