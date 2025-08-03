import './App.css';
import React, { useEffect } from 'react' ;
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import './App.css';
import Footer from './components/footer/Footer';
import Payment from './components/payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/orders/Orders';

const promise = loadStripe('pk_test_51L3nXYSHob9ti035E2pnwJqFKCgvzuGUB27Kft3kiWHJQ5aOXcVhzgYjsEoPlcS6PXKxc9daVEC0l1kCVEUN1CML0045gP0r6X') ;
function App() {

  const [{}, dispatch] = useStateValue() ;

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log ('user is authorised ==> ', authUser) ;
      if(authUser){
        dispatch({
          type: 'set-user',
          user: authUser
        })
      }else {
        dispatch({
          type: 'set-user',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<>
            <Login />
          </>} />
          <Route path='/checkout' element={<>
            <Header />
            <Checkout />
            <Footer />
          </>}/>
          <Route path='/orders' element={<>
              <Header />
              <Orders />
              <Footer />
          </>}/>
          <Route path='/payment' element={<>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements >
            <Footer />
          </>}/>
          <Route path="/" element={<>
            <Header />
            <Home/>
            <Footer />
          </>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
