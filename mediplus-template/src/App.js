import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Schedule from './components/Schedule';
import Slider from './components/Slider';
import Features from './components/FeautesSection';
import FunFacts from './components/FUn-Facts';
import WhyChoose from './components/why-choose';
import CallAction from './components/Call-action';
import Portfolio from './components/Startportfolio';
import Newsletter from './components/Newsletter';
import Appointment from './components/Appointment';
import Clients from './components/clients';
import Blog from './components/Blog-Area';
import Footers from './components/Footer';



function App() {
  return (
    <div className="App">
     <Header/>
     <Slider/>
     <Schedule/>
     <Features/>
     <FunFacts/>
     <WhyChoose/>
     <CallAction/>
     <Portfolio/>
     <Services/>
     <PricingTable/>
     <Blog/>
     <Clients/>
     <Appointment/>
     <Newsletter/>
     <Footers/>
    

    </div>
  );
}

export default App;
