import Link from "next/link";

const FoodCard = ({ food }) => {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition">
      {/* Image */}
      <img
        src={food.foodImg}
        alt={food.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">
          {food.title}
        </h3>

        <p className="text-sm text-gray-500">
          Category: {food.category}
        </p>

        <p className="text-base font-bold text-green-600">
          ৳ {food.price}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <Link href={`/foods/${food.id}`} className="flex-1 bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition">
            View Details
          </Link>

          <button className="flex-1 bg-gray-100 text-gray-800 text-sm py-2 rounded-lg hover:bg-gray-200 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
