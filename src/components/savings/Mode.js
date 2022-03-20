import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { useNavigate } from "react-router-dom";
import { BtnGrey, BtnBlack } from "../../components/buttons/Btns";
import { Calendar } from "react-modern-calendar-datepicker";
const Mode = () => {
  const defaultFrom = {
    year: 2019,
    month: 3,
    day: 4,
  };

  const defaultTo = {
    year: 2019,
    month: 3,
    day: 7,
  };

  const defaultRange = {
    from: defaultFrom,
    to: defaultTo,
  };

  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);

  const navigate = useNavigate();
  return (
    <>
      <div className="content-body">
        <h3>How would you like to save</h3>
        <div className="mode">
          <div className="deduct">
            <p>Your account will be deducted:</p>
            <div>
              <input type="radio" name="deduct" value="Daily" />
              &nbsp;&nbsp;&nbsp;Daily
            </div>
            <div>
              <input type="radio" name="deduct" value="Weekly" />
              &nbsp;&nbsp;&nbsp;Weekly
            </div>
            <div>
              <input type="radio" name="deduct" value="Monthly" />
              &nbsp;&nbsp;&nbsp;Monthly
            </div>
          </div>
          <div className="duration">
            <p>Savings Duration: </p>
            <div>
              <Calendar
                value={selectedDayRange}
                onChange={setSelectedDayRange}
                calendarClassName="custom-calendar"
                shouldHighlightWeekends
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="buttons">
        <BtnGrey onclick={() => navigate(-1)} title={"Back"} />
        <BtnBlack onclick={() => navigate("../addimage")} title={"Next"} />
      </div>
    </>
  );
};

export default Mode;
