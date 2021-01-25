import React, { Component } from 'react';
import Header from './components/common/Header';
import { HashRouter, Route } from 'react-router-dom';
import Recent from './components/main/Recent/Recent';
import HashTrend from './components/main/Trend/HashTrend';
import detailPage from './components/main/detailPage';
import './css/App.css';
import './css/reset.css';


class App extends Component {
    componentDidMount() {
    }

    state = {
        currentLocation:''
    }

    getCurrentRouter = (location) => {
        console.log('앱에서 로케이션 확인',location);
        this.setState({
            currentLocation : location
        })
    }

    render() {
        console.log('APP',this);
        const {currentLocation} = this.state
        return (
            <div className="App">
                <HashRouter>
                    <Header currentLocation={currentLocation} />
                    <div className="main">
                        <Route path="/" exact={true} render={ props => <HashTrend onUpdate={this.getCurrentRouter} {...props} />} />
                        <Route path="/main" render={ props => <HashTrend onUpdate={this.getCurrentRouter} {...props} />} />
                        <Route path="/recent" component={Recent}/>   
                        <Route path="/detail/:id" component={detailPage}/>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default App;