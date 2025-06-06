import React from "react";

export default function HeroBanner() {
    return (
        <section className="bg-blue-100 text-center py-12">
            <h1 className="text-3xl font-bold mb-2">🔥 Big Summer Sale is Here!</h1>
            <p className="text-gray-700 mb-4">Up to 50% off on selected items</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Shop Now
            </button> {/* 💬 Call to action button */}
        </section>
    );
}

// 💡 Could include background image or animation to enhance visual appeal.
