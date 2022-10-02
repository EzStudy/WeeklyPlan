import SchedulerHeader from './component/SchedulerHeader';
import SchedulerBody from "./component/SchedulerBody";
import FirebaseTestComponent from "./component/FirebaseTestComponent";
import {useState} from "react";

function App() {
    const [snap, setSnap] = useState(FirebaseTestComponent());
    console.log('-------');
    console.log(snap);
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
