import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield, Calendar, Users, MessageSquare, Trash2,
  CheckCircle, Clock, XCircle, BarChart2, Phone,
  RefreshCw, Lock
} from "lucide-react";

const ADMIN_PASS = "radiant2024";

export default function AdminPanel() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState("appointments");

  const loadData = () => {
    setAppointments(JSON.parse(localStorage.getItem("rsc_appointments") || "[]").reverse());
    setMessages(JSON.parse(localStorage.getItem("rsc_messages") || "[]").reverse());
  };

  useEffect(() => {
    if (authenticated) loadData();
  }, [authenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASS) {
      setAuthenticated(true);
      setPassError(false);
    } else {
      setPassError(true);
    }
  };

  const updateStatus = (id, status) => {
    const updated = appointments.map((a) =>
      a.id === id ? { ...a, status } : a
    );
    const forStorage = [...updated].reverse();
    localStorage.setItem("rsc_appointments", JSON.stringify(forStorage));
    setAppointments(updated);
  };

  const deleteAppointment = (id) => {
    if (!window.confirm("Delete this appointment?")) return;
    const updated = appointments.filter((a) => a.id !== id);
    localStorage.setItem("rsc_appointments", JSON.stringify([...updated].reverse()));
    setAppointments(updated);
  };

  const deleteMessage = (id) => {
    if (!window.confirm("Delete this message?")) return;
    const updated = messages.filter((m) => m.id !== id);
    localStorage.setItem("rsc_messages", JSON.stringify([...updated].reverse()));
    setMessages(updated);
  };

  const clearAll = (type) => {
    if (!window.confirm(`Clear all ${type}? This cannot be undone.`)) return;
    localStorage.removeItem(`rsc_${type}`);
    if (type === "appointments") setAppointments([]);
    else setMessages([]);
  };

  const statusBadge = (status) => {
    const map = {
      Pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
      Confirmed: "bg-green-50 text-green-700 border-green-200",
      Cancelled: "bg-red-50 text-red-700 border-red-200",
    };
    return `${map[status] || map.Pending} border text-xs font-semibold px-2.5 py-1 rounded-full`;
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm"
        >
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Shield className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-heading font-bold text-gray-800 text-2xl text-center mb-1">Admin Panel</h2>
          <p className="text-gray-400 text-sm text-center mb-6">Radiant Speciality Centre</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${passError ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-primary/20 focus:border-primary"}`}
                />
              </div>
              {passError && <p className="text-red-500 text-xs mt-1">Incorrect password. Try: radiant2024</p>}
            </div>
            <button type="submit" className="w-full btn-primary justify-center py-3">
              Login
            </button>
          </form>
          <p className="text-xs text-gray-400 text-center mt-4">Default password: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">radiant2024</code></p>
        </motion.div>
      </div>
    );
  }

  const stats = [
    { label: "Total Appointments", value: appointments.length, icon: Calendar, color: "blue" },
    { label: "Pending", value: appointments.filter((a) => a.status === "Pending").length, icon: Clock, color: "yellow" },
    { label: "Confirmed", value: appointments.filter((a) => a.status === "Confirmed").length, icon: CheckCircle, color: "green" },
    { label: "Messages", value: messages.length, icon: MessageSquare, color: "purple" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <BarChart2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-gray-800 text-2xl">Admin Dashboard</h1>
              <p className="text-gray-400 text-xs">Radiant Speciality Centre</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={loadData} className="p-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors">
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setAuthenticated(false)}
              className="text-xs font-semibold text-red-500 hover:text-red-700 px-4 py-2 rounded-xl border border-red-200 hover:bg-red-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map(({ label, value, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                color === "blue" ? "bg-blue-50 text-primary" :
                color === "yellow" ? "bg-yellow-50 text-yellow-600" :
                color === "green" ? "bg-green-50 text-green-600" :
                "bg-purple-50 text-purple-600"
              }`}>
                <Icon className="w-4 h-4" />
              </div>
              <p className="font-heading font-bold text-gray-800 text-2xl">{value}</p>
              <p className="text-gray-400 text-xs">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: "appointments", label: "Appointments", count: appointments.length },
            { id: "messages", label: "Messages", count: messages.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {tab.label}
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === tab.id ? "bg-white/20" : "bg-gray-100"}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Appointments Tab */}
        {activeTab === "appointments" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-800">All Appointments</h3>
              <button onClick={() => clearAll("appointments")} className="text-xs text-red-400 hover:text-red-600 font-medium">
                Clear All
              </button>
            </div>
            {appointments.length === 0 ? (
              <div className="py-16 text-center text-gray-400">
                <Calendar className="w-10 h-10 mx-auto mb-3 opacity-40" />
                <p className="text-sm">No appointments yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide">
                    <tr>
                      {["Patient", "Phone", "Doctor", "Service", "Date", "Time", "Status", "Actions"].map((h) => (
                        <th key={h} className="px-4 py-3 text-left font-semibold whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {appointments.map((appt) => (
                      <tr key={appt.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">{appt.patientName}</td>
                        <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                          <a href={`tel:${appt.phone}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                            <Phone className="w-3 h-3" />{appt.phone}
                          </a>
                        </td>
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{appt.doctor}</td>
                        <td className="px-4 py-3 text-gray-600">{appt.service}</td>
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{appt.date}</td>
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{appt.timeSlot}</td>
                        <td className="px-4 py-3">
                          <span className={statusBadge(appt.status)}>{appt.status}</span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => updateStatus(appt.id, "Confirmed")}
                              title="Confirm"
                              className="p-1.5 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                            >
                              <CheckCircle className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => updateStatus(appt.id, "Cancelled")}
                              title="Cancel"
                              className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                            >
                              <XCircle className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => deleteAppointment(appt.id)}
                              title="Delete"
                              className="p-1.5 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === "messages" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-800">Contact Messages</h3>
              <button onClick={() => clearAll("messages")} className="text-xs text-red-400 hover:text-red-600 font-medium">
                Clear All
              </button>
            </div>
            {messages.length === 0 ? (
              <div className="py-16 text-center text-gray-400">
                <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-40" />
                <p className="text-sm">No messages yet</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-50">
                {messages.map((msg) => (
                  <div key={msg.id} className="px-6 py-5 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <span className="font-semibold text-gray-800 text-sm">{msg.name}</span>
                          <a href={`tel:${msg.phone}`} className="text-xs text-primary hover:underline flex items-center gap-1">
                            <Phone className="w-3 h-3" />{msg.phone}
                          </a>
                          {msg.email && <span className="text-xs text-gray-400">{msg.email}</span>}
                          <span className="text-xs text-gray-300">{new Date(msg.createdAt).toLocaleDateString("en-IN")}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{msg.message}</p>
                      </div>
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="p-1.5 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
