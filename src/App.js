import React from "react";
import { Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    );
  }

}

export default App;
