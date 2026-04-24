import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";
import PageHero from "../components/PageHero";
import DoctorCard from "../components/DoctorCard";
import { doctors } from "../data";

export default function Doctors() {
  return (
    <>
      <PageHero
        title="Our Doctors"
        subtitle="Meet The Experts"
        breadcrumbs={[{ label: "Doctors" }]}
      />

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="section-subtitle">Qualified Specialists</p>
          <h2 className="section-title">Expert Care You Can Rely On</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Our team of highly qualified doctors brings years of clinical experience, advanced training, and genuine compassion to every patient interaction. Each specialist is committed to delivering the best possible outcomes for you and your family.
          </p>
        </div>
      </section>

      {/* Doctor Cards */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, i) => (
              <DoctorCard key={doc.id} doctor={doc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">In Detail</p>
            <h2 className="section-title">Doctor Profiles</h2>
          </div>
          <div className="space-y-6">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Avatar */}
                <div className={`w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center text-white font-heading font-bold text-2xl bg-gradient-to-br ${
                  i % 2 === 0 ? "from-primary to-blue-700" : "from-teal-400 to-teal-600"
                }`}>
                  {doc.name.split(" ").slice(1).map(n => n[0]).join("")}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading font-bold text-gray-900 text-xl">{doc.name}</h3>
                      <p className="text-teal-600 font-semibold text-sm mt-0.5">{doc.specialization}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{doc.qualification}</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      {doc.experience} Experience
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mt-3 mb-4">{doc.bio}</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${doc.phone}`}
                      className="flex items-center gap-2 bg-primary text-white text-sm px-4 py-2.5 rounded-full hover:bg-blue-900 transition-colors font-medium"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call: {doc.phone}
                    </a>
                    <Link
                      to="/appointment"
                      className="flex items-center gap-2 border border-primary text-primary text-sm px-4 py-2.5 rounded-full hover:bg-primary hover:text-white transition-colors font-medium"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-white text-3xl mb-3">Ready to See a Specialist?</h2>
          <p className="text-blue-200 text-sm mb-7">Book your appointment today and get expert care from our team.</p>
          <Link to="/appointment" className="bg-white text-primary font-semibold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
