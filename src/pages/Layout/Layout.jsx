import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import "./Layout.css";
import { AuthContext } from "../../context/auth.context";

const Layout = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
