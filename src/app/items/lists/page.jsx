import ProtectedRoute from "@/components/ProtectedRoutes.jsx/ProtectedRoute";

const ItemsListPage = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          Items / Lists
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          This page is protected. Only logged-in users can see it.
        </p>
        {/* Render your list items here */}
      </div>
    </ProtectedRoute>
  );
};

export default ItemsListPage;
