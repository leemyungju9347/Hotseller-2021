import React, { Component } from 'react';

class RecentInfoList extends Component {
    static defaultProps = {
        hashData:[],
        position:'recent'
    }

    render() {
        const { hashData } = this.props; 
        console.log(hashData);
        return (
            <div className="RecentInfoList">
                <div className="hashList">
                    { hashData.map((data,index)=> {
                        return (
                            <div className="hashItem" key={index}>
                                <strong># {data.hashtag}</strong>
                            </div>
                        )
                    }) }
                </div>
            </div>
        );
    }
}

export default RecentInfoList;