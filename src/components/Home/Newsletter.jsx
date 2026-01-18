"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // TODO: connect with backend / API
    setMessage("Thanks for subscribing to FoodHub 🎉");
    setEmail("");
  };

  return (
    <section className="relative bg-white dark:bg-gray-950 text-black dark:text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl text-black dark:text-white md:text-4xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="mb-8 text-black dark:text-white">
          Get latest food updates, offers & blog posts directly in your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center "
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-96 px-4 py-3 border dark:text-white rounded-xl text-gray-800 focus:outline-none"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition"
          >
            Subscribe <FaPaperPlane />
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-white/90">{message}</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
