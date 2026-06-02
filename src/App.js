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
import Ribbon from "./components/Ribbon";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";

export default function App() {
  // Which "page" to show, based on the URL hash (#terms / #privacy).
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

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
  }, [route]);

  const isTerms = route === "#terms";
  const isPrivacy = route === "#privacy";
  const isLegal = isTerms || isPrivacy;

  return (
    <>
      <Navbar />
      <Cursor />

      {/* Loader + booking popup only on the main site, not legal pages */}
      {!isLegal && <Loader />}
      {!isLegal && <Popup />}

      {isTerms ? (
        <Terms />
      ) : isPrivacy ? (
        <Privacy />
      ) : (
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
      )}

      <Footer />
    </>
  );
}