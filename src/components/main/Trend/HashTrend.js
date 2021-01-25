import React, { Component } from 'react';
import SelectBox from '../SelectBox';
import hashData from '../../../JSON_files/hashtag_trend.json';
import TrendList from './TrendInfoList';

class Main extends Component {
    state = {
        value : 'gap'
    }

    componentDidMount() {
        const { onUpdate,match } = this.props;

        console.log('트렌드',this.props);

        onUpdate(match.path)
    }

    getSelectData = (selectValue) => {
        this.setState({
            value:selectValue
        })
    }

    render() {
        console.log(this);
        return (
            <div className="hashTrend">
                <SelectBox selected={this.state.value} onUpdate={this.getSelectData}/>
                <TrendList selected={this.state.value} hashData={hashData}/>
            </div>
        );
    }
}

export default Main;