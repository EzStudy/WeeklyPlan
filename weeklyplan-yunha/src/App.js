import SchedulerHeader from './component/SchedulerHeader';
import './App.css';
import './index.css'
import React from "react";
import DailyPlanBoxHeader from "./component/DailyPlanBoxHeader";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <SchedulerHeader />
      </header>
        <div className="daily-box">
            <DailyPlanBoxHeader/>
        </div>
    </div>
  );
}

export default App;
