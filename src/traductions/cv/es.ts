import type { CvData } from "../../interfaces/CvData.ts";
export const cv: CvData = {
  basics: {
    name: "Julio Bustamante",
    label: "Programador y Desarrollador Web",
    image:
      "https://media.licdn.com/dms/image/D5603AQEo0AFz5bIYZA/profile-displayphoto-shrink_800_800/0/1705929035623?e=1718236800&v=beta&t=D4pFn6AawcQ5207uK-FxBR5NgEJ6PgklASND48csuBc",
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
      name: "Novatec Group",
      position: "Desarrollador Java FullStack",
      url: "https://company.com",
      startDate: "2021-07-01",
      endDate: "2024-05-24",
      summary: "",
      highlights: [
        "Trabaje tanto a nivel independiente como en equipo",
        "Colaboracion con Ejecutivos Directivos y el area de producción para conocer los requicitos y las especiicaciónes empresariales en torno a la gestion de las ofertas a cliente, analisis y riesgos",
        "Resolución de problemas utilizando el stack Web requerido por la empresa (Java, IDE Netbeans, SQL Server, Payara Server)",
        "Implementación y actualización de modulos de aplicación bajo la direccion del Porject Manager",
        "Codificción eficaz de cambios y mejoras del software en base a especificaciónes concretas",
        "Desarrollo y presentacion de concluciones y soluciones a altos ejecutivos y partes interesadas",
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
      name: "Certificate",
      date: "2021-11-07",
      issuer: "Company",
      url: "https://certificate.com",
    },
  ],
  publications: [
    {
      name: "Publication",
      publisher: "Company",
      releaseDate: "2014-10-01",
      url: "https://publication.com",
      summary: "Description…",
    },
  ],
  skills: [
    {
      name: "Frameworks",
      level: "Advanced",
      keywords: ["React", "Astro", "JSF"],
    },
    {
      name: "Frontend",
      level: "Advanced",
      keywords: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Backend",
      level: "Advanced",
      keywords: ["Java", "Node.js"],
    },
    {
      name: "Bases de Datos",
      level: "Advanced",
      keywords: ["SQL Server", "MySQL", "MongoDB"],
    },
    {
      name: "DevOps",
      level: "Advanced",
      keywords: ["GitHub"],
    },
  ],
  languages: [
    {
      language: "Español",
      fluency: "Nativo",
    },
    {
      language: "English",
      fluency: "B2",
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
  ],
};
