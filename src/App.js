import React from 'react';
import Header from './components/Header-nav';
import HeaderContent from './components/Header-content';
import ContentMap from './components/ContentMap';
import ContentTestimonial from './components/ContentTestimonials';
import FooterContent from './components/FooterContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <Header />
      <HeaderContent />
      <ContentMap />
      <ContentTestimonial />
      <FooterContent />
      <Footer />
    </div>
  );
}

export default App;
