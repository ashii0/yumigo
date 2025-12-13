import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useOutsideClick from "../hooks/useOutsideClick";

//1
const ModalContext = createContext();

//2
function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

//3
function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  // console.log("openName is:", openName, "name prop is:", name);
  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 w-full h-screen bg-black/40 backdrop-blur-sm z-1000 flex items-center justify-center transition-all-[0.5s]">
      <div
        className="bg-white dark:bg-akcharcoal p-6 rounded-lg shadow-xl relative max-w-lg w-[90%]"
        ref={ref}
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={close}
        >
          <HiXMark />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

//4

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
