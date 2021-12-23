import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector'


class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
  
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
 
   return (
      <div>
        <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route  path='/shop' element={<ShopPage/>} />
          <Route  exact path='/checkout' element={<CheckoutPage/>} />
          <Route  exact path='/signin' element={ this.props.currentUser ? (<SignInAndSignUpPage/>
            ) : (
              <SignInAndSignUpPage/>
           )
          }
        />
        <Route path="shop/*" element={<ShopPage />} />
        </Routes>
      </div>
     )
   };
}

const mapStateToProps = createStructuredSelector => ({
  currentUser: setCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
