import './App.css';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import {createContext, useState} from "react";
import NotFound from './components/NotFound/NotFound';
import AddProduct from './components/Admin/AddProduct/AddProduct';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Review from './components/Admin/Review/Review';
import Book from './components/Admin/Book/Book';
import Manage from './components/Admin/Manage/Manage';
import OrderList from './components/Admin/OrderList/OrderList';
import BookingList from './components/Admin/BookingList/BookingList';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/addServices">
            <AddProduct />
          </Route>
          <Route path="/addAdmin">
            <AddAdmin />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <PrivateRoute path="/book">
            <Book />
          </PrivateRoute>
          <Route path="/manage">
            <Manage />
          </Route>
          <Route path="/orderList">
            <OrderList />
          </Route>
          <Route path="/booking">
            <BookingList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
