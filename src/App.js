
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom"
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider'
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Admin/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Switch>

          <Route exact path = "/">
          <Home></Home>
          </Route>

          <Route path = "/home">
          <Home></Home>
          </Route>

          <PrivateRoute path = "/booking">
            <Booking></Booking>
          </PrivateRoute>

          <PrivateRoute path= "/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <Route path = "/register">
          <Register></Register>
          </Route>


          <Route path = "/login">
          <Login></Login>
          </Route>

          
          <Route path ="*">
          <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
