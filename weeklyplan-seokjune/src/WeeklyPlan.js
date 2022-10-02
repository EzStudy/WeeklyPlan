import React from "react";
import WeeklyPlanBody from "./WeeklyPlanBody.js";
import WeeklyPlanHeader from  "./WeeklyPlanHeader";

import { db } from "./Firebase.js";
// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import { collection, getDocs } from "firebase/firestore";

async function dbtest() {
    const querySnapshot = await getDocs(collection(db, "test"));
    querySnapshot.forEach((doc) => {
        console.log('1111');
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data().react_count)
        // console.log(`${doc.id}`);
        
    });
};

function WeeklyPlan(){

    console.log('3333333333');
    dbtest();

    return(
        <div className="WeeklyPlan md:container md:mx-auto ">
                <WeeklyPlanHeader />
                <WeeklyPlanBody />
        </div>
    );
}

export default WeeklyPlan;