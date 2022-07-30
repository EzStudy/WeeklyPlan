import React from "react";

import "./DailyPlan.css"

function DailyPlan({day}){
    return(
        <div className="DaliyPlan">
            <div className="DailyPlanHeader">
                {day}
            </div>
            <div className="DailyPlanBody">
                오늘의 일정입니다.
            </div>
        </div>
    )
}

export default DailyPlan;