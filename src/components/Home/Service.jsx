import { FaUtensils, FaTruck, FaClock, FaStar } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Wide Food Selection",
    description:
      "Choose from a wide range of delicious meals prepared by top restaurants.",
    icon: FaUtensils,
  },
  {
    id: 2,
    title: "Fast Delivery",
    description:
      "Get your favorite food delivered quickly while it’s still hot and fresh.",
    icon: FaTruck,
  },
  {
    id: 3,
    title: "24/7 Service",
    description:
      "Order food anytime, anywhere. We are always available for you.",
    icon: FaClock,
  },
  {
    id: 4,
    title: "Quality & Taste",
    description:
      "We ensure high-quality food and great taste in every order.",
    icon: FaStar,
  },
];

const ServicesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          What makes FoodHub the best choice for food lovers
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Icon size={28} />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
