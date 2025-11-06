import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, User, Phone, Sparkles } from "lucide-react";

const initial = {
  name: "",
  phone: "",
  service: "Classic Manicure",
  date: "",
  message: "",
};

const EnquiryForm = () => {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("");

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // For this demo, we'll just simulate success.
    setStatus("Thank you! We'll get back to you shortly.");
    setForm(initial);
  };

  return (
    <section id="enquiry" className="relative py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-200/50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Make an Enquiry
        </motion.h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
          Tell us your preferred service and date. We’ll confirm availability and pricing.
        </p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 space-y-4 rounded-2xl border border-rose-100 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 inline-flex items-center gap-2 text-sm font-medium text-gray-700">
                <User className="h-4 w-4 text-rose-600" /> Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none ring-rose-300 focus:ring"
                placeholder="Your full name"
              />
            </label>
            <label className="block">
              <span className="mb-1 inline-flex items-center gap-2 text-sm font-medium text-gray-700">
                <Phone className="h-4 w-4 text-rose-600" /> Phone
              </span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none ring-rose-300 focus:ring"
                placeholder="Contact number"
              />
            </label>
            <label className="block">
              <span className="mb-1 inline-flex items-center gap-2 text-sm font-medium text-gray-700">
                <Sparkles className="h-4 w-4 text-rose-600" /> Service
              </span>
              <select
                name="service"
                value={form.service}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none ring-rose-300 focus:ring"
              >
                <option>Classic Manicure</option>
                <option>Gel Polish (Shellac)</option>
                <option>Acrylic Extensions</option>
                <option>Nail Art – Hand Painted</option>
                <option>Chrome / Cat‑Eye Effect</option>
                <option>French Ombre</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1 inline-flex items-center gap-2 text-sm font-medium text-gray-700">
                <Calendar className="h-4 w-4 text-rose-600" /> Preferred Date
              </span>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none ring-rose-300 focus:ring"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-1 inline-flex items-center gap-2 text-sm font-medium text-gray-700">
              Details
            </span>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={onChange}
              className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 outline-none ring-rose-300 focus:ring"
              placeholder="Share your nail art inspiration, length or shape preferences, and any notes."
            />
          </label>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              By submitting, you agree to be contacted regarding your enquiry.
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-600/20 transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              <Send className="h-4 w-4" /> Send Enquiry
            </button>
          </div>
          {status && (
            <p className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default EnquiryForm;
