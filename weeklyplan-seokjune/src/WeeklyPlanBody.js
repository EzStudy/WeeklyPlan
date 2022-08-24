import React , { useState } from "react";
import DailyPlan from "./DailyPlan";
import SomeComponent from "./SomeComponent";
import "./WeeklyPlanBody.css";
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';

function WeekDay(startDate){
        var currentDay = startDate;
    
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
        console.log(thisWeek);
        return thisWeek;
    
}

function WeeklyPlanBody(){
   const [startDate, setStartDate] = useState(new Date());
    return(
        <>
        {/* <SomeComponent /> */}
        <DatePicker 
            dateFormat= 'yyyy-MM-dd'
            select={startDate}
            onChange={selectDate => setStartDate(selectDate)}/>
        <div className="WeeklyPlanBody">
            {WeekDay(startDate).map((week, index) =>(
                
                <DailyPlan ymd={week} day={index} />
            ))};
            
        </div>
        </>
    )
}

export default WeeklyPlanBody;