import React, { useState } from "react";

const Context = React.createContext({});

function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(null);
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [jobRelated, setJobRelated] = useState(false);
  const [resing, setResing] = useState(false);
  const [userName, setUserName] = useState("")
  const [inputValue, setInputValue] = useState("");
  const [feelingData, setFeelingData] = useState({
    name: "",
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
        setUserName
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { UserContextProvider };

export { Context };
