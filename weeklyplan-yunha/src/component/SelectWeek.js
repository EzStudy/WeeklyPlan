// import DatePicker from "react-datepicker";
// import '../index.css'
// import {useState} from "react";
//
// export default function SelectWeek() {
//
//     const [selectedYear, setSelectedYear] = useState();
//     const [selectedWeek, setSelectedWeek] = useState();
//     const [focused, setFocused] = useState(false);
//     const [hoveredDays, setHoveredDays] = useState();
//
//     function openPicker() {
//         if (!this.state.focused) {
//             setFocused(true);
//         }
//     };
//
//     function isDayHighlighted(date) {
//         const { hoveredDays } = this.state;
//         let isHighlighted = false;
//         hoveredDays.forEach(hoveredDay => {
//             const isDayOfMonthMatch = hoveredDay.date() === date.date();
//             const isMonthMatch = hoveredDay.month() === date.month();
//             const isYearMatch = hoveredDay.year() === date.year();
//             if (isDayOfMonthMatch && isMonthMatch && isYearMatch) {
//                 isHighlighted = true;
//             }
//         });
//         return isHighlighted;
//     };
//
//     return(
//         // <div class="container">
//         //     <div class="row">
//         //         <div class="col-sm-6 form-group">
//         //             <div class="input-group" id="DateDemo">
//         //                 <input type='text' id='weeklyDatePicker' placeholder="Select Week" />
//         //             </div>
//         //         </div>
//         //     </div>
//         // </div>
//         <DatePicker
//             datefor
//             selected={startDate}
//             onChange={date => setStartDate(date)}
//             customInput={<ExampleCustomInput />}
//         />
//     )
// }