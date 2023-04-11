import React, { useState } from "react";

const Context = React.createContext({});

function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(null);
  const [area, setArea] = useState("");
  const [rol, setRol] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [jobRelated, setJobRelated] = useState(false);
  const [resing, setResing] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
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
