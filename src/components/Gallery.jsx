import { motion } from "framer-motion";

const items = [
  {
    title: "Chrome Mirror",
    price: 15,
    img: "https://images.unsplash.com/photo-1616394584738-fc6e612f2b9e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Cat‑Eye Magnetic",
    price: 15,
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Minimal Florals",
    price: 5,
    unit: "per nail",
    img: "https://images.unsplash.com/photo-1580130718088-99bb06e8b7ae?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "French Ombre",
    price: 40,
    img: "https://images.unsplash.com/photo-1580741164204-75164a2a78fc?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Glazed Donut",
    price: 12,
    unit: "add‑on",
    img: "https://images.unsplash.com/photo-1631214522903-8f7fe367ec0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Hand‑painted Graphics",
    price: 7,
    unit: "per nail",
    img: "https://images.unsplash.com/photo-1556228578-8b368f9b9415?q=80&w=1600&auto=format&fit=crop",
  },
];

const Gallery = () => {
  return (
    <section className="bg-rose-50/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Nail Art Lookbook
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          A peek at our trending sets and finishes.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="font-semibold text-gray-900">{it.title}</p>
                  <p className="text-sm text-gray-600">
                    ${it.price} {it.unit && <span className="text-gray-500">{it.unit}</span>}
                  </p>
                </div>
                <button className="rounded-full border border-rose-200 px-3 py-1 text-sm font-medium text-rose-700 hover:bg-white">
                  Add to enquiry
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
