import React , { useState } from "react";
import DailyPlan from "./DailyPlan";

import "./WeeklyPlanBody.css";

function WeeklyPlanBody(){
    const [days, setDays] = useState(['일','월','화','수','목','금','토']) 
    const currentDay = new Date();
    const theYear = currentDay.getFullYear();   //2022
    const theMonth = currentDay.getMonth(); //8월 => 7, 6월 =>5
    const theDate = currentDay.getDate();   //4일 => 4
    const theDayofWeek = currentDay.getDay();   //일 : 0 월:1 화:2 수:3 목:4 금:5 토:6

    const thisWeek = [];
    for(let i=0; i<7; i++){
        const resultDay = new Date(theYear, theMonth, theDate + (i- theDayofWeek));
        const yyyy = resultDay.getFullYear();
        let mm = Number(resultDay.getMonth()) + 1;
        let dd = resultDay.getDate();

        mm = String(mm).length === 1? '0'+mm : mm;
        dd = String(dd).length === 1? '0'+dd : dd;

        thisWeek[i] = yyyy+'-'+mm+'-'+dd;
    }

    return(
        <div className="WeeklyPlanBody">
            {thisWeek.map((week, index) =>(
                <DailyPlan ymd={week} day={days[index]} />
            ))};
        </div>
    )
}

export default WeeklyPlanBody;