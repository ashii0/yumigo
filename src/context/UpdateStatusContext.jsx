import { createContext } from "react";

const UpdateStatusContext = createContext();

function UpdateStatusProvider({ children }) {
  return (
    <UpdateStatusContext.Provider>{children}</UpdateStatusContext.Provider>
  );
}

export default UpdateStatusProvider;
