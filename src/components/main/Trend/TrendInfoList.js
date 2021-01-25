import React, { Component,Fragment } from 'react';
import TrendGapInfo from './TrendGapInfo';
import TrendRateInfo from './TrendRateInfo';

class TrendList extends Component {
    static defaultProps = {
        hashData:[],
        selected:'',
    }

    render() {
        const {hashData,selected} = this.props;
        return (
            <div className="trendInfoList hashListWrap">
                {
                    selected === 'gap' ? (
                        <Fragment>
                            <TrendGapInfo 
                                day1={hashData.day1_gap} 
                                day7={hashData.day7_gap}
                                day30={hashData.day30_gap}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <TrendRateInfo 
                                day1={hashData.day1_rate} 
                                day7={hashData.day7_rate}
                                day30={hashData.day30_rate}
                            />
                        </Fragment>
                    )
                }
            </div>
        );
    }
}

export default TrendList;