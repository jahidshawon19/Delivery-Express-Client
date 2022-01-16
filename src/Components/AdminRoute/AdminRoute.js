import React from 'react';
import {Route, Redirect} from "react-router-dom";
import useAuth from './../../hooks/useAuth'

const AdminRoute = ({ children, ...rest }) => {
    const {user, loading, admin} = useAuth()
    if(loading) {  return <div className="spinner-border" role="status"></div>}
    return (
<Route
      {...rest}
      render={({ location }) =>
         user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;