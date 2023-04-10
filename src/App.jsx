import React from 'react';
import './App.css';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import resumeData from './resumeData';

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData}/>
      <Resume resumeData={resumeData}/>
      <Portfolio resumeData={resumeData}/>
      <ContactUs resumeData={resumeData}/>
    </div>
  );
}

export default App;
