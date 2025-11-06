import { motion } from "framer-motion";
import { Brush, Gem, Sparkles, Palette } from "lucide-react";

const services = [
  {
    name: "Classic Manicure",
    desc: "Nail shaping, cuticle care, light massage, and polish.",
    price: 25,
    icon: Brush,
    tags: ["Neat", "Glossy", "Everyday"],
  },
  {
    name: "Gel Polish (Shellac)",
    desc: "Chip-resistant gel color with mirror shine.",
    price: 35,
    icon: Sparkles,
    tags: ["Shine", "2+ weeks", "Quick dry"],
  },
  {
    name: "Acrylic Extensions",
    desc: "Durable length and shape with flawless finish.",
    price: 55,
    icon: Gem,
    tags: ["Long", "Coffin/Almond", "Durable"],
  },
  {
    name: "Nail Art – Hand Painted",
    desc: "Detailed designs per nail by our artists.",
    price: 5,
    icon: Palette,
    tags: ["Minimal", "Floral", "Graphic"],
    unit: "per nail",
  },
  {
    name: "Chrome / Cat‑Eye Effect",
    desc: "Trendy reflective and magnetic art.",
    price: 15,
    icon: Sparkles,
    tags: ["Chrome", "Cat-eye", "Holographic"],
    unit: "add‑on",
  },
  {
    name: "French Ombre",
    desc: "Soft gradient French with a modern twist.",
    price: 40,
    icon: Brush,
    tags: ["Ombre", "Soft", "Elegant"],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Popular Services & Nail Art
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          Explore our most-loved treatments and on-trend art finishes.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-rose-100 bg-white p-5 shadow-sm transition hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-transparent to-fuchsia-50 opacity-0 transition group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-3 inline-flex items-center gap-2">
                    <span className="rounded-full bg-rose-100 p-2 text-rose-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">{s.name}</h3>
                  </div>
                  <p className="mb-4 text-sm text-gray-600">{s.desc}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-rose-200 bg-white px-2.5 py-1 text-xs text-rose-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-baseline justify-between">
                    <p className="text-xl font-bold text-gray-900">
                      ${s.price}
                      {s.unit && <span className="ml-1 text-xs font-medium text-gray-500">{s.unit}</span>}
                    </p>
                    <button className="text-sm font-medium text-rose-600 hover:text-rose-700">
                      Add to enquiry
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
