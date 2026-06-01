import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import Ribbon from "./components/Ribbon";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";

// Scroll reveal — same IntersectionObserver behavior as the original.
function useScrollReveal() {
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
}

function HomePage() {
  return (
    <>
      <Hero />
      <Ribbon />
      <About />
      <Portfolio />
      <Services />
      <Banner />
      <Testimonials />
      <Contact />
    </>
  );
}

// Renders the loader + booking popup ONLY on the home page,
// so they don't fire when viewing Terms or Privacy.
function HomeOnlyExtras() {
  const { pathname } = useLocation();
  if (pathname !== "/") return null;
  return (
    <>
      <Loader />
      <Popup />
    </>
  );
}

// Jump to the top whenever the route changes, so legal pages
// don't open scrolled halfway down.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useScrollReveal();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Cursor />
      <HomeOnlyExtras />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}