import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card p-6"
    >
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center">
          <span className="text-white text-sm font-bold">
            {testimonial.name[0]}
          </span>
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
          <p className="text-gray-400 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
