import { createContext, useState, useEffect } from "react";
import myApi from "../service/service";
export const AuthContext = createContext();

function AuthContextWrapper(props) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function storeToken(receivedToken) {
    localStorage.setItem("token", receivedToken);
    setToken(receivedToken);
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  function removeToken() {
    localStorage.removeItem("token");
  }

  async function authenticateUser() {
    try {
      const currentToken = getToken();
      setToken(currentToken);
      if (!currentToken) {
        setUser(null);
        setIsLoading(false);
        return;
      }
      console.log(currentToken);
      const response = await myApi.get("/auth/verify", {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      });

      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setUser(null);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    authenticateUser();
  }, []);

  // useEffect(authenticateUser, [])

  return (
    <AuthContext.Provider
      value={{ storeToken, user, authenticateUser, removeToken, isLoading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextWrapper;
