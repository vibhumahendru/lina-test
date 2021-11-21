import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const DoctorCard = ({ name, doctorDetails, setShow, setSelectedDoctor }) => {

  // function that handles selection of a particular doctor
  const handleSelect = () => {
    setShow(true)
    setSelectedDoctor(doctorDetails)
  };

  return (
    <Card className="m-3" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://media.istockphoto.com/vectors/female-doctor-wearing-a-medical-mask-coronavirus-covid19-prevention-vector-id1209936855?k=20&m=1209936855&s=612x612&w=0&h=BoJW3yInxYT6b8auoZMCfShMfXLaHhrhP5dlMPD25Qs="
      />
      <Card.Body className="lina-theme">
        <Card.Title>Dr. {name}</Card.Title>
        <Button onClick={() => handleSelect()} variant="custom">
          Check Availability
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DoctorCard;

// FFE1DA
