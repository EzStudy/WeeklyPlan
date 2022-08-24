import React, {useState} from "react";


import "./DailyPlan.css"

function DailyPlan({day, ymd}){
    const [days, setDays] = useState(['일','월','화','수','목','금','토','일'])
    return(
        <div className="DaliyPlan">
            <div className="DailyPlanHeader">
                {days[day]}요일, {ymd}
            </div>
            <div className="DailyPlanBody text-3xl font-bold underline">
                오늘의 일정입니다.
            </div>
        </div>
    )
}

export default DailyPlan;