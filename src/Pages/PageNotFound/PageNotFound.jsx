import { Link } from "react-router";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#e81c2e] to-[#ff6b81] flex flex-col items-center justify-center text-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md"
      >
        <XCircle className="mx-auto w-20 h-20 text-white mb-6 drop-shadow-lg" />
        <h1 className="text-6xl font-extrabold mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-white/90 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-white text-[#e81c2e] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
