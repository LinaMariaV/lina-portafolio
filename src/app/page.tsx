"use client";
import BackgroundEffect from "./effects/BackgroundEffect";
import Topbar from "@/components/topbar/topbar";
import Intro from "@/components/intro/intro";
import Projects from "@/components/projects/projects";
import Footer from "@/components/footer/footer";
import TraditionalFooter from "@/components/traditional-footer/traditional-footer";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Process from "@/components/process/process";
import Testimonials from "@/components/testimonials/testimonials";
import ContactCTA from "@/components/contact-cta/contact-cta";

export default function Home() {
  return (
    <main
      id="root"
      className="flex flex-col items-center bg-white dark:bg-neutral-950 min-h-screen scroll-smooth"
    >
      <BackgroundEffect />
      
      <Topbar />

      <Intro />

      <About />

      <Skills />

      <Projects />

      <Process />

      <Testimonials />

      <ContactCTA />

      <Footer />

      <TraditionalFooter />
      
    </main>
  );
}
