import React from 'react';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/Featurecard';
import rider from "../../assets/rider.png";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e140c] to-black text-white">
      <Navbar />
      <section className="text-center mt-24 px-4">
        <h1 className="text-5xl font-bold text-orange-400 mb-2">SWITO</h1>
        <p className="text-xl text-gray-300 mb-8">Discover restaurants that deliver near you</p>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search for Restaurant"
            className="w-[350px] md:w-[500px] px-5 py-3 rounded-l-full bg-gray-800 text-white focus:outline-none"
          />
          <button className="bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-3 rounded-r-full font-medium">
            Search
          </button>

          
        </div>
        <div className='flex justify-center mb-10'>
          <button className="bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-3 rounded-full font-medium">
            Explore Foods
          </button>

        </div>

        {/* Features */}
        <div className="flex justify-center gap-8 flex-wrap">
          <FeatureCard icon="📦" label="Easy Order" />
          <FeatureCard icon="🚚" label="Fast Delivery" />
        </div>



        {/* Rider Image */}
        <div className="mt-16">
          <img src={rider} alt="rider" className="h-20 mx-28" />
        </div>
      </section>
    </div>
  );
};

export default Home;
