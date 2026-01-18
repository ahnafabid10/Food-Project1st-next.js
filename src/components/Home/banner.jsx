import React from "react";
import Image from "next/image";
import bannerImg from "../../../public/foodhub-banner.jpg";

const Banner = () => {
  return (
    <section className="relative h-[90vh] w-full">
      {/* Background Image */}
      <Image
        src={bannerImg}
        alt="Food Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Delicious Food <br />
              <span className="text-orange-400">Delivered Fast</span>
            </h1>

            <p className="mt-5 text-lg text-gray-200">
              Discover fresh, tasty meals from top restaurants near you.
              Order now and enjoy food at your doorstep.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-7 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white font-semibold">
                Order Now
              </button>

              <button className="px-7 py-3 rounded-lg border border-white hover:bg-white hover:text-black transition font-semibold">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
