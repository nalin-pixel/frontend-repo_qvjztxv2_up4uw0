import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Services />
      <Gallery />
      <EnquiryForm />
      <Footer />
    </div>
  );
}

export default App;
