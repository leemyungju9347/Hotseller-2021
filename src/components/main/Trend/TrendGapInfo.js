import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class TrendGapInfo extends Component {
    static defaultProps = {
        day1:[],
        day7:[],
        day30:[],
    }

    state = {
        position:'trend'
    }

    render() {
        const {day1, day7, day30} = this.props;
        const {position} = this.state

        return (
            <div className="trendInfo hashList">
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
                                            data,
                                            position,
                                        }
                                    }}>
                                        <strong># { data.hashtag }</strong>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="hashItem">
                    <span className="hashDay"><i className="fas fa-database"></i> 최근_7일_사이</span>
                    <ul>
                        { day7.map((data,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={{
                                        pathname:`/detail/${data.hashtag}`,
                                        state:{
                                            data,
                                            position
                                        }
                                    }}>
                                        <strong># { data.hashtag }</strong>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="hashItem">
                    <span className="hashDay"> <i className="fas fa-database"></i> 최근_30일_사이</span>
                    <ul>
                        { day30.map((data,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={{
                                        pathname:`/detail/${data.hashtag}`,
                                        state:{
                                            data,
                                            position
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