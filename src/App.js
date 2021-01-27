import React, { Component } from 'react';
import Header from './components/common/Header';
import { HashRouter, Route } from 'react-router-dom';
import Recent from './components/routes/Recent';
import HashTrend from './components/routes/HashTrend';
import DetailPage from './components/routes/DetailPage';
import './css/common.css';
import './css/reset.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <HashRouter>
                    <Header />
                    <div className="main">
                        <Route path="/" exact={true} render={ props => <HashTrend onUpdate={this.getCurrentRouter} {...props} />} />
                        <Route path="/main" render={ props => <HashTrend onUpdate={this.getCurrentRouter} {...props} />} />
                        <Route path="/recent" component={Recent}/>   
                        <Route path="/detail/:id" component={DetailPage}/>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default App;