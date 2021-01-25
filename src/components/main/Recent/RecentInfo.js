import React, { Component } from 'react';

class RecentInfo extends Component {
    render() {
        const {data} = this.props;
        return (
            <li>
                <b>{data.hashtag}</b>
            </li>
        );
    }
}

export default RecentInfo;