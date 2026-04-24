import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Stethoscope, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";

const values = [
  { icon: Heart, title: "Compassion", desc: "Every patient is treated with genuine care, empathy, and dignity." },
  { icon: Award, title: "Excellence", desc: "We uphold the highest clinical standards in every procedure." },
  { icon: Users, title: "Accessibility", desc: "Affordable, quality care that every family can access." },
  { icon: Stethoscope, title: "Integrity", desc: "Honest diagnosis and transparent treatment at every step." },
];

const milestones = [
  { year: "2019", event: "Clinic established in Ambegaon BK, Pune" },
  { year: "2020", event: "Expanded dental and orthopaedic services" },
  { year: "2021", event: "Introduced digital X-ray and ECG diagnostics" },
  { year: "2022", event: "Added physiotherapy and day care services" },
  { year: "2023", event: "Reached 10,000+ patients served milestone" },
  { year: "2024", event: "Launched online appointment booking" },
];

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Our Story"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-subtitle">Who We Are</p>
              <h2 className="section-title">Radiant Speciality Centre</h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                Radiant Speciality Centre is a trusted multi-speciality healthcare clinic located in the heart of Ambegaon BK, Pune. We provide expert medical services in Orthopaedics, General Medicine, and Dental care — all under one roof.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                Our mission is to deliver quality, affordable, and patient-focused healthcare to families across Pune. Every consultation, procedure, and follow-up at our clinic reflects our deep commitment to your wellbeing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                Equipped with modern diagnostic tools including digital X-Ray and ECG, and staffed by DNB/MD-qualified specialists, we bring hospital-grade care to your neighbourhood with the warmth of a family clinic.
              </p>
              <ul className="space-y-2.5">
                {["Board-certified specialist doctors", "In-house pharmacy & diagnostics", "Evening clinic for working families", "Affordable, transparent pricing"].map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {[
                { icon: Target, title: "Our Mission", color: "primary", desc: "To provide accessible, comprehensive, and compassionate multi-speciality healthcare to every family in our community — combining medical expertise with genuine warmth." },
                { icon: Eye, title: "Our Vision", color: "teal", desc: "To be Pune's most trusted neighbourhood speciality clinic, where every patient receives world-class care in a safe, affordable, and welcoming environment." },
              ].map(({ icon: Icon, title, color, desc }) => (
                <div key={title} className={`rounded-2xl p-6 border-l-4 ${color === 'primary' ? 'border-primary bg-blue-50/50' : 'border-teal-500 bg-teal-50/50'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color === 'primary' ? 'bg-primary text-white' : 'bg-teal-500 text-white'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading font-bold text-gray-800 text-lg">{title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">What Guides Us</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 text-center group"
              >
                <div className="w-14 h-14 bg-primary/8 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-gray-800 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">Our Journey</p>
            <h2 className="section-title">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-teal-500 to-teal-200"></div>
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-6 pl-14 relative"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center shadow-lg">
                    <span className="text-white text-[10px] font-bold">{year.slice(2)}</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex-1">
                    <span className="text-primary font-heading font-bold text-sm">{year}</span>
                    <p className="text-gray-600 text-sm mt-0.5">{event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-white text-3xl mb-4">Come Visit Us</h2>
          <p className="text-blue-200 mb-8 text-sm">Experience healthcare that truly cares. Book an appointment today.</p>
          <Link to="/appointment" className="bg-white text-primary font-semibold px-7 py-3.5 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
