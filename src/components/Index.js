import React, { useEffect, useState } from "react";
import data from "./doctors - doctors.csv";
import * as d3 from "d3";
import Nav from "./Nav";
import DoctorList from "./DoctorList";
import DoctorModal from "./DoctorModal";
import SuccessModal from "./SuccessModal";

const Index = ({}) => {

  const [doctorData, setDoctorData] = useState([]); // hook that stores parsed CSV data
  const [selectedDoctor, setSelectedDoctor] = useState([]); // hook that stores the selected doctor's details
  const [day, setDay] = useState(""); // hook to store the selected day of appointment
  const [time, setTime] = useState(""); // hook to store the selected time of appointment
  const [show, setShow] = useState(false); // hook to control showing of doctor's availibility
  const [showSuccessModal, setShowSuccessModal] = useState(false); // hook to control showing appointment success modal

  useEffect(() => {
    // CSV is parsed and saved in hook upon page load
    d3.csv(data).then((data) => setDoctorData(data));
  }, []);

  return (
    <div>
      <DoctorModal
        show={show}
        setShow={setShow}
        day={day}
        time={time}
        setDay={setDay}
        setTime={setTime}
        selectedDoctor={selectedDoctor}
        setShowSuccessModal={setShowSuccessModal}
      />
      <SuccessModal
        showSuccessModal={showSuccessModal}
        setShowSuccessModal={setShowSuccessModal}
      />
      <Nav />
      <DoctorList
        setShow={setShow}
        setSelectedDoctor={setSelectedDoctor}
        doctorData={doctorData}
      />
    </div>
  );
};

export default Index;
