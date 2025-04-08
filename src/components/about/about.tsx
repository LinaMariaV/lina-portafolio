import Image from "next/image";
import faceimage from "../../../public/face-lina.jpg";
import Separator from "../separator/separator";

export default function About() {
  return (
    <div
      id="about"
      className="w-full max-w-6xl px-16 pb-10 pt-5 sm:pt-20 font-[family-name:var(--font-inter)]"
    >
      <div className="flex flex-col sm:flex-row items-top text-center gap-6">
        <div className="w-full sm:w-1/3 flex justify-center">
          <div className="relative w-full h-[200px] overflow-hidden rounded-lg border-1 text-indigo-500 border-orange-50  mt-10">
            <Image
              src={faceimage}
              alt="Lina Villalba"
              layout="fill"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="w-full sm:w-2/3 text-center">
          <Separator />

          <h1 className="text-3xl  text-left font-bold text-orange-50 mb-4">
            About me
          </h1>
          <div>
            <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto text-justify">
              I am Lina, a programmer passionate about creating digital
              solutions that improve the user experience. My journey in
              programming started with basic projects, learning HTML and CSS,
              which gave me a solid understanding of web structure and design.
              Over time, I delved into JavaScript, which provided me with the
              tools to start developing interactive applications.
              <br />
              <br />
              Along this path, I have worked with technologies such as React,
              Next.js, and Node.js, which have allowed me to develop dynamic and
              efficient applications. I recently completed my Technical Degree
              in Software Programming, which gave me a stronger foundation in
              data structures, algorithms, and best development practices.
              <br />
              <br />
              During my internship, I worked on an artificial intelligence
              project that optimized access to and decision-making from large
              volumes of data. This experience allowed me to apply my technical
              skills in a real-world environment, learning about the integration
              of complex systems and how technology can transform business
              processes.
              <br />
              <br />
              Currently, I focus on developing accessible, efficient, and
              high-impact digital solutions, always adopting best practices and
              exploring emerging technologies to ensure innovative results that
              align with market needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
