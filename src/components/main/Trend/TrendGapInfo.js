import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// 트렌드 - 증가량 컴포넌트
class TrendGapInfo extends Component {
    static defaultProps = {
        day1:[],
        day7:[],
        day30:[],
    }

    render() {
        const {day1, day7, day30} = this.props;

        return (
            <div className="trendInfo hashList">
                {/* 최근 1 일 사이 */}
                <div className="hashItem">
                    <span className="hashDay">
                        <i className="fas fa-database"></i> 최근_1일_사이
                    </span>
                    <ul>
                        { day1.map((data,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={{
                                        pathname:`/detail/${data.hashtag}`,
                                        state:{
                                            hashname:data.hashtag,
                                        }
                                    }}>
                                        <strong># { data.hashtag }</strong>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/* 최근 7 일 사이 */}
                <div className="hashItem">
                    <span className="hashDay"><i className="fas fa-database"></i> 최근_7일_사이</span>
                    <ul>
                        { day7.map((data,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={{
                                        pathname:`/detail/${data.hashtag}`,
                                        state:{
                                            hashname:data.hashtag,
                                        }
                                    }}>
                                        <strong># { data.hashtag }</strong>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/* 최근 30 일 사이 */}
                <div className="hashItem">
                    <span className="hashDay"> <i className="fas fa-database"></i> 최근_30일_사이</span>
                    <ul>
                        { day30.map((data,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={{
                                        pathname:`/detail/${data.hashtag}`,
                                        state:{
                                            hashname:data.hashtag,
                                        }
                                    }}>
                                        <strong># { data.hashtag }</strong>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TrendGapInfo;