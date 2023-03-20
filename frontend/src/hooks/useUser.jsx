import { useCallback, useContext } from "react";
import { Context } from "../context/UserContext";

function useUser() {
  const { jwt, setJWT, setError, setShowErrorModal, setUserName, setArea} =
    useContext(Context);

  const handleLoginResponse = useCallback(
    (data) => {
      if (!data) {
        setError("Connection Error");
        setShowErrorModal(true);
        return;
      }
      const { message, token, name, error, area } = data;

      if (message === "ok" && token) {
        setJWT(token);
        setUserName(name);
        setArea(area);
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

  const login = useCallback(
    (email, password) => {
      fetch("http://localhost:3000/auth/login", {
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
