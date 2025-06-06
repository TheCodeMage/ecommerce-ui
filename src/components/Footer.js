import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between text-sm">
                <div>
                    <p>📞 Contact</p>
                    <p>📱 Social Media</p>
                </div>
                <div>
                    <p>🔒 Privacy Policy</p>
                    <p>🗺️ Sitemap</p>
                </div>
            </div>
        </footer>
    );
}

// 💡 Add links to actual pages, maybe use icons or columns for better layout.
