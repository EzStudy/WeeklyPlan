import React from "react";
import DailyPlan from "./DailyPlan";

import "./WeeklyPlanBody.css";

function WeeklyPlanBody(){
    return(
        <div className="WeeklyPlanBody">
            <DailyPlan day="일요일"/>
            <DailyPlan day="월요일"/>
            <DailyPlan day="화요일"/>
            <DailyPlan day="수요일"/>
            <DailyPlan day="목요일"/>
            <DailyPlan day="금요일"/>
            <DailyPlan day="토요일"/>
        </div>
    )
}

export default WeeklyPlanBody;