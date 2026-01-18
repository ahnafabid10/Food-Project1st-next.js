const Loading = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Image Skeleton */}
        <div className="w-full h-[350px] bg-gray-300 rounded-xl" />

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-8 bg-gray-300 rounded w-3/4" />

          <div className="flex gap-3">
            <div className="h-6 w-24 bg-gray-200 rounded-full" />
            <div className="h-6 w-24 bg-gray-200 rounded-full" />
          </div>

          <div className="h-7 bg-gray-300 rounded w-32" />

          <div className="flex gap-4 pt-4">
            <div className="h-10 w-36 bg-gray-300 rounded-lg" />
            <div className="h-10 w-36 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
