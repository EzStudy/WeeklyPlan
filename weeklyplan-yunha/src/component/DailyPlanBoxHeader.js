import React, {useState} from "react";
import "../index.css";

export default function DailyPlanBoxHeader({day: d}) {
    const [isDay, setDay] = useState(d);

    return(
        <div>
            <div className="daily-box-header">{isDay}</div>
        </div>
    )
}