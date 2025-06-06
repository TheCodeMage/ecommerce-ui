import React from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductGrid from "./components/ProductGrid";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      {/* 💬 Main layout wrapper. Sets the font. */}
      <Header />              {/* 💬 Top navigation bar */}
      <HeroBanner />          {/* 💬 Promotional section with call-to-action */}
      <main className="p-4 max-w-6xl mx-auto">
        <ProductGrid />       {/* 💬 Display grid of products */}
      </main>
      <CallToAction />        {/* 💬 Email subscription promo */}
      <Footer />              {/* 💬 Bottom site information */}
    </div>
  );
}

export default App;
