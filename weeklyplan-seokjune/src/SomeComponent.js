import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';

function getOneWeekDay (currentDay) {
    
    const theYear = currentDay.getFullYear();   //2022
    const theMonth = currentDay.getMonth(); //8월 => 7, 6월 =>5
    const theDate = currentDay.getDate();   //4일 => 4
    const theDayofWeek = currentDay.getDay();   //일 : 0 월:1 화:2 수:3 목:4 금:5 토:6

    const thisWeek = [];
    for(let i=0; i<7; i++){
        const resultDay = new Date(theYear, theMonth, theDate + (i- theDayofWeek));
        const yyyy = resultDay.getFullYear();
        let mm = Number(resultDay.getMonth()) + 1;
        let dd = resultDay.getDate();

        mm = String(mm).length === 1? '0'+mm : mm;
        dd = String(dd).length === 1? '0'+dd : dd;

        thisWeek[i] = yyyy+'-'+mm+'-'+dd;
    }

    console.log(thisWeek);
}
function SomeComponent () {
    return (
        <DatePicker 
            dateFormat= 'yyyy-MM-dd'
            onChange={selectDate => getOneWeekDay(selectDate)}/>
    )
}

export default SomeComponent;