import React from "react";

export default function CallToAction() {
    return (
        <section className="bg-yellow-100 text-center py-8 px-4">
            <h3 className="text-xl font-bold mb-2">Subscribe & Get 10% Off!</h3>
            <p className="text-gray-700 mb-4">Join our newsletter for exclusive deals</p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
                <input type="email" placeholder="Enter your email"
                    className="border p-2 rounded w-full sm:w-auto" />
                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Subscribe
                </button>
            </div>
        </section>
    );
}

// 💡 Consider integrating with an actual email service (e.g., Mailchimp or backend API).
