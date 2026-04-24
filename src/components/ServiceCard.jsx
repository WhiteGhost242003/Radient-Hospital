import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function ServiceCard({ service, index }) {
  const Icon = Icons[service.icon] || Icons.Activity;
  const isBlue = service.color === "blue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card p-6 group cursor-default"
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
          isBlue
            ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
            : "bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white"
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-heading font-semibold text-gray-900 mb-2 text-base">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  );
}
