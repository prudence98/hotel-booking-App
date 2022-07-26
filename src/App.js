//import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import Checkout from './pages/checkout';
import Contacts from './pages/contact';
import Booking from './pages/booking';
import Rooms from './pages/rooms';
import HomeB from './pages/homeBook'
import HotelInfo from './pages/hotelInfo';
//import Home from './pages/home';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/home';


function App() {
  return (
    <div className="App">
   
       <Router>
       <Switch>
       <Route exact path= "/"><Home/></Route>
       <Route exact path= "/hotelInfo"><HotelInfo/></Route>
       <Route exact path= "/checkout"><Checkout/></Route>
       <Route exact path= "/homeBook"><HomeB/></Route>
         <Route exact path= "/login"><Login/></Route>
         <Route exact path= "/register"><Register/></Route>
         <Route exact path= "/contact"><Contacts/></Route>
         <Route exact path= "/booking"><Booking/></Route>
         <Route exact path= "/rooms"><Rooms/></Route>
       </Switch>
  </Router>
    </div>
  );
}

export default App;
