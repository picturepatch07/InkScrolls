import React from "react";
import { Modal } from "antd";
import "antd/dist/reset.css";

function AuthModal({ isOpen, handleCancel, handleOk }) {
  return (
    <div>
      <Modal open={isOpen} centered onCancel={handleCancel} onOk={handleOk}>
        <div className="modal">
          <p>Testing Modal</p>
        </div>
      </Modal>
    </div>
  );
}

export default AuthModal;
