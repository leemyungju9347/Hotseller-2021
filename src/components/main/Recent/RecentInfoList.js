import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecentInfoList extends Component {
    static defaultProps = {
        hashData:[],
    }

    state = {
        position:'recent'
    }

    render() {
        const { hashData } = this.props; 
        const { position } = this.state
        
        return (
            <div className="RecentInfoList">
                <div className="hashList">
                    { hashData.map((data,index)=> {
                        return (
                            <div className="hashItem" key={index}>
                                <Link to={{
                                    pathname:`/detail/${data.hashtag}`,
                                    state:{
                                        hashname:data.hashtag,
                                        position
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