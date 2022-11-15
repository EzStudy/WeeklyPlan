import React, {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import DailyPlanBoxBody from "./DailyPlanBoxBody";


export default function SchedulerBoxBody(props) {
    var days = ['일', '월', '화', '수', '목', '금', '토'];

    return(
        <div>
            <div className="flex item-stretch justify-center items-center">
                {
                    selectWeek(props.startDate).map( (day, index) => (
                        <div className="w-48 border-solid border-2 hover:border-dotted">
                            <div className="text-center">
                                {day} <span>(</span> {days[index]} <span>)</span>
                            </div>
                            <DailyPlanBoxBody day={index}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

function selectWeek(startDate) {
    var currentDay = new Date();
    if(startDate != null) {
        currentDay = startDate;
    }
    var theYear = currentDay.getFullYear();
    var theMonth = currentDay.getMonth();
    var theDate  = currentDay.getDate();
    var theDayOfWeek = currentDay.getDay();

    var thisWeek = [];

    for(var i=0; i<7; i++) {
        var resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
        var yyyy = resultDay.getFullYear();
        var mm = Number(resultDay.getMonth()) + 1;
        var dd = resultDay.getDate();

        mm = String(mm).length === 1 ? '0' + mm : mm;
        dd = String(dd).length === 1 ? '0' + dd : dd;

        thisWeek[i] = yyyy + '-' + mm + '-' + dd;
    }

    return thisWeek;
}