import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import PageHero from "../components/PageHero";
import { services } from "../data";

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive Care"
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Everything You Need</p>
            <h2 className="section-title">Medical Services We Offer</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              From diagnosis to treatment and rehabilitation — we cover all aspects of your health journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = Icons[service.icon] || Icons.Activity;
              const isBlue = service.color === "blue";
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="card p-7 group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
                    isBlue
                      ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                      : "bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isBlue ? 'text-primary' : 'text-teal-500'}`}>
                    Service {service.id.toString().padStart(2, "0")}
                  </div>
                  <h3 className="font-heading font-bold text-gray-900 text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link
                    to="/appointment"
                    className={`text-sm font-semibold flex items-center gap-1.5 transition-colors ${isBlue ? 'text-primary hover:text-blue-800' : 'text-teal-600 hover:text-teal-700'}`}
                  >
                    Book Consultation <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-blue-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2">Need Help Choosing a Service?</h3>
              <p className="text-blue-200 text-sm">Our doctors will guide you to the right care for your needs.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/appointment" className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm whitespace-nowrap">
                Book Appointment
              </Link>
              <a href="tel:7820930018" className="border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm whitespace-nowrap">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
