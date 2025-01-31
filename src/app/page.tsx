"use client";
import { useEffect } from "react";
import Topbar from "@/components/topbar/topbar";
import Intro from "@/components/intro/intro";
import Projects from "@/components/projects/projects";
import Footer from "@/components/footer/footer";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";

export default function Home() {
  const lightColor = "rgba(112, 104, 104, 0.5)";
  const gradientSize = 150;
  useEffect(() => {
    const playpen = document.getElementById("root");
    if (!playpen) return;

    const originalBGplaypen = getComputedStyle(playpen).backgroundColor;

    // Función para manejar el evento de movimiento del mouse en el playpen
    const handleMouseMovePlaypen = (e: MouseEvent) => {
      const x = e.pageX - playpen.offsetLeft;
      const y = e.pageY - playpen.offsetTop;
      const xy = `${x} ${y}`;

      const bgWebKit = `-webkit-gradient(radial, ${xy}, 0, ${xy}, ${gradientSize}, from(${lightColor}), to(rgba(255,255,255,0.0))), ${originalBGplaypen}`;

      const bgMoz = `-moz-radial-gradient(${x}px ${y}px 45deg, circle, ${lightColor} 0%, ${originalBGplaypen} ${gradientSize}px)`;

      playpen.style.background = bgWebKit;
      playpen.style.background = bgMoz;
    };

    const handleMouseLeavePlaypen = () => {
      playpen.style.background = originalBGplaypen;
    };

    playpen.addEventListener("mousemove", handleMouseMovePlaypen);
    playpen.addEventListener("mouseleave", handleMouseLeavePlaypen);
  }, []);

  return (
    <main
      id="root"
      className="flex flex-col items-center bg-slate-950 min-h-screen "
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
