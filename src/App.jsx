
import './App.css'
import Cards from './Components/Cards'
import CounterSection from './Components/CounterSection'
import CreatingAccounts from './Components/CreatingAccounts'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import Workflow from './Components/Workflow'

const getData = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const dataPromise = getData()

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <CounterSection/>
      <Cards dataPromise={dataPromise}/>
      <CreatingAccounts/>
      <Pricing/>
      <Workflow/>
      <Footer/>
    </>
  )
}

export default App
