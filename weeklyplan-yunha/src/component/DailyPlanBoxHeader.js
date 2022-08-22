import React, {useState} from "react";
import "../index.css";
import DailyPlanBody from "./DailyPlanBody";
import DatePicker from "react-datepicker";

export default function DailyPlanBoxHeader() {
    const [startDate, setStartDate] = useState(new Date());

    return(
        <div>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
            />
            <div className="bodyDisplay">
                {
                    selectWeek(startDate).map( day => (
                        <div>
                            <div className="daily-box-header">{day}</div>
                            <DailyPlanBody/>
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