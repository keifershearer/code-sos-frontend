import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import "./Layout.css";
import { AuthContext } from "../../context/auth.context";

const Layout = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
