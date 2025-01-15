import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { Helmet } from 'react-helmet';  // Add this import
import Header from './components/Headers/Header'
import MainPages from './components/pages/Pages'
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>AslanAi - Digital Solutions & Services</title>
          <meta name="title" content="AslanAi - Digital Solutions & Services" />
          <meta
            name="description"
            content="AslanAi provides expert web development, mobile app development, UI/UX design, Salesforce solutions, and digital marketing services to help businesses thrive in the digital age."
          />
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aslanai.com/" /> {/* Replace with your actual URL */}
          <meta property="og:title" content="AslanAi - Digital Solutions & Services" />
          <meta 
            property="og:description" 
            content="AslanAi provides expert web development, mobile app development, UI/UX design, Salesforce solutions, and digital marketing services to help businesses thrive in the digital age." 
          />
          <meta property="og:image" content="/og-image.jpg" /> {/* Add your OG image */}

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://aslanai.com/" /> {/* Replace with your actual URL */}
          <meta property="twitter:title" content="AslanAi - Digital Solutions & Services" />
          <meta 
            property="twitter:description" 
            content="AslanAi provides expert web development, mobile app development, UI/UX design, Salesforce solutions, and digital marketing services to help businesses thrive in the digital age." 
          />
          <meta property="twitter:image" content="/og-image.jpg" /> {/* Add your OG image */}
        </Helmet>

        <Header />
        <MainPages />
        <Footer />
      </div>
    </Router>
  );
}

export default App;