import React, { Component } from 'react';

class SelectBox extends Component {
    input = React.createRef();

    state = {
        selectList : [
            {
                name: '증가량',
                value:'gap'
            },
            {
                name: '증가율',
                value:'rate'
            }
        ]
    }

    componentDidMount() {
        const inputElm = document.querySelectorAll('input');
        for(let i = 0; i < inputElm.length; i++){
            if( inputElm[i].value === this.props.selected ) {
                inputElm[i].checked = true
            }
        }
    }


    selectClick = (e) => {

        if( e.target.tagName !== 'SPAN' ) return;

        const input = e.target.parentNode.previousElementSibling;
        const { onUpdate } = this.props

        if( input.checked === false ) {
            input.checked = true
        }else {
            input.checked = false
        }

        onUpdate(input.value)


    }


    render() {
        return (
            <div className="selectBox">
                <span>* 기준</span>
                <div className="selectList">
                    { this.state.selectList.map((list,index)=> {
                        return (
                            <div className={list.value} key={index}>
                                <input type="radio" name="select" value={list.value}/>
                                <label onClick={this.selectClick}>
                                    <span>
                                        <i className="fas fa-check"></i>
                                        {list.name}
                                    </span>
                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default SelectBox;