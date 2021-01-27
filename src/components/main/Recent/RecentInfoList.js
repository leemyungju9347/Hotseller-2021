import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// 최근 새로운분석 컴포넌트
class RecentInfoList extends Component {
    static defaultProps = {
        hashData:[],
    }

    render() {
        const { hashData } = this.props; 
        
        return (
            <div className="RecentInfoList">
                <div className="hashList">
                    { hashData.map((data,index)=> {
                        return (
                            <div className="hashItem" key={index}>
                                <Link to={{
                                    pathname:`/detail/${data.hashtag}`,
                                    state:{
                                        hashname:data.hashtag
                                    }
                                }}>
                                    <strong># {data.hashtag}</strong>
                                </Link>
                            </div>
                        )
                    }) }
                </div>
            </div>
        );
    }
}

export default RecentInfoList;