import React from "react";
import GradientHeader from "./components/GradientHeader.js";
import Gradients from "./components/Gradients";
import { gradients } from "./gradients";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <GradientHeader list={gradients}>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientHeader>
      <Gradients />
      <Footer />
    </div>
  );
}

export default App;
