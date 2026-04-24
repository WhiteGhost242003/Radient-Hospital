import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  MapPin, Phone, Clock, Mail, MessageCircle,
  CheckCircle, Send, User, MessageSquare
} from "lucide-react";
import PageHero from "../components/PageHero";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 700));
    const messages = JSON.parse(localStorage.getItem("rsc_messages") || "[]");
    messages.push({ ...data, id: Date.now(), createdAt: new Date().toISOString() });
    localStorage.setItem("rsc_messages", JSON.stringify(messages));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get In Touch"
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                icon: MapPin,
                color: "blue",
                label: "Address",
                value: "1st Floor, Vyankateshwar Pearl, Jambhulwadi Road, Ambegaon BK, Pune – 411046",
                action: null,
              },
              {
                icon: Phone,
                color: "teal",
                label: "Phone",
                value: "7820930018",
                action: { href: "tel:7820930018", text: "Call Now" },
              },
              {
                icon: MessageCircle,
                color: "green",
                label: "WhatsApp",
                value: "Chat for quick support and appointment queries",
                action: {
                  href: "https://wa.me/917820930018?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment.",
                  text: "Open WhatsApp",
                },
              },
              {
                icon: Clock,
                color: "purple",
                label: "Timings",
                value: "Mon–Sat: 5:00 PM – 9:30 PM\nSunday: By Appointment",
                action: null,
              },
            ].map(({ icon: Icon, color, label, value, action }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 text-center group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${
                  color === "blue" ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white" :
                  color === "teal" ? "bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white" :
                  color === "green" ? "bg-green-50 text-green-600 group-hover:bg-green-500 group-hover:text-white" :
                  "bg-purple-50 text-purple-600 group-hover:bg-purple-500 group-hover:text-white"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mb-2">{label}</h4>
                <p className="text-gray-500 text-xs leading-relaxed whitespace-pre-line mb-3">{value}</p>
                {action && (
                  <a
                    href={action.href}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`text-xs font-semibold px-4 py-2 rounded-full transition-colors inline-block ${
                      color === "teal" ? "bg-teal-50 text-teal-600 hover:bg-teal-100" :
                      color === "green" ? "bg-green-50 text-green-600 hover:bg-green-100" :
                      "bg-blue-50 text-primary hover:bg-blue-100"
                    }`}
                  >
                    {action.text}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Map + Form */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div>
                <p className="section-subtitle">Find Us</p>
                <h2 className="section-title text-2xl md:text-3xl">Our Location</h2>
                <p className="text-gray-500 text-sm flex items-start gap-2 mt-2">
                  <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                  1st Floor, Vyankateshwar Pearl, Belore Patil Properties, Jambhulwadi Road, Datta Nagar, Ambegaon BK, Pune – 411046
                </p>
              </div>

              {/* Embedded Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-64">
                <iframe
                  title="Radiant Speciality Centre Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.874671806694!2d73.85183!3d18.462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2956d6bbb8ed5%3A0x0!2zQW1iZWdhb24gQkssIFB1bmUsIE1haGFyYXNodHJh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:7820930018"
                  className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-900 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call: 7820930018
                </a>
                <a
                  href="https://wa.me/917820930018?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href="https://maps.google.com/?q=Ambegaon+BK+Pune+411046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-7"
            >
              <h3 className="font-heading font-bold text-gray-800 text-xl mb-1">Send Us a Message</h3>
              <p className="text-gray-500 text-sm mb-6">We'll get back to you as soon as possible.</p>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-5"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-green-700 text-sm font-medium">Message sent! We'll respond shortly.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your full name"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${errors.name ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-primary/20 focus:border-primary"}`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: { value: /^[6-9]\d{9}$/, message: "Enter valid 10-digit number" },
                      })}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${errors.phone ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-primary/20 focus:border-primary"}`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email (Optional)</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register("email", {
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                      })}
                      placeholder="your@email.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${errors.email ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-primary/20 focus:border-primary"}`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Message *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                    <textarea
                      {...register("message", { required: "Please enter a message", minLength: { value: 10, message: "At least 10 characters" } })}
                      placeholder="How can we help you?"
                      rows={4}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all resize-none ${errors.message ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-primary/20 focus:border-primary"}`}
                    />
                  </div>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center py-3.5 text-sm font-semibold disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <><svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
