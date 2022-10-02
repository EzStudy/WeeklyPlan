import SchedulerHeader from './component/SchedulerHeader';
import React from "react";
import SchedulerBody from "./component/SchedulerBody";

function App() {

  return (
    <div className="App">
      <header className="flex justify-center items-center">
        <SchedulerHeader />
      </header>
        <div>
            <SchedulerBody/>
        </div>
    </div>
  );
}

export default App;
