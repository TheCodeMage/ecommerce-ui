import React from "react";

export default function Header() {
    return (
        <header className="bg-white shadow sticky top-0 z-50">
            {/* 💬 Sticky header with shadow for visibility */}
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                <div className="text-xl font-bold">🛍️ MyShop</div> {/* 💬 Site title / logo */}
                <nav className="space-x-4 text-sm">
                    {/* 💬 Simple navigation links (no routing yet) */}
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Shop</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Cart</a>
                </nav>
            </div>
        </header>
    );
}

// 💡 Future Enhancements:

//     Add React Router (<Link>) for real routing.

//     Add cart icon with item count.

