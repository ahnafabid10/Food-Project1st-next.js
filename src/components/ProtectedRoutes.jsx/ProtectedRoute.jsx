import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const cookieStore = cookies();
  const auth = cookieStore.get("auth");

  if (!auth || auth.value !== "true") {
    // Redirect if not authenticated
    redirect("/login");
  }

  return children;
};

export default ProtectedRoute;
