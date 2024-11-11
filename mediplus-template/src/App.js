import React from 'react'
import Header from './components/Header'
import Schedule from './components/Schedule'
import FunFacts from './components/FUn-Facts'
import WhyChoose from './components/why-choose'
import CallAction from './components/Call-action'
import Services from './components/Service'
import Portfolio from './components/Startportfolio'
import PricingTable from './components/PricingTable'
import Blog from './components/Blog-Area'
import Clients from './components/clients'
import Appointment from './components/Appointment'
import Slider from './components/Slider'
import Newsletter from './components/Newsletter'
import Footers from './components/Footer'
import Features from './components/FeautesSection'

const App = () => {
  return (
    <div>
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
  )
}

export default App
