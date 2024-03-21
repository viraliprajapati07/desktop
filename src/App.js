import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Influencers from './Components/Influencers';
import About from './Components/About';
import Contact from './Components/Contact';
import Feedback from './Components/Feedback';
import Category from './Components/Category';
import Categorlist from './Components/Categorlist';
import Orderlist from './Components/Orderlist';
import Profileinfo from './Components/Profileinfo';
import Addresses from './Components/Addresses';
import Footer from './Components/Footer';
import Changepassword from './Components/Changepassword';
import Cart from './Components/Cart';
import Registration from './Components/Registration';
import Register from './Components/Register';
import Cartpayment from './Components/Cartpayment';
import Wishlist from './Components/Wishlist';
import Orderview from './Components/Orderview';
import Changename from './Components/Changename';
import Editaddress from './Components/Editaddress';
import Login from './Components/Login';



const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/influencers" element={<Influencers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/categorlist" element={<Categorlist />} />
        <Route path="/orderlist" element={<Orderlist />} />
        <Route path="/profileinfo" element={<Profileinfo />} />
        <Route path='/addresses' element={<Addresses/>}/>
        <Route path='/changepassword' element={<Changepassword/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/category" element={<Category />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/register" element={<Register/>} />
        <Route path='/cartpayment' element={<Cartpayment/>}/>
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/orderview" element={<Orderview />} />
        <Route path='/changename' element={<Changename/>}/>
        <Route path='/editaddress' element={<Editaddress/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
