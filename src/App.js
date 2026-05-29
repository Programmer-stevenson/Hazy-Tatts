import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import Popup from "./components/Popup";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Services, { Banner } from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  // Scroll reveal — same IntersectionObserver behavior as the original.
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    reveals.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <Loader onDone={() => setShowPopup(true)} />
      <Popup show={showPopup} onClose={() => setShowPopup(false)} />

      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Banner />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
