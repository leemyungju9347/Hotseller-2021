import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {
    trendLiElm = React.createRef();
    recentLiElm = React.createRef();

    // gnbList클릭시 클래스네임 컨트롤
    gnbClick = (e) => {
        if( e.target.tagName !== 'A' ) return;

        const liElm = e.target.parentNode;

        this.removeLisClassName(); // 엘리먼트의 있는 클래스네임 전체삭제

        liElm.classList.add('on');

    }

    componentDidMount() {
        const location = window.location.hash;

        // 첫 로드시 현재 위치가 main라면 
        if( location === '#/main' ||  location === '#/' ) {
            this.trendLiElm.current.classList.add('on')

        // 첫 로드시 현재 위치가 recent라면 
        }else if ( location === '#/recent' ) {
            this.recentLiElm.current.classList.add('on')
        }
    }
    
    // 엘리먼트 클래스 리스트 전체 삭제
    removeLisClassName = () => {
        this.trendLiElm.current.classList.remove('on')
        this.recentLiElm.current.classList.remove('on')
    }


    render() {
        return (
            <header>
                <h1>Hashtag</h1>
                <span>데이터 분석</span>
                {/* gnb menu */}
                <ul className="gnbMenu">
                    <li onClick={this.gnbClick} ref={this.trendLiElm}>
                        <Link to="/main">
                            <span>#</span>해시_트렌드
                        </Link>
                    </li>
                    <li onClick={this.gnbClick} ref={this.recentLiElm}>
                        <Link to="/recent">
                            <span>#</span>새로운_해시_분석
                        </Link>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;