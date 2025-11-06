import { motion } from "framer-motion";
import { Sparkles, Star, Phone } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-16 h-72 w-72 rounded-full bg-rose-200/60 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-200/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-8 pb-20 sm:pt-12 lg:pt-16">
        <div className="mb-10 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <Sparkles className="h-6 w-6 text-rose-500" />
            <span className="font-semibold tracking-tight text-rose-600">
              Luxe Nails Studio
            </span>
          </motion.div>
          <motion.a
            href="tel:+10000000000"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-rose-600/20 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            <Phone className="h-4 w-4" /> Book by Phone
          </motion.a>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="mb-4 inline-flex items-center gap-1 rounded-full border border-rose-200 bg-white/70 px-3 py-1 text-xs text-rose-600 backdrop-blur">
              <Star className="h-3.5 w-3.5 text-amber-400" />
              Art-forward nail care for women
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Elevate your nails with
              <span className="bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent"> luxury art</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              From minimalist elegance to bold statement art, our artists craft designs that
              match your vibe. Trendy finishes, long-lasting shine, and a pampering experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 transition hover:translate-y-[-1px] hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                View Services
              </button>
              <button
                onClick={scrollToEnquiry}
                className="inline-flex items-center justify-center rounded-full border border-rose-200 bg-white/80 px-6 py-3 text-sm font-semibold text-rose-700 backdrop-blur transition hover:border-rose-300 hover:bg-white"
              >
                Make an Enquiry
              </button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-400" /> 4.9/5 rated
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-rose-500" /> Hygienic & gentle care
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/70 via-transparent to-fuchsia-100/70" />
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612f2b9e?q=80&w=1600&auto=format&fit=crop"
                alt="Nail art close-up"
                className="relative z-10 h-80 w-full object-cover"
              />
              <div className="relative z-10 space-y-3 p-5">
                <p className="text-sm font-medium text-rose-600">Signature Styles</p>
                <p className="text-sm text-gray-600">
                  Chrome, Cat-eye, Ombre, and Hand-painted micro art crafted by specialists.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
