import React, { Component } from 'react';
import SelectBox from '../main/Trend/SelectBox';
import TrendList from '../main/Trend/TrendInfoList';
import {hashData} from '../../api/api'

// 해시 트렌드 컴포넌트
class HashTrend extends Component {
    state = {
        value : 'gap'
    }

    // selectBox에서 선택된 체크박스값 가져오기
    getSelectData = (selectValue) => {
        this.setState({
            value:selectValue
        })
    }

    render() {
        return (
            <div className="hashTrend">
                <SelectBox selected={this.state.value} onUpdate={this.getSelectData}/>
                <TrendList selected={this.state.value} hashData={hashData}/>
            </div>
        );
    }
}

export default HashTrend;