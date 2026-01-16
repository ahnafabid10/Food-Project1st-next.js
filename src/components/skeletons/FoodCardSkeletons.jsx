const FoodCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden bg-white shadow-md animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-300" />

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-5 bg-gray-300 rounded w-1/4" />

        <div className="flex gap-3 pt-3">
          <div className="flex-1 h-9 bg-gray-300 rounded-lg" />
          <div className="flex-1 h-9 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
