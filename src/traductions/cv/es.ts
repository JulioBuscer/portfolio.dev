import type { CvData } from "../../interfaces/CvData.ts";
export const cv: CvData = {
  basics: {
    name: "Julio Bustamante",
    label: "Programador y Desarrollador Web",
    image: "https://avatars.githubusercontent.com/u/69023054?v=4",
    //"/img/Perfil2.avif",
    email: "juliobuscer@gmail.com",
    phone: "+52 (477) 704-6131",
    url: "https://johndoe.com",
    summary:
      "años de experiencia como desarrollador. Especializado en desarrollar soluciones web. Destaco por mi habilidad para asimilar rápidamente nuevos conocimientos y aplicarlos eficientemente.",
    location: {
      address: "N/A",
      postalCode: "N/A",
      city: "León",
      country: "México",
      countryCode: "MX",
      region: "Guanajuato",
    },
    profiles: [
      {
        network: "Gmail",
        username: "juliobuscer@gmail.com",
        url: "mailto:juliobuscer@gmail.com",
      },
      {
        network: "LinkedIn",
        username: "Julio Bustamante",
        url: "https://www.linkedin.com/in/juliobuscer/",
      },
      {
        network: "Github",
        username: "juliobuscer",
        url: "https://Github.com/juliobuscer",
      },
    ],
  },
  work: [
    {
      name: "Corporativo EDUCEM",
      position: "Desarrollador Web",
      url: "https://www.educem.mx",
      startDate: "2024-06-19",
      endDate: "",
      summary: "",
      highlights: [
        "Trabajo en equipo, por proyecto",
        "Colaboración con Ejecutivos Directivos y el area de producción para conocer los requisitos y las especificaciones empresariales en torno a la gestión de las ofertas a cliente, análisis y riesgos",
        "Implementando tecnologías modernas para la mejora continua y evolución de la empresa y sus clientes",
        "Implementación y actualización de módulos de aplicación bajo la dirección del Project Manager",
        "Codificación eficaz de cambios y mejoras del software en base a especificaciones concretas",
        "Desarrollo y presentación de conclusiones y soluciones a altos ejecutivos y partes interesadas",
      ],
    },
    {
      name: "Novatec Group",
      position: "Desarrollador Java FullStack",
      url: "https://company.com",
      startDate: "2021-07-01",
      endDate: "2024-05-24",
      summary: "",
      highlights: [
        "Trabaje tanto a nivel independiente como en equipo",
        "Colaboración con Ejecutivos Directivos y el area de producción para conocer los requisitos y las especificaciones empresariales en torno a la gestión de las ofertas a cliente, análisis y riesgos",
        "Resolución de problemas utilizando el stack Web requerido por la empresa (Java, IDE Netbeans, SQL Server, Payara Server)",
        "Implementación y actualización de módulos de aplicación bajo la dirección del Project Manager",
        "Codificación eficaz de cambios y mejoras del software en base a especificaciones concretas",
        "Desarrollo y presentación de conclusiones y soluciones a altos ejecutivos y partes interesadas",
      ],
    },
  ],
  volunteer: [
    {
      organization: "Organization",
      position: "Volunteer",
      url: "https://organization.com/",
      startDate: "2012-01-01",
      endDate: "2013-01-01",
      summary: "Description…",
      highlights: ["Awarded 'Volunteer of the Month'"],
    },
  ],
  education: [
    {
      institution: "Universidad Tecnológica de León",
      url: "https://www.utleon.edu.mx/",
      area: "Desarrollo y Gestión de Software.",
      studyType: "Ingeniería",
      startDate: "2018-09-01",
      endDate: "2022-08-01",
      score: "9.0",
      courses: ["DB1101 - Basic SQL"],
    },
  ],
  awards: [
    {
      title: "Award",
      date: "2014-11-01",
      awarder: "Company",
      summary: "There is no spoon.",
    },
  ],
  certificates: [
    {
      name: "Certificado",
      date: "2021-11-07",
      issuer: "Empresa",
      url: "https://certificate.com",
    },
  ],
  publications: [
    {
      name: "Publicación",
      publisher: "Empresa",
      releaseDate: "2014-10-01",
      url: "https://publication.com",
      summary: "Descripción...",
    },
  ],
  skills: [
    {
      name: "Frontend",
      level: "Avanzado",
      keywords: ["React", "Next.js", "Astro", "JSF", "JavaScript", "CSS", "HTML"],
    },
    {
      name: "Backend",
      level: "Avanzado",
      keywords: ["Spring", "Java", "Node.js",],
    },
    {
      name: "Bases de Datos",
      level: "Avanzado",
      keywords: ["SQL Server", "MySQL", "MongoDB"],
    },
    {
      name: "DevOps",
      level: "Avanzado",
      keywords: ["GitHub", "Jira", "Confluence"],
    },
  ],
  languages: [
    {
      language: "Ingles",
      fluency: "B2",
    },
    {
      language: "Español",
      fluency: "Nativo",
    },
  ],
  interests: [
    {
      name: "Wildlife",
      keywords: ["Ferrets", "Unicorns"],
    },
  ],
  references: [
    {
      name: "Jane Doe",
      reference: "Reference…",
    },
  ],
  projects: [
    {
      name: "Offer Form",
      startDate: "2022-01-01",
      endDate: null,
      description:
        "Producto desarrollado para uso interno de la empresa Novatec, da solución a la estimación y seguimiento de proyectos ofertados a sus clientes. Cuenta con reportes que apoyan y agilizan la toma de decisiones",
      highlights: ["JSF", "XHTML", "CSS", "Java", "JavaScript", "SQL Server"],
      url: "",
      image: "/projects/Project-OfferForm.webp",
    },
    {
      name: "Chat IA Local",
      startDate: "2024-06-20",
      endDate: null,
      description:
        "Proyecto personal, para implementar modelos de IA desde el navegador utilizando recursos del cliente, implementando la librería Web LLM",
      highlights: ["HTML", "CSS", "JavaScript", "Web LLM", "Web Workers"],
      url: "https://chat-ia-local.netlify.app/",
      image: "/projects/ChatIALocal-preview.avif",
    },

    {
      name: "Educem",
      startDate: "2024-08-01",
      endDate: "2024-11-01",
      description:
        "Colaborador en el desarrollo Frontend de la pagina oficial de la empresa educativa educem. Elaborada con React y Material UI",
      highlights: ["Next js", "TypeScript", "MUI", "CSS",],
      url: "https://educem.mx/",
      image: "/projects/Educem.webp",
    },
  ],
};
