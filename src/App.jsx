import React from "react";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main.jsx";
// import Slider from "./components/Slider/Slider";
import Popular from "./components/Popular/Popular";
import Work from "./components/Work/Work";
import css from "./styles/App.module.scss";
import GoogleMap from "./components/GoogleMap/GoogleMap.jsx";
import Spline from "./components/Spline/Spline.jsx";
import ThreeBlock from "./components/ThreeBlock/ThreeBlock.jsx";
import Calculator from "./components/Calculator/Calculator";
import Available from './components/Available/Available.jsx'
import Partners from "./components/Partners/Partners.jsx";

const App = () => {

  return (
      <div className={`bg-primary ${css.container}`}>
        <Header />
        <Main />
        <ThreeBlock />
        <Experties />
        <Popular />
        <Calculator/>
        <Available/>
        {/* <Partners/> */}
        <Work />
        {/* <Slider /> */}
        <Spline />
        <GoogleMap />
        {/*<Modal />*/}
        <Footer />
      </div>
  );
};

export default App;
