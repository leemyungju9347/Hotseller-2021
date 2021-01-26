import React, { Component } from 'react';
import SelectBox from '../main/Trend/SelectBox';
import TrendList from '../main/Trend/TrendInfoList';
import {hashData} from '../../api/api'

class HashTrend extends Component {
    state = {
        value : 'gap'
    }

    componentDidMount() {
        const { onUpdate,match } = this.props;

        onUpdate(match.path)
    }

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