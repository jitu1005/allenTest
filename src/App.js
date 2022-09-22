import "./App.css";
import AboutUs from "./Component/AboutUs";
import Navigation from "./Component/Navigation";
import LandingPage from "./Component/LandingPage";
import LoginPage from "./Component/LoginPage";
import SignUp from "./Component/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navigation title="Home" about="About Us" career="Careers" />

        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
           <Route exact path="/aboutus" element={<AboutUs />}></Route>
           <Route exact path= "/loginpage" element={<LoginPage/>}></Route>
           <Route exact path= "/signupPage" element={<SignUp/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
