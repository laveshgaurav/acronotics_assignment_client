import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const AuthRoute = ({ element: Component, ...rest }) => {
  //converts object to boolean ->false if null else true//
  const { isLoggedIn } = useSelector((state) => state.staff);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Navigate to="/" />
      }
    />
  );
};

export default React.memo(AuthRoute);
