import React from "react";
import WeeklyPlanBody from "./WeeklyPlanBody.js";
import WeeklyPlanHeader from  "./WeeklyPlanHeader";

function WeeklyPlan(){

    return(
        <div className="WeeklyPlan md:container md:mx-auto ">
                <WeeklyPlanHeader />
                <WeeklyPlanBody />
        </div>
    );
}

export default WeeklyPlan;