import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    trendLiElm = React.createRef();
    recentLiElm = React.createRef();

    gnbClick = (e) => {
        if( e.target.tagName !== 'A' ) return;

        const liElm = e.target.parentNode;

        this.removeLisClassName();

        liElm.classList.add('on');

    }

    componentDidMount() {
        console.log('여기는 헤더의 컴포넌트디드입니다!! 🚀',this.props);
        const location = window.location.hash;

        if( location === '#/main' ||  location === '#/' ) {
            this.trendLiElm.current.classList.add('on')
        }else if ( location === '#/recent' ) {
            this.recentLiElm.current.classList.add('on')
        }
    }

    removeLisClassName = () => {
        this.trendLiElm.current.classList.remove('on')
        this.recentLiElm.current.classList.remove('on')
    }


    render() {
        console.log('여기는 헤더의 렌더입니다!! 😙',this.props);
        return (
            <header>
                <h1>Hashtag</h1>
                <span>데이터 분석</span>
                <ul>
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