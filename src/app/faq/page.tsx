import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <h1>About Us</h1>
        <p>This is the about page content.</p>
      </main>
      <Footer />
    </>
  );
}
