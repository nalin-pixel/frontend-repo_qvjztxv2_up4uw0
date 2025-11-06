import { Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-rose-100 bg-white py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-gray-900">Luxe Nails Studio</p>
          <p className="mt-2 text-sm text-gray-600">
            Art-forward nail salon for women. Hygiene-first, cruelty-free products,
            and trend-driven designs.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Hours</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>Mon–Sat: 10:00 AM – 8:00 PM</li>
            <li>Sun: 11:00 AM – 6:00 PM</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Contact</p>
          <div className="mt-2 space-y-2 text-sm text-gray-600">
            <p className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-rose-600" /> +1 (000) 000-0000</p>
            <div className="flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-rose-200 px-3 py-1 text-rose-700 hover:bg-white">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-rose-200 px-3 py-1 text-rose-700 hover:bg-white">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl px-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Luxe Nails Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
