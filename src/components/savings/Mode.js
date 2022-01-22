import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Mode=()=> {
const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);
    return (
        <div className='mode'>
            <h3>How would you like to save</h3>
            <div className='deduct'>
                <p>Your account will be deducted:</p>
                <div><input type="radio" name="deduct" value="Daily"/>&nbsp;&nbsp;&nbsp;Daily</div>
                <div><input type="radio" name="deduct" value="Weekly"/>&nbsp;&nbsp;&nbsp;Weekly</div>
                <div><input type="radio" name="deduct" value="Monthly"/>&nbsp;&nbsp;&nbsp;Monthly</div>
            </div>
            <div className='duration'>
                <p>Savings Duration: </p>
                <div>
                    <DatePicker
                        className='date'
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="Start Date"
                        isClearable={true}
                    
                    />
                </div>
                <div >
                    <DatePicker
                        className='date '
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        placeholderText="End Date"
                        isClearable={true}
                        
                        
                    />
                </div>  
            </div>
            
        </div>
    )
}

export default Mode
