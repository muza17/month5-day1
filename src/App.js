import { Fragment } from "react"
import './App.css';
import {Header} from "./components/Header/header"
import {Intro} from "./components/Intro/intro"
import {Section1} from "./components/Section1/section1"
import {Section2} from "./components/Section2/section2"
import {Section3} from "./components/Section3/section3"
import {Section4} from "./components/Section4/section4"
import {Footer} from "./components/Footer/footer"


function App() {

  return (
    <Fragment>
      <Header/>
      <Intro/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </Fragment>
  );
}

export default App;

