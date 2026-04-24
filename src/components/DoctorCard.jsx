import { motion } from "framer-motion";
import { Phone, Stethoscope } from "lucide-react";

const avatarColors = [
  { bg: "from-blue-500 to-primary", initials: "ND" },
  { bg: "from-teal-400 to-teal-600", initials: "NJ" },
  { bg: "from-pink-400 to-rose-500", initials: "SD" },
  { bg: "from-purple-400 to-indigo-500", initials: "RT" },
];

export default function DoctorCard({ doctor, index }) {
  const color = avatarColors[index % avatarColors.length];
  const initials = doctor.name
    .split(" ")
    .slice(1)
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card overflow-hidden group"
    >
      {/* Avatar */}
      <div className={`bg-gradient-to-br ${color.bg} h-44 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-white rounded-full" />
        </div>
        <div className="relative text-center">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-2 border-2 border-white/40">
            <span className="text-white font-heading font-bold text-2xl">{initials}</span>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
          <Stethoscope className="w-3 h-3 text-white" />
          <span className="text-white text-xs font-medium">{doctor.department}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-gray-900 text-lg">{doctor.name}</h3>
        <p className="text-teal-600 text-xs font-semibold uppercase tracking-wider mt-0.5 mb-1">
          {doctor.specialization}
        </p>
        <p className="text-gray-400 text-xs mb-3">{doctor.qualification}</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{doctor.bio}</p>
        <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 flex-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            {doctor.experience} Experience
          </div>
          <a
            href={`tel:${doctor.phone}`}
            className="flex items-center gap-1.5 bg-primary text-white text-sm px-4 py-2 rounded-full hover:bg-blue-900 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            Call
          </a>
        </div>
      </div>
    </motion.div>
  );
}
