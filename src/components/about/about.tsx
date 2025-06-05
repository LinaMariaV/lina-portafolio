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
              {" "}
              I'm Lina, a freelance developer with end-to-end experience in
              building digital products—from crafting user interfaces to
              implementing APIs and deploying to production. I’ve worked on
              various projects handling both frontend and backend development,
              leading complete development cycles with a focus on quality,
              scalability, and user experience. <br /> <br /> While I’m
              especially passionate about frontend development and creating
              experiences that connect with people, I’m also confident working
              on the backend. I’ve built APIs, configured servers, managed
              databases, and deployed applications using tools like Nginx. This
              versatility has allowed me to work independently on full product
              builds. <br /> <br /> My main tech stack includes React, Next.js,
              Node.js, and Express, but I’m always learning and adapting to each
              project’s needs. As a freelancer, I’ve developed strong
              problem-solving skills and the ability to make strategic technical
              decisions. In team environments, I follow best practices in
              collaboration, version control, and agile methodologies. <br />{" "}
              <br /> Currently, I focus on building solid, accessible, and
              high-impact digital solutions. I’m driven to keep growing as a
              fullstack developer, exploring new technologies, and creating
              products that deliver real-world value.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
