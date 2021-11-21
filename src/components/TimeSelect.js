import React from "react";
import Button from "react-bootstrap/Button";

import { returnTimesInBetween } from "../utils/helpers";

const TimeSelect = ({ selectedDoctor, day, setTime, time }) => {

  // declaring temporary variables
  let startTime;
  let endTime;
  let times = [];
  let timezone;

  // variable that stores details of doctor's availibility on selected day
  let dayObject = selectedDoctor.find((d) => d["Day of Week"] == day);

  // assigning values to declared varaibles based on user's selection
  if (dayObject) {
    startTime = dayObject["Available at"];
    endTime = dayObject["Available until"];
    times = returnTimesInBetween(startTime, endTime);
    timezone = dayObject.Timezone;
    times.pop();
  }

  return (
    <div>
      {day ? (
        <div>
          <hr />
          <h5>Select Time:</h5>
        </div>
      ) : null}
      {day &&
        times.map((t) => (
          <Button
            className="m-1"
            active={time == t ? true : false}
            variant="outline-success"
            onClick={() => setTime(t)}
          >
            {t}
          </Button>
        ))}
      {day && (
        <div className="timezone-text font-small">
          <em>Timezone: {timezone}</em>
        </div>
      )}
    </div>
  );
};

export default TimeSelect;
