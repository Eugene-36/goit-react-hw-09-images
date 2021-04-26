import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import s from "../Modal/Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener("keydown", closeModal);

    return function cleanup() {
      window.removeEventListener("keydown", closeModal);
    };
  });
  const closeModal = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const closeModalClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={closeModalClick}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot
  );
}

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.closeModal);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.closeModal);
//   }
//   closeModal = (e) => {
//     if (e.code === "Escape") {
//       this.props.onClose();
//     }
//   };

//   closeModalClick = (event) => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className={s.overlay} onClick={this.closeModalClick}>
//         <div className={s.modal}>{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }
