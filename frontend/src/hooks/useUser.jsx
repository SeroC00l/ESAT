import { useCallback, useContext } from "react";
import { Context } from "../context/UserContext";

function useUser() {
  const { jwt, setJWT, setError, setShowErrorModal } = useContext(Context);

  const handleLoginResponse = (data) => {
    console.log(data.message);

    if (data.message === "ok") {
      setJWT(data.token);
    } else {
      setError(data.error);
      setShowErrorModal(true);
    }
  };

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