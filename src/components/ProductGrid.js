import React from "react";

const products = [
    { id: 1, name: "Product 1", price: "$19.99" },
    { id: 2, name: "Product 2", price: "$24.99" },
    { id: 3, name: "Product 3", price: "$14.99" },
    { id: 4, name: "Product 4", price: "$39.99" },
    { id: 5, name: "Product 5", price: "$29.99" },
    { id: 6, name: "Product 6", price: "$9.99" },
];

export default function ProductGrid() {
    return (
        <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
                        <div className="bg-gray-100 h-40 mb-2"></div>
                        <h3 className="text-lg font-medium">{product.name}</h3>
                        <p className="text-blue-600">{product.price}</p>
                        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

// 💡 Future Enhancements:

//     Add real product images

//     Load data from props or API

//     Extract product card to its own component (ProductCard.js)

