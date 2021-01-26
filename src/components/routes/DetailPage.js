import React, { Component } from 'react';
import PageNotFound from '../common/PageNotFound';
import DetailInfoList from '../main/Detail/DetailInfoList';
import { fetchHashInfo } from '../../api/api'

class detailPage extends Component {
    state = {
        hashInfoData : []
    }

    async componentDidMount() {
        const {location,history} = this.props;

        if( location.state === undefined || location.state.hashname === undefined ) {
            history.push('/')
        }

        

        console.log(location);
        
        const data = await fetchHashInfo(location.state.hashname);
        this.setState({
            hashInfoData:data
        })
       
    }

    render() {
        const {location} = this.props;
        const {hashInfoData} = this.state
        console.log('인포데이터확인',this.state.hashInfoData);

        console.log('디테일의 로케이션 확인 🚀',location);

        if( location.state ) {
            if( hashInfoData ) {
                return (
                    <div className="detailPage">
                        <DetailInfoList hashInfoData={hashInfoData} />
                    </div>
                )
            }else return <PageNotFound/>

        }else return null
        

    }
}

export default detailPage;