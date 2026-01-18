import Image from "next/image";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Food Lover",
    rating: 5,
    comment:
      "FoodHub makes ordering food super easy. The delivery is always fast and the food tastes amazing!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Regular Customer",
    rating: 4,
    comment:
      "Great variety of food and excellent service. Highly recommended for busy people.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    role: "Chef",
    rating: 5,
    comment:
      "As a chef, I really appreciate the quality and freshness of the food on FoodHub.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const ReviewsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Customers Say
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Real reviews from happy FoodHub customers
        </p>
      </div>

      {/* Review Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition p-6"
          >
            {/* User */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-orange-500 mb-3">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              “{review.comment}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
