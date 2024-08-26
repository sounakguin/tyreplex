// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Componets/Navbar";
import Header from "./Componets/Header";
import Deal from "./Componets/Dealsin";
import Dealsin from "./Componets/Dealsin";
import Dealer from "./Componets/Dealer";
import TyreCard from "./Componets/Tyrecard";
import Payment from "./Componets/Paymentmode"
import Askquestion from "./Componets/Askquestion";
import Footer from "./Componets/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Dealsin />
      <Dealer />
      <TyreCard />
      <Payment/>
      <Askquestion/>
      <Footer/>
      <Routes></Routes>
    </Router>
  );
}

export default App;
