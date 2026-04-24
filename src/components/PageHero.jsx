import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative bg-gradient-to-r from-primary to-blue-800 pt-28 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-400/10 rounded-full" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-blue-200 text-sm mb-4">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {subtitle && (
            <p className="text-teal-300 text-sm font-semibold uppercase tracking-widest mb-2">
              {subtitle}
            </p>
          )}
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
