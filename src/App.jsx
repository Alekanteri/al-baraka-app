import React from "react";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main.jsx";
import Work from "./components/Work/Work";
import css from "./styles/App.module.scss";
import Calculator from "./components/Calculator/Calculator.jsx";
import GoogleMap from "./components/GoogleMap/GoogleMap.jsx";
import Available from "./components/Available/Available.jsx";
import Spline from "./components/Spline/Spline.jsx";
import ThreeBlock from "./components/ThreeBlock/ThreeBlock.jsx";
import Partners from "./components/Partners/Partners.jsx";
import Popular from "./components/Popular/Popular.jsx";
import HowWork from "./components/HowWork/HowWork.jsx";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Main />
      <ThreeBlock />
      <Experties />
      <Popular />
      <Calculator />
      <Available />
      <HowWork />
      <Work />
      <Partners />
      <Spline />
      <GoogleMap />
      <Footer />
    </div>
  );
};

export default App;
