import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle, ChevronDown, Stethoscope } from "lucide-react";
import PageHero from "../components/PageHero";
import { doctors, services } from "../data";

const timeSlots = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM",
];

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [slotError, setSlotError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (!selectedSlot) {
      setSlotError(true);
      return;
    }
    setSlotError(false);

    const appointment = {
      ...data,
      timeSlot: selectedSlot,
      id: Date.now(),
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    // Store in localStorage
    const existing = JSON.parse(localStorage.getItem("rsc_appointments") || "[]");
    existing.push(appointment);
    localStorage.setItem("rsc_appointments", JSON.stringify(existing));

    // Simulate slight delay
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    reset();
    setSelectedSlot("");
  };

  const handleBookAnother = () => {
    setSubmitted(false);
    setSelectedSlot("");
  };

  return (
    <>
      <PageHero
        title="Book Appointment"
        subtitle="Schedule a Visit"
        breadcrumbs={[{ label: "Appointment" }]}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <p className="section-subtitle">Easy Booking</p>
                <h2 className="section-title text-2xl md:text-3xl">Schedule Your Visit</h2>
                <p className="text-gray-500 text-sm leading-relaxed mt-2">
                  Fill in the form and our team will confirm your appointment. Walk-ins also welcome during clinic hours.
                </p>
              </div>

              {/* Clinic hours */}
              <div className="card p-5 space-y-3">
                <h4 className="font-heading font-semibold text-gray-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-500" /> Clinic Hours
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Monday – Saturday</span>
                    <span className="font-semibold text-primary text-xs bg-blue-50 px-2.5 py-1 rounded-full">5:00 PM – 9:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-teal-600 text-xs bg-teal-50 px-2.5 py-1 rounded-full">By Appointment</span>
                  </div>
                </div>
              </div>

              {/* Doctors quick list */}
              <div className="card p-5">
                <h4 className="font-heading font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-teal-500" /> Our Specialists
                </h4>
                <div className="space-y-3">
                  {doctors.map((doc, i) => (
                    <div key={doc.id} className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0 bg-gradient-to-br ${i % 2 === 0 ? 'from-primary to-blue-700' : 'from-teal-400 to-teal-600'}`}>
                        {doc.name.split(" ").slice(1).map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{doc.name}</p>
                        <p className="text-xs text-gray-400">{doc.department}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 text-sm text-teal-700">
                <p className="font-semibold mb-1">📞 Prefer to call?</p>
                <p className="text-teal-600 text-xs mb-2">Speak directly with our reception team.</p>
                <a href="tel:7820930018" className="font-bold text-primary hover:underline">7820930018</a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="card p-10 text-center h-full flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-heading font-bold text-gray-900 text-2xl mb-2">Appointment Requested!</h3>
                    <p className="text-gray-500 text-sm mb-2 max-w-xs">
                      Thank you! Your appointment request has been received. Our team will call you to confirm.
                    </p>
                    <p className="text-xs text-gray-400 mb-7">Please be available on your registered mobile number.</p>
                    <button
                      onClick={handleBookAnother}
                      className="btn-primary text-sm"
                    >
                      Book Another Appointment
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="card p-7"
                  >
                    <h3 className="font-heading font-bold text-gray-800 text-xl mb-6">Patient Details</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                      {/* Name & Phone */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                            Patient Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              {...register("patientName", {
                                required: "Name is required",
                                minLength: { value: 2, message: "At least 2 characters" },
                              })}
                              placeholder="Full name"
                              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                                errors.patientName
                                  ? "border-red-300 focus:ring-red-200"
                                  : "border-gray-200 focus:ring-primary/20 focus:border-primary"
                              }`}
                            />
                          </div>
                          {errors.patientName && (
                            <p className="text-red-500 text-xs mt-1">{errors.patientName.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              {...register("phone", {
                                required: "Phone is required",
                                pattern: { value: /^[6-9]\d{9}$/, message: "Enter valid 10-digit mobile number" },
                              })}
                              placeholder="10-digit mobile number"
                              maxLength={10}
                              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                                errors.phone
                                  ? "border-red-300 focus:ring-red-200"
                                  : "border-gray-200 focus:ring-primary/20 focus:border-primary"
                              }`}
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Doctor & Service */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                            Select Doctor *
                          </label>
                          <div className="relative">
                            <select
                              {...register("doctor", { required: "Please select a doctor" })}
                              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 appearance-none transition-all bg-white ${
                                errors.doctor
                                  ? "border-red-300 focus:ring-red-200"
                                  : "border-gray-200 focus:ring-primary/20 focus:border-primary"
                              }`}
                            >
                              <option value="">Choose a doctor</option>
                              {doctors.map((doc) => (
                                <option key={doc.id} value={doc.name}>
                                  {doc.name} — {doc.department}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          </div>
                          {errors.doctor && (
                            <p className="text-red-500 text-xs mt-1">{errors.doctor.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                            Select Service *
                          </label>
                          <div className="relative">
                            <select
                              {...register("service", { required: "Please select a service" })}
                              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 appearance-none transition-all bg-white ${
                                errors.service
                                  ? "border-red-300 focus:ring-red-200"
                                  : "border-gray-200 focus:ring-primary/20 focus:border-primary"
                              }`}
                            >
                              <option value="">Choose a service</option>
                              {services.map((s) => (
                                <option key={s.id} value={s.title}>{s.title}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          </div>
                          {errors.service && (
                            <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Date */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                          Preferred Date *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="date"
                            {...register("date", {
                              required: "Please select a date",
                              validate: (v) => new Date(v) >= new Date(new Date().setHours(0,0,0,0)) || "Date must be today or in the future",
                            })}
                            min={new Date().toISOString().split("T")[0]}
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                              errors.date
                                ? "border-red-300 focus:ring-red-200"
                                : "border-gray-200 focus:ring-primary/20 focus:border-primary"
                            }`}
                          />
                        </div>
                        {errors.date && (
                          <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
                        )}
                      </div>

                      {/* Time Slots */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                          Preferred Time Slot *
                        </label>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => { setSelectedSlot(slot); setSlotError(false); }}
                              className={`py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                                selectedSlot === slot
                                  ? "bg-primary text-white border-primary shadow-md"
                                  : "border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                        {slotError && (
                          <p className="text-red-500 text-xs mt-1">Please select a time slot</p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                          Message / Symptoms
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <textarea
                            {...register("message")}
                            placeholder="Briefly describe your symptoms or reason for visit (optional)"
                            rows={3}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none text-sm transition-all resize-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary justify-center py-3.5 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Calendar className="w-4 h-4" />
                            Confirm Appointment Request
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-gray-400">
                        Our team will call you within a few hours to confirm your appointment.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
