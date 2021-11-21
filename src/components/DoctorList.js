import React from "react";
import DoctorCard from "./DoctorCard";
import groupBy from "lodash/groupBy";

const DoctorList = ({ doctorData, setShow, setSelectedDoctor }) => {

  // variable that groups CSV data by doctor's name
  const groupedDoctorData = groupBy(doctorData, (doc) => doc.Name);

  return (
    <div className="d-flex">
      {Object.keys(groupedDoctorData).map((d) => (
        <DoctorCard
          name={d}
          doctorDetails={groupedDoctorData[d]}
          setSelectedDoctor={setSelectedDoctor}
          setShow={setShow}
        />
      ))}
    </div>
  );
};

export default DoctorList;
