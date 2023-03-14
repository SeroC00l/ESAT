import React, { useState } from "react";

const Context = React.createContext({});

function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(null);
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);



  return (
    <Context.Provider value={{ jwt, setJWT, error, setError, showErrorModal, setShowErrorModal }}>{children}</Context.Provider>
  );
}

export { UserContextProvider };

export { Context };
