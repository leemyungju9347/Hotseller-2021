import React, { Component } from 'react';
import PageNotFound from '../common/PageNotFound';
import DetailInfoList from '../main/Detail/DetailInfoList';
import { fetchHashInfo } from '../../api/api'

// 해시태그 선택시 해시태그의 자세한 정보를 볼 수 있는 컴포넌트
class DetailPage extends Component {
    state = {
        hashInfoData : []
    }

    async componentDidMount() {
        const {location,history} = this.props;
        
        // 새로고침시 location에 있는 정보가 undefined면 메인으로 보내준다.
        if( location.state === undefined || location.state.hashname === undefined ) {
            history.push('/')
        }

        // api에 해시태그 정보 보내고 response로 받아오기
        const data = await fetchHashInfo(location.state.hashname);
        this.setState({
            hashInfoData:data
        })
       
    }

    render() {
        const {location} = this.props;
        const {hashInfoData} = this.state;


        // 상세페이지 새로고침시 발생하는 오류로 인한 조건처리
        if( location.state ) {
            // 만약 해당해시태그의 정보가 있으면
            if( hashInfoData ) {
                return (
                    <div className="detailPage">
                        <DetailInfoList hashInfoData={hashInfoData} />
                    </div>
                )
            // 해시태그의 정보가 없으면 PageNotFound 로드
            }else return <PageNotFound/>

        }else return null
        

    }
}

export default DetailPage;