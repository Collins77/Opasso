import React from 'react';
import Modal from 'react-modal';
import App from '../../App'; // Replace with the path to your main App component
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

Modal.setAppElement("#root");

const RedirectModal = ({ isOpen, onClose, message }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </Modal>
  );
};

export default RedirectModal;
