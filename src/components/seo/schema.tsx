"use client";

export default function SchemaOrg() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lina Villalba",
    "jobTitle": "Full-Stack Developer",
    "url": "https://linavillalba.me",
    "sameAs": [
      "https://github.com/LinaMariaV",
      "https://linkedin.com/in/lina-maria-villalba",
      "https://instagram.com/linamvillalba"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Spring Boot",
      "JavaScript",
      "HTML5",
      "CSS3",
      "MongoDB",
      "SQL",
      "Nginx",
      "Docker"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Full-stack developer specializing in building scalable digital solutions with React, Node.js, and modern web technologies."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
