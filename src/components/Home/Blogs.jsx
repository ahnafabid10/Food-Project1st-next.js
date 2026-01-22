import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Top 10 Street Foods You Must Try",
    description:
      "Explore the most loved street foods that every foodie should taste at least once.",
    image: "https://images.unsplash.com/photo-1604908177522-429a0b9e6c8b",
    date: "Jan 12, 2026",
  },
  {
    id: 2,
    title: "Healthy Eating Tips for Busy People",
    description:
      "Easy and practical healthy food habits you can follow even with a tight schedule.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    date: "Jan 10, 2026",
  },
  {
    id: 3,
    title: "Why Online Food Ordering Is the Future",
    description:
      "Discover how platforms like FoodHub are reshaping modern dining and convenience.",
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589",
    date: "Jan 08, 2026",
  },
  {
    id: 4,
    title: "Best Foods to Boost Your Energy",
    description:
      "These energy-boosting foods help you stay active and productive all day long.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    date: "Jan 05, 2026",
  },
];

const BlogsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Blogs</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Food tips, stories & updates from FoodHub
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-5">
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>

              <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                {blog.description}
              </p>

              {/* Button always at bottom */}
              <button
                href={`/blogs/${blog.id}`}
                className="mt-auto inline-block text-left text-orange-500 hover:text-orange-600 font-medium hover:underline"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
