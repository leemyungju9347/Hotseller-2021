import React, { Component } from 'react';
import TodayDate from '../../common/TodayDate';

class DetailInfoList extends Component {
    static defaultProps = {
        detailData : {},
        day:0,
        hashInfoData:{}
    }

    render() {
        const { hashInfoData } = this.props;

        // console.log('🐱‍🚀',hashInfoData.info.hashtag);

        if( hashInfoData && hashInfoData.info ) {
            return (
                <div className="detailHash trendDetail">
                    <TodayDate/>
                    <h4 className="d-hashtag">{hashInfoData.info.hashtag}</h4><br/>

                    {/* 가장 관련 있는 해시태그 순위  */}
                    <b className="hashListTitle">가장 관련 있는 해시태그 순위</b>
                    <ul className="hashDetailList">
                        {
                            hashInfoData.top_relation.map((list,index) => {
                                return <li key={index}>
                                    <span>
                                        <i>{index + 1}. </i>{list.hashtag}
                                    </span>
                                    <i>posting : {list.post_cnt}</i>
                                </li>
                                
                            })
                        }
                    </ul>
                    {/* 해당 해시태그가 포함된 관련 순위 */}
                    <b className="hashListTitle">해당 해시태그가 포함된 관련 순위</b>
                    <ul className="hashDetailList">
                        {
                            hashInfoData.top_relation.map((list,index)=>{
                                return <li key={index}>
                                    <span><i>{index + 1}. </i>{list.hashtag}</span>
                                    <i>포스팅 : {list.post_cnt}</i>
                                </li>
                                
                            })
                        }
                    </ul>
                    {/* 최근 인기 게시물 목록 */}
                    <b className="hashListTitle">최근 인기 게시물 목록</b>
                    <ul className="hashDetailList popular">
                        {
                            hashInfoData.lately_popular.map((list,index) => {
                                
                                return (
                                <li key={index}>
                                    <b>username : {list.id_data.username}</b>
                                    <span>
                                        <i className="far fa-thumbs-up"></i> 
                                        {list.like_cnt}
                                    </span>
                                    <i>포스팅 : {list.id_data.post_cnt}</i>
                                    {/* {
                                        list.id_data.recent_hashtag_list.map((data,index) =>{
                                            if( data ) {
                                                return <li key={index}># {data.hashtag}</li>
                                            }

                                            return null
                                        })
                                    } */}
                                </li>)
                                
                            })
                        }
                    </ul>
                </div>
            )
        }else {
            return <div>Loading...</div>
        }
           
   
    }
}


export default DetailInfoList;