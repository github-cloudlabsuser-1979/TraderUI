import React from "react";
import "./App.css";
import WelcomePopup from "./components/WelcomePopup";
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <WelcomePopup />
      <header className="App-header">
        <div className="container">
          <h1 className="text-center mt-5 pb-4">
            DevOps/DevSecOps Challenge - Day 2 Hackathon
          </h1>
          <p>
            Welcome to the DevSecOps Mastery with GitHub Hackathon! This event
            is your gateway to mastering DevSecOps practices within a modern
            application environment. We have crafted this hackathon to provide
            you with a robust learning experience, focused on Contoso Traders, a
            hypothetical e-commerce company using a React front-end, .NET
            back-end, and various microservices, container services, AI-powered
            GitHub Actions, undersatnding of Security compliance as code and
            mastering the usage of GitHub Copilot.
          </p>          
        </div>
      </header>
      <AboutUs />
    </>
  );
}

export default App;
