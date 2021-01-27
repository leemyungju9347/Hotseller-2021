import React, { Component,Fragment } from 'react';

// 오늘의 날짜 컴포넌트
class TodayDate extends Component {

    todayDateFomat = () => {
        const today = new Date();
        const year = today.getFullYear();
        let date = today.getDate();
        date = date < 10 ? `0${date}` : date
        let month = today.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        const todayFullDate = `${year}-${month}-${date}`

        return todayFullDate
    }

    render() {
        return (
            <Fragment>
                <p className="todayDate">{this.todayDateFomat()}</p>
            </Fragment>
        );
    }
}

export default TodayDate;