import React, { Component,Fragment } from 'react';
import TrendGapInfo from './TrendGapInfo';
import TrendRateInfo from './TrendRateInfo';


// 트렌드 부분 증가량 / 증가률 상위 컴포넌트
class TrendList extends Component {
    static defaultProps = {
        hashData:[],
        selected:'',
    }


    render() {
        const {hashData,selected} = this.props;
 
        return (
            <div className="trendInfoList hashListWrap">
                {/* 셀렉트 값이 증가량일시 */}
                {
                    selected === 'gap' ? (
                        <Fragment>
                            <TrendGapInfo 
                                day1={hashData.day1_gap} 
                                day7={hashData.day7_gap}
                                day30={hashData.day30_gap}
                            />
                        </Fragment>
                    // 셀렉트 값이 증가율일시
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