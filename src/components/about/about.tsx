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
              I&#39;m Lina, a freelance developer with end-to-end experience in
              building digital products—from crafting user interfaces to
              implementing APIs and deploying to production. I’ve worked on
              various projects handling both frontend and backend development,
              leading complete development cycles with a focus on quality,
              scalability, and user experience. <br /> <br /> While I&#39;m
              especially passionate about frontend development and creating
              user-centered experiences, I&#39;m also confident working on the
              backend. I&#39;ve built APIs, configured servers, managed databases,
              and deployed applications using tools like Nginx. My backend
              experience includes both Node.js/Express and Java Spring Boot,
              which allows me to adapt to different architectures and project
              needs. This versatility has enabled me to work independently on
              full product builds as well as integrate seamlessly into team
              environments. <br /> <br /> My main tech stack includes React,
              Next.js, Node.js, Express, and Spring Boot, but I&#39;m always
              learning and adapting to each project&#39;s requirements. As a
              freelancer, I&#39;ve developed strong problem-solving skills and the
              ability to make strategic technical decisions. In team
              environments, I follow best practices in collaboration, version
              control, and agile methodologies. <br /> <br /> Currently, I focus
              on building solid, accessible, and high-impact digital solutions
              while continuing to grow as a fullstack developer, exploring new
              technologies, and creating products that deliver real-world value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
