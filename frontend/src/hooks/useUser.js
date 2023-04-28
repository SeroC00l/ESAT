import { useCallback, useContext, useState, useEffect } from "react";
import { Context } from "../context/UserContext";
function useUser() {
  const API_URL = "http://192.168.77.10:3000";
  // getting data from the context
  const {
    jwt,
    setJWT,
    setError,
    setShowErrorModal,
    setUserName,
    setArea,
    setRol,
    setSupervisor,
    setLoggedIn,
  } = useContext(Context);
  // function to handle the response from the backend
  const handleLoginResponse = useCallback(
    (data) => {
      if (!data) {
        setError("Connection Error");
        setShowErrorModal(true);
        return;
      }
      const { message, token, name, error, area, rol, supervisor } = data;
      if (message === "ok" && token) {
        setJWT(token);
        setUserName(name);
        setArea(area);
        setRol(rol);
        setSupervisor(supervisor);
        setLoggedIn(true);
      } else if (message === "no user found") {
        setError("Invalid Mail");
        setShowErrorModal(true);
      } else if (message === "invalid password") {
        setError("Invalid password");
        setShowErrorModal(true);
      } else {
        setError(error || "Hubo un error al intentar iniciar sesión.");
        setShowErrorModal(true);
      }
    },
    [setJWT, setError, setShowErrorModal, setUserName]
  );
// function to get let the user logged in
  const login = useCallback(
    (email, password) => {
      fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then(handleLoginResponse)
        .catch((err) => console.error(err));
    },
    [setJWT, setError, setShowErrorModal]
  );
// function to let the user logged out
  const logout = useCallback(() => {
    setJWT(null);
  }, [setJWT]);
  return {
    isLogged: Boolean(jwt),
    login,
    logout,
  };
}
export { useUser };
