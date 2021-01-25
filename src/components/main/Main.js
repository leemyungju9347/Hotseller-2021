import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Recent from './components/main/Recent';
import HashTrend from './components/main/HashTrend';

class Main extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact={true} component={HashTrend}/>
                <Route path="/main" component={HashTrend}/>
                <Route path="/recent" component={Recent}/>
            </div>
        );
    }
}

export default Main;