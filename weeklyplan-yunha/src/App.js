import SchedulerHeader from './component/SchedulerHeader';
import DailyPlanBox from "./template/DailyPlanBox";
import SelectWeek from "./component/SelectWeek";
import './App.css';
import './index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SchedulerHeader />
      </header>
        {/*<SelectWeek />*/}
        <div className="daily-box">
            <DailyPlanBox />
            <DailyPlanBox />
            <DailyPlanBox />
            <DailyPlanBox />
            <DailyPlanBox />
            <DailyPlanBox />
            <DailyPlanBox />
        </div>
    </div>
  );
}

export default App;
