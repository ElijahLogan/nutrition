import React , {useState,Fragment} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className= "picker">
      <DatePicker startOpen ='True' selected={startDate} onChange={date => setStartDate(date)} />
      </div>
    );
  };

  export default Calendar;