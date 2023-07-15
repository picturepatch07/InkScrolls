import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./AuthModal.css";

const AuthModal = ({
  isopen,
  setOpen,
  signInPopup,
  handleCancel,
  handleOk,
}) => {
  return (
    <Modal open={isopen} center onClose={handleCancel}>
      <div className="modal">
        <p>Testing Modal</p>
      </div>
    </Modal>
  );
};

export default AuthModal;
