import React from "react";
import { Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/landingpage/LandingPage";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signup/SignUp";
import User from "./pages/user/User";
import { Provider } from "react-redux";
import { store } from './config/redux';
import { connect } from 'react-redux'


class App extends React.Component {
  render() {
    if (this.props.isLogin === false) {
      return (
        <div>
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </main>
        </div>
      )
    }
    return (
        <div>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </div>
    );
  }

}

const reduxState = (state) => ({
  user: state.user,
  isLogin: state.isLogin
})


export default connect(reduxState, null)(App);
