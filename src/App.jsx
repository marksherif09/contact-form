import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <div className="pt-5 text-center">
        <h1>Task2 Contact Form</h1>
        <Form
          setName={setName}
          setEmail={setEmail}
          setSubject={setSubject}
          setMessage={setMessage}
          setShowModal={setShowModal}
          name={name}
          email={email}
          subject={subject}
          message={message}
        />
        {showModal && (
          <Modal
            name={name}
            email={email}
            subject={subject}
            message={message}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
}

function Form({
  setName,
  setEmail,
  setSubject,
  setMessage,
  setShowModal,
  name,
  email,
  subject,
  message,
}) {
  return (
    <div className="container pt-5 mt-5 form">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="mb-4">
              <label className="form-label">Full Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Message</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="btn btn-outline-info text-light px-5 fw-bold"
                onClick={(e) => {
                  e.preventDefault();
                  if (!name || !email || !subject || !message)
                    return <>{alert("Please fill all the fields")}</>;
                  setShowModal(true);
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Modal({ name, email, subject, message, setShowModal }) {
  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center">Form Submission Details</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setShowModal(false)}
            ></button>
          </div>
          <div className="modal-body">
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Subject:</strong> {subject}
            </p>
            <p>
              <strong>Message:</strong> {message}
            </p>

            <em>Thank you!</em>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
