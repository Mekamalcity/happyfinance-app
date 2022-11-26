import React from "react";
import { Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/landingpage/LandingPage";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signup/SignUp";
import User from "./pages/user/User";
import { Provider } from "react-redux";
import {store} from './config/redux';


class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </Provider>
    );
  }

}

export default App;
