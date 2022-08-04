import React, {useState} from "react";
import "../index.css";
import DailyPlanBody from "./DailyPlanBody";

export default function DailyPlanBoxHeader() {
// export default function DailyPlanBoxHeader({day: d}) {
    // const [isDay, setDay] = useState(d);

    return(
        <div className="bodyDisplay">
            {
                selectWeek().map( day => (
                    <div>
                        <div className="daily-box-header">{day}</div>
                        <DailyPlanBody/>
                    </div>
                ))
            }

        </div>
    )
}

function selectWeek() {
    var currentDay = new Date();
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