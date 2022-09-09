import React, {useState} from "react";

function DailyPlan({day, ymd}){
    const [days, setDays] = useState(['일','월','화','수','목','금','토','일'])
    return(
        <div className="DaliyPlan mr-3 mb-3 border-solid border-2 hover:border-dotted w-4/5 md:w-1/5" >
            <div className="DailyPlanHeader">
                {days[day]}요일 {ymd}
            </div>
            <div className="DailyPlanBody h-52 md:h-64">
                오늘의 일정입니다.
            </div>
        </div>
    )
}

export default DailyPlan;