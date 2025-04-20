import React from 'react';
import ReactDOM from 'react-dom/client';
import HeroSection from './components/HeroSection';
import About from './components/About';
import AppointmentForm from './components/AppointmentForm';
import '../sass/app.scss';

function App() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <HeroSection />
      <About />
      <AppointmentForm scrollToTop={scrollToTop} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
