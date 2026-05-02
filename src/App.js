import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Specials from './components/Specials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />

      <main id="main-content">
        <Hero />

        <Specials />

        <BookingForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
