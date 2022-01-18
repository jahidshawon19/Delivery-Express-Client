
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
import AllUsers from './Components/Admin/AllUsers/AllUsers';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import AdminRoute from './Components/AdminRoute/AdminRoute';
import AddService from './Components/Admin/AddService/AddService';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import AllBookings from './Components/Admin/AllBookings/AllBookings';
import BookingDetails from './Components/Admin/BookingDetails/BookingDetails';
import AllService from './Components/Admin/AllService/AllService';


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

          <PrivateRoute path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>

          <PrivateRoute path = "/booking">
            <Booking></Booking>
          </PrivateRoute>


          <PrivateRoute path= "/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <AdminRoute path="/allusers">
            <AllUsers></AllUsers>
          </AdminRoute>

          <AdminRoute path="/allbookings">
            <AllBookings></AllBookings>
          </AdminRoute>
          <AdminRoute path="/booking_details/:bookingId">
              <BookingDetails></BookingDetails>
          </AdminRoute>

          <AdminRoute path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </AdminRoute>

          <AdminRoute path="/addservice">
            <AddService></AddService>
          </AdminRoute>

          <AdminRoute path="/allservices">
            <AllService></AllService>
          </AdminRoute>

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
