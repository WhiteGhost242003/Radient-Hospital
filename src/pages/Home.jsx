import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone, Calendar, Stethoscope, ArrowRight,
  Shield, Clock, Award, Users, ChevronRight,
  Heart, Activity, Smile, Bone
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import DoctorCard from "../components/DoctorCard";
import TestimonialCard from "../components/TestimonialCard";
import { services, doctors, testimonials } from "../data";

const stats = [
  { label: "Patients Treated", value: "10,000+", icon: Users },
  { label: "Years of Service", value: "5+", icon: Award },
  { label: "Expert Doctors", value: "4", icon: Stethoscope },
  { label: "Services Offered", value: "10+", icon: Shield },
];

const highlights = [
  { icon: Bone, label: "Orthopaedics", desc: "Joint & Spine Care", color: "blue" },
  { icon: Stethoscope, label: "Medicine", desc: "General & Intensive", color: "teal" },
  { icon: Smile, label: "Dental", desc: "Implants & Surgery", color: "blue" },
  { icon: Heart, label: "ECG & X-Ray", desc: "Digital Diagnostics", color: "teal" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/40 overflow-hidden pt-20">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] bg-teal-400/8 rounded-full blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(#0F4C81 1px, transparent 1px), linear-gradient(to right, #0F4C81 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs font-semibold px-4 py-2 rounded-full border border-teal-200 mb-6"
              >
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></span>
                Now Accepting New Patients
              </motion.div>

              <h1 className="font-heading font-bold text-primary leading-tight mb-4">
                <span className="block text-4xl sm:text-5xl lg:text-6xl">Radiant</span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl text-teal-500">Speciality</span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl">Centre</span>
              </h1>

              <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-3">
                Orthopaedic • Medicine • Dental
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                <span className="text-primary font-semibold">Trusted Healthcare for Your Family.</span>{" "}
                Expert specialists, state-of-the-art diagnostics, and compassionate care — all under one roof in Pune.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link to="/appointment" className="btn-primary">
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>
                <a href="tel:7820930018" className="btn-outline">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>

              {/* Timing badge */}
              <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100 w-fit">
                <Clock className="w-4 h-4 text-teal-500" />
                <div>
                  <p className="text-xs text-gray-500">Clinic Hours</p>
                  <p className="text-sm font-semibold text-gray-800">Mon–Sat: 5:00 PM – 9:30 PM</p>
                </div>
              </div>
            </motion.div>

            {/* Right — Visual Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Main card */}
              <div className="bg-gradient-to-br from-primary to-blue-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                <p className="text-teal-300 text-sm font-semibold uppercase tracking-widest mb-3">
                  Our Specialities
                </p>
                <h3 className="text-white font-heading font-bold text-2xl mb-6">
                  Expert Care in Every Department
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {highlights.map(({ icon: Icon, label, desc, color }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/15 transition-colors"
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${color === 'teal' ? 'bg-teal-400/20' : 'bg-blue-300/20'}`}>
                        <Icon className={`w-4 h-4 ${color === 'teal' ? 'text-teal-300' : 'text-blue-200'}`} />
                      </div>
                      <p className="text-white font-semibold text-sm">{label}</p>
                      <p className="text-blue-200 text-xs">{desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {["ND", "NJ", "SD", "RT"].map((init, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-white flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">{init}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/doctors" className="text-teal-300 text-xs font-semibold flex items-center gap-1 hover:text-white transition-colors">
                    Meet Our Doctors <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <Activity className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Patients</p>
                  <p className="text-gray-900 font-bold font-heading text-lg">10,000+</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Experience</p>
                  <p className="text-gray-900 font-bold font-heading text-lg">5+ Years</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ label, value, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-heading font-bold text-primary text-2xl">{value}</p>
                <p className="text-gray-500 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">What We Offer</p>
            <h2 className="section-title">Our Medical Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Comprehensive healthcare services delivered by experienced specialists with compassion and precision.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-subtitle">Why Choose Us</p>
              <h2 className="section-title">Healthcare You Can Trust</h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                At Radiant Speciality Centre, we blend expertise with empathy. Our multi-speciality team ensures every patient receives personalised, evidence-based care in a warm, welcoming environment.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, title: "Expert Specialists", desc: "DNB & MD qualified doctors with extensive clinical experience." },
                  { icon: Activity, title: "Modern Equipment", desc: "Digital X-Ray, ECG, and advanced diagnostic tools in-house." },
                  { icon: Clock, title: "Convenient Evening Hours", desc: "Clinic open 5 PM–9:30 PM, perfect for working families." },
                  { icon: Heart, title: "Patient-First Approach", desc: "We treat every patient with dignity, care, and full attention." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-teal-50 text-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-0.5">{title}</h4>
                      <p className="text-gray-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-teal-50 rounded-3xl p-8"
            >
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: "Mon–Sat Timing", value: "5 PM – 9:30 PM", color: "bg-primary" },
                  { label: "Sunday", value: "By Appointment", color: "bg-teal-500" },
                  { label: "Specialities", value: "3 Departments", color: "bg-teal-500" },
                  { label: "Location", value: "Ambegaon BK", color: "bg-primary" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className={`w-2 h-2 ${color} rounded-full mb-3`}></div>
                    <p className="text-gray-400 text-xs mb-1">{label}</p>
                    <p className="font-heading font-bold text-gray-800 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-primary rounded-2xl p-5 text-white">
                <p className="font-heading font-bold text-lg mb-1">Ready to Book?</p>
                <p className="text-blue-200 text-sm mb-4">Easy online appointment booking — no waiting!</p>
                <Link to="/appointment" className="inline-flex items-center gap-2 bg-white text-primary text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors">
                  <Calendar className="w-4 h-4" /> Book Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Meet The Team</p>
            <h2 className="section-title">Our Expert Doctors</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Highly qualified specialists committed to your wellbeing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, i) => (
              <DoctorCard key={doc.id} doctor={doc} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/doctors" className="btn-outline">
              View All Doctors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Patient Stories</p>
            <h2 className="section-title">What Our Patients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-primary to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-teal-300 text-sm font-semibold uppercase tracking-widest mb-3">Get Started Today</p>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-4">
              Your Health is Our Priority
            </h2>
            <p className="text-blue-200 mb-8 text-sm">
              Book an appointment with our specialists today. Same-day appointments available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/appointment" className="bg-white text-primary font-semibold px-7 py-3.5 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-lg">
                <Calendar className="w-4 h-4" /> Book Appointment
              </Link>
              <a href="tel:7820930018" className="border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call: 7820930018
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
