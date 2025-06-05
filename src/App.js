import React from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductGrid from "./components/ProductGrid";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroBanner />
      <main className="p-4 max-w-6xl mx-auto">
        <ProductGrid />
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
