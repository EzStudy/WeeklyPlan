import React from "react";
import WeeklyPlanBody from "./WeeklyPlanBody.js";
import WeeklyPlanHeader from  "./WeeklyPlanHeader";

import "./WeeklyPlan.css";

function WeeklyPlan(){

    return(
        <div className="WeeklyPlan">
                <WeeklyPlanHeader />
                <WeeklyPlanBody />
        </div>
    );
}

export default WeeklyPlan;