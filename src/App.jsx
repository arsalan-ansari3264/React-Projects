import React from "react";
import Navbar from "./components/Navigation/Navbar";
import Contact from "./components/ContactHeader/Contact";
import ContactForm from "./components/Contact/ContactForm";
import './index.css'
const App = () => {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <Contact />
        <ContactForm />
      </main>
    </>
  );
};

export default App;
