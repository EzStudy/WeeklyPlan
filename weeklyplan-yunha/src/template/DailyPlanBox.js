import DailyPlanBoxHeader from "../component/DailyPlanBoxHeader";
import DailyPlanBody from "../component/DailyPlanBody";

function DailyPlanBox() {
    return(
        <div>
            <DailyPlanBoxHeader day="monday"/>
            <DailyPlanBody/>
        </div>
    )
}

export default DailyPlanBox;