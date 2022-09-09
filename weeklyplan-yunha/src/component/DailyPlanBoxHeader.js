import React, {useState} from "react";
import DailyPlanBody from "./DailyPlanBody";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";


export default function DailyPlanBoxHeader() {
    const [startDate, setStartDate] = useState(new Date());
    var days = ['일', '월', '화', '수', '목', '금', '토'];

    const DatePickerCustomInput = ({ value, onClick }) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             className="w-6 h-6 ml-9 md:ml-16" onClick={onClick} >
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
        </svg>
    );

    return(
        <div>
            <div className="m-5">
                <DatePicker
                    fixedHeight
                    dateFormat="yyyy-MM-dd"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    customInput={<DatePickerCustomInput />}
                    locale={ko}
                />
            </div>

            <div className="flex flex-wrap justify-center items-center">
                {
                    selectWeek(startDate).map( (day, index) => (
                        <div className="mr-5 mb-3 w-4/5 md:w-1/5 border-solid border-2 hover:border-dotted">
                            <div className="text-center">
                                {day} <span>(</span> {days[index]} <span>)</span>
                            </div>
                            <DailyPlanBody day={index}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

function selectWeek(startDate) {
    var currentDay = new Date();
    if(startDate != null) {
        currentDay = startDate;
    }
    var theYear = currentDay.getFullYear();
    var theMonth = currentDay.getMonth();
    var theDate  = currentDay.getDate();
    var theDayOfWeek = currentDay.getDay();

    var thisWeek = [];

    for(var i=0; i<7; i++) {
        var resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
        var yyyy = resultDay.getFullYear();
        var mm = Number(resultDay.getMonth()) + 1;
        var dd = resultDay.getDate();

        mm = String(mm).length === 1 ? '0' + mm : mm;
        dd = String(dd).length === 1 ? '0' + dd : dd;

        thisWeek[i] = yyyy + '-' + mm + '-' + dd;
    }

    return thisWeek;
}