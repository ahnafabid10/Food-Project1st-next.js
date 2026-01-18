import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">FoodHub</h3>
          <p className="text-gray-400 text-sm mb-4">
            FoodHub delivers your favorite meals fast and fresh. Order anytime, anywhere.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-orange-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-orange-500 transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/faq" className="hover:text-orange-500 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-orange-500 transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-orange-500 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-orange-500 transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm mb-2">
            123 Food Street, Dhaka, Bangladesh
          </p>
          <p className="text-gray-400 text-sm mb-2">Email: support@foodhub.com</p>
          <p className="text-gray-400 text-sm">Phone: +880 1234 567890</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} FoodHub. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
