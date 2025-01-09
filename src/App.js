import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
// import {DataProvider} from './GlobalState'
import Header from './components/Headers/Header'
import MainPages from './components/pages/Pages'
import Footer from './components/Footer/footer';

function App() {
  return (
    // <DataProvider>
    <Router>
    <div className="App">
     <Header />
     <MainPages />
     <Footer />
   </div>
    </Router>
  // </DataProvider>
  );
}

export default App;
