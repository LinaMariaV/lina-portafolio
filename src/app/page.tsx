"use client";

import Topbar from "@/components/topbar/topbar";
import Intro from "@/components/intro/intro";
import Projects from "@/components/projects/projects";
import Footer from "@/components/footer/footer";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <main
      id="root"
      className="flex flex-col items-center bg-slate-950 min-h-screen scroll-smooth"
    >
      <Topbar />

      <Intro />

      <About />

      <Skills />

      <Projects />

      <Footer />
    </main>
  );
}
