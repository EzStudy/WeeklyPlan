import SchedulerHeader from './component/SchedulerHeader';
import React from "react";
import DailyPlanBoxHeader from "./component/DailyPlanBoxHeader";

function App() {

  return (
    <div className="App">
      <header className="flex justify-center items-center">
        <SchedulerHeader />
      </header>
        <div>
            <DailyPlanBoxHeader/>
        </div>
    </div>
  );
}

export default App;
