import React from 'react';
import {Route, Redirect} from "react-router-dom";
import useAuth from './../../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    const {user, loading} = useAuth()
    if(loading) {  return <div className="spinner-border" role="status"></div>}
    return (
<Route
      {...rest}
      render={({ location }) =>
         user.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;