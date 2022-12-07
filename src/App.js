import React from "react";
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import LandingPage from "./pages/landingpage/LandingPage";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signup/SignUp";
import User from "./pages/user/User";
import NotFound from "./pages/pageNotFound";
import ArticlePage from "./pages/article/articlepage";
import ManagementPage from "./pages/management/ManagemetPage";
import KontakPage from "./pages/kontak/KontakPage";


class App extends React.Component {
  render() {
    if (this.props.isLogin === false) {
      return (
        <div>
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/*" element={<LogIn />} />
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
            <Route path="/*" element={<NotFound />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/app" element={<ManagementPage />} />
            <Route path="/kontak" element={<KontakPage />} />
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
