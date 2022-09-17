import GlobalStyles from "./globalStyles";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
        <GlobalStyles/>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/pricing" element={<PricingPage/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
