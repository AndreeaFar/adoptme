import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // useRef to hold the reference to the DOM node
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  // useEffect to mount and unmount the modal
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // clean up function to remove the div on unmount
    return () => modalRoot.removeChild(elRef.current);
  }, []); // effect runs only once, so, empty array

  //createPortal to render children into the separate DOM node
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
