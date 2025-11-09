// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//         <h1 class="text-3xl font-bold underline">
//     Hello world!
//   </h1>
//     </>
//   )
// }

// export default App

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Helmet>
        <title>S A Construction | Trusted Contractor in Warud Region, Maharashtra</title>
        <meta
          name="description"
          content="Professional residential construction services in Amravati. ISO certified contractor with 10+ years experience. Quality materials, transparent pricing, on-time delivery. Get free quote today!"
        />
        <meta
          name="keywords"
          content="construction contractor Amravati, home construction Maharashtra, residential builder Amravati, house construction, renovation services, interior design Amravati"
        />
        <meta property="og:title" content="Build Your Dream Home | Premium Construction Services Amravati" />
        <meta
          property="og:description"
          content="Trusted construction contractor with 200+ completed projects. Specializing in residential construction, renovation, and interior design across Maharashtra."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Helmet>

      <div className="min-h-screen">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <ContactForm />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;




