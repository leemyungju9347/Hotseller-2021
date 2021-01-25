import React, { Component } from 'react';
// import {Link} from 'react-router-dom'

class detailPage extends Component {
    componentDidMount() {
        const {location,history} = this.props;

        if( location.state === undefined ) {
            history.push('/')
        }
    }

    render() {
        const {location} = this.props;
        
        console.log(this);
        console.log(location);
        
        if( location.state ) {
            return ( 
                <div>{location.state.position}</div>
            )

        }else return null
        

        // return (
        //     <div className="detailPage">
        //         😄 여긴 디테일 페이지
        //         {   
        //             if( location.state.position ) {
        //                 location.state.position === 'recent' ? 
        //                 (<div>리센트페이지 🌎</div>) :
        //                 location.state.position === 'trend' ? 
        //                 (<div>트렌드페이지 🏠</div>) :
        //                 null
        //             }else {
        //                 return null
        //             }
                    
        //         }
        //     </div>
        // );
    }
}

export default detailPage;