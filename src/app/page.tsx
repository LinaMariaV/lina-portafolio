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

      <section className="w-full max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">
          Mis Habilidades y Enfoque
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          Como desarrolladora web, me especializo en crear aplicaciones web de
          alto rendimiento utilizando tecnologías como <strong>React</strong> y{" "}
          <strong>Next.js</strong>, que permiten construir interfaces
          interactivas, escalables y altamente eficientes. Mi enfoque está en
          proporcionar soluciones que optimicen la experiencia del usuario,
          garantizando aplicaciones rápidas, accesibles y funcionales.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          Tengo una sólida experiencia en <strong>Node.js</strong>, lo que me
          permite desarrollar backends robustos y eficientes, creando
          arquitecturas bien estructuradas y fáciles de mantener. Mi objetivo es
          siempre construir aplicaciones con código limpio, modular y escalable,
          asegurando su rendimiento incluso a medida que crecen.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          He trabajado con bases de datos tanto relacionales como no
          relacionales, incluyendo <strong>SQL</strong> y{" "}
          <strong>MongoDB</strong>, optimizando el almacenamiento y la
          manipulación de datos para que las aplicaciones sean rápidas y
          seguras. Además, domino herramientas como <strong>Git</strong> para el
          control de versiones, asegurando que los proyectos sean escalables,
          colaborativos y estén siempre alineados con las mejores prácticas de
          desarrollo.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          Mi enfoque se basa en resultados tangibles y soluciones bien
          implementadas. Trabajo de manera ágil, adaptándome rápidamente a
          nuevos desafíos y colaborando estrechamente con equipos
          multidisciplinarios para garantizar que cada proyecto no solo cumpla
          con los requisitos, sino que también se alinee con los objetivos
          estratégicos de negocio.
        </p>
      </section>

      <Projects />

      <Footer />
    </main>
  );
}
