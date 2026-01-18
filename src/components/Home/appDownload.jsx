import { FaGooglePlay, FaApple } from "react-icons/fa";
import Image from "next/image";

const DownloadAppSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Download Our App</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Get FoodHub on your mobile device and order your favorite meals anytime!
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 items-center">
        {/* Play Store Card */}
        <div className="flex flex-col items-center rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition p-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
            <FaGooglePlay size={28} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Get it on Play Store</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-center">
            Download FoodHub app for Android and enjoy fast and convenient food delivery.
          </p>
          <a
            href="#"
            className="mt-auto inline-block px-6 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
          >
            Download
          </a>
        </div>

        {/* App Store Card */}
        <div className="flex flex-col items-center rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition p-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
            <FaApple size={28} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Download on App Store</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-center">
            Get the FoodHub app for iOS and enjoy your favorite meals at your fingertips.
          </p>
          <a
            href="#"
            className="mt-auto inline-block px-6 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
