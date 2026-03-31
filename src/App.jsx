
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import CartItems from './Components/CartItems'
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
  const [activeTab, setActiveTab] = useState('products');
  console.log(activeTab);



  return (
    <>
      <Navbar />
      <Hero />
      <CounterSection />
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          <div className="inline-flex bg-gray-50 p-2 rounded-full border border-gray-100 mb-16">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all ${activeTab === 'products'
                ? 'bg-[#7F2BFF] text-white shadow-purple-200'
                : 'bg-transparent text-gray-500 hover:text-[#7F2BFF]'
                }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all ${activeTab === 'cart'
                ? 'bg-[#7F2BFF] text-white shadow-purple-200'
                : 'bg-transparent text-gray-500 hover:text-[#7F2BFF]'
                }`}
            >
              Cart (0)
            </button>
          </div>
        </div>

      </section>
      {activeTab === "products" && <Cards dataPromise={dataPromise} />}
      {activeTab === "cart" && <CartItems />}
      <CreatingAccounts />
      <Pricing />
      <Workflow />
      <Footer />
    </>
  )
}

export default App
