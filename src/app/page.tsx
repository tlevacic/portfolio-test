"use client";

import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="grain" />

      <Navigation />

      <main>
        <Hero />
        <Marquee />
        <Projects />
        <div className="section-divider mx-6 md:mx-12" />
        <About />
        <div className="section-divider mx-6 md:mx-12" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
