import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import TimeSelect from "./TimeSelect";

const DoctorModal = ({
  show,
  setShow,
  selectedDoctor,
  setDay,
  day,
  setTime,
  time,
  setShowSuccessModal
}) => {

  //function to re-initialise state of selected day and time
  const handleClose = () => {
    setDay("");
    setTime("");
    setShow(false);
  };

  // function triggered when user submits appointment form
  const handleSubmit = () => {
    handleClose()
    setShowSuccessModal(true)
  }


  return (
    <Modal show={show} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>
          Dr. {selectedDoctor.length ? selectedDoctor[0].Name : null}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h5>Select Day:</h5>
          {selectedDoctor.map((d, idx) => (
            <Button
              key={idx}
              className="m-1"
              active={day == d["Day of Week"] ? true : false}
              onClick={() => {
                setDay(d["Day of Week"]);
                setTime("");
              }}
              variant="outline-success"
            >
              {d["Day of Week"]}
            </Button>
          ))}

          <TimeSelect
            day={day}
            time={time}
            setTime={setTime}
            selectedDoctor={selectedDoctor}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button
          disabled={!(day && time)}
          variant="custom"
          onClick={() => handleSubmit()}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DoctorModal;
