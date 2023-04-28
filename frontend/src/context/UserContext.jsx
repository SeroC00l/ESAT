import React, { useState } from "react";

// global context for save the user session and data

const Context = React.createContext({});

function UserContextProvider({ children }) {
  // state for save the user session
  const [jwt, setJWT] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  // state for save the user data
  const [userName, setUserName] = useState("");
  const [area, setArea] = useState("");
  const [rol, setRol] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [jobRelated, setJobRelated] = useState(false);
  const [resing, setResing] = useState(false);
  // state for error handling
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  // state for save the feeling data
  const [inputValue, setInputValue] = useState("");
  const [feelingData, setFeelingData] = useState({
    name: "",
    area: "",
    rol: "",
    supervisor: "",
    emotion: "",
    jobRelated: null,
    resing: null,
    message: "",
  });

  return (
    <Context.Provider
      value={{
        jwt,
        setJWT,
        error,
        setError,
        showErrorModal,
        setShowErrorModal,
        feelingData,
        setFeelingData,
        jobRelated,
        setJobRelated,
        resing,
        setResing,
        inputValue,
        setInputValue,
        userName,
        setUserName,
        area,
        setArea,
        supervisor,
        setSupervisor,
        rol,
        setRol,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { UserContextProvider };

export { Context };
