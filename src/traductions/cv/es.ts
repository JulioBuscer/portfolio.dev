import type { CvData } from "../../interfaces/CvData.ts";
export const cv: CvData = {
  basics: {
    name: "Julio Bustamante",
    label: "Programador y Desarrollador Web",
    image: "/img/Perfil_5.webp",
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
      id: 2,
      name: "Corporativo EDUCEM",
      position: "Desarrollador Web",
      url: "https://www.educem.mx",
      startDate: "2024-06-19",
      endDate: "",
      summary: "",
      highlights: [
        "Implementación y despliegue de aplicaciones en la nube con Docker, AWS (EC2, CloudFront, Amplify, Route 53, S3)",
        "Automatización de procesos con IA, OCR y APIs REST, mejorando la gestión documental y la integración de datos en múltiples plataformas.",
        "Colaboración con equipos multidisciplinarios bajo metodologías ágiles, facilitando la comunicación entre áreas técnicas y estratégicas.",
      ]
    },
    {
      id: 1,
      name: "Novatec Group",
      position: "Desarrollador Java FullStack",
      url: "https://novatecgroup.com/es/",
      startDate: "2021-07-01",
      endDate: "2024-05-24",
      summary: "",
      highlights: [
        "Definí arquitecturas y optimicé el desarrollo modular en aplicaciones monolíticas, reduciendo duplicidad y mejorando la mantenibilidad.",
        "Capacité al equipo en buenas prácticas de desarrollo, documenté actualizaciones y optimicé procesos para agilizar entregas.",
        "Propuse metodologías ágiles y tecnologías modernas para mejorar eficiencia, fomentando un enfoque más estructurado en el desarrollo."
      ]
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
      keywords: ["Spring", "Java", "Node.js","Python"],
    },
    {
      name: "Bases de Datos",
      level: "Avanzado",
      keywords: ["SQL Server", "MySQL", "MongoDB"],
    },
    {
      name: "DevOps",
      level: "Avanzado",
      keywords: ["AWS", "GitHub", "Atlassian"],
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
      name: "Clasificador de documentos",
      startDate: "2024-11-01",
      endDate: "2025-01-09",
      summary: "",
      description:
        `
          Entrene un Modelo 
          `,
      highlights: ["IA", "Microservicio Python"],
      technologies: ["Python", "ML", "Torch", "OCR", "FastAPI", "SQL Server"],
      url: "https://diplomas.educem.mx/",
      image: "/projects/Diplomas Multimarca.webp",
      id_work: 2,
      featured: true
    },
    {
      name: "Diplomas Multímarca",
      startDate: "2024-11-01",
      endDate: "2025-01-09",
      summary: "Sistema para gestionar los diplomas de los estudiantes de Educem, Tecmas y Firenze.",
      description:
        `Desarrollé una plataforma para gestionar los diplomas de los estudiantes de Educem, Tecmas y Firenze. La plataforma permite generar diplomas automáticamente a partir de plantillas asociadas a cursos y consultarlos en línea. Utilicé Next.js, TypeScript, MUI, y tecnologías QR y PDF para asegurar la autenticidad y dinamismo de los diplomas. más, implementé un sistema de roles y permisos para gestionar usuarios y sincronizar diplomas con plataformas externas`,
      highlights: ["Plataforma web interna", "Aplicacion web publica", "Microservicio Java"],
      technologies: ["Next js", "TS", "MUI", "CSS", "QR", "PDF", "Spring", "SQL Server"],
      url: "https://diplomas.educem.mx/",
      image: "/projects/Diplomas Multimarca.webp",
      id_work: 2,
      featured: true
    },
    {
      name: "Paginas comerciales",
      startDate: "2024-08-01",
      endDate: "2024-11-01",
      summary: "Paginas comerciales de información para Educem, Tecmás y Firenze.",
      description:
        `EL corporativo EDUCEM requería modernizar sus sitios web para mejorar su funcionalidad y alinearlos con su identidad institucional. El desafío fue automatizar el manejo de datos y optimizar la experiencia de usuario. Implementé el diseño con Next.js, TypeScript y Material UI, integrando datos dinámicos desde una API. El resultado fue un sitio eficiente y funcional que mejoró la gestión del contenido digital de la empresa.`,
      highlights: ["Aplicación web", "Microservicio Java"],
      technologies: ["Next js", "TypeScript", "MUI", "CSS",],
      url: "https://educem.mx/",
      image: "/projects/Educem.webp",
      id_work: 2,
    },
    {
      name: "Offer Form",
      startDate: "2022-01-01",
      endDate: null,
      summary: "Herramienta de seguimiento de ofertas.",
      description:
        `La empresa Novatec necesitaba una herramienta para centralizar el seguimiento de ofertas. Por lo que participe en el desarrollo de la herramienta Offer Form, conectando propuestas con el CRM para validar costos y comparar presupuestos de venta, producción y costos reales. Propuse mejoras de arquitectura, implementé control de usuarios, seguridad con tokens y reportes exportables. La herramienta redujo el tiempo de seguimiento de semanas a segundos, estandarizó procesos y mejoró la toma de decisiones estratégicas.`,
      highlights: ["Aplicación web empresarial", "Reportes exportables", "Envió de correos"],
      technologies: ["JSF", "XHTML", "CSS", "Java", "JavaScript", "SQL Server"],
      url: "",
      image: "/projects/Project-OfferForm.webp",
      id_work: 1,
      featured: true
    },
    {
      name: "Chat IA Local",
      startDate: "2024-06-20",
      endDate: null,
      summary: "Aplicación de chat con IA que opera 100% en el navegador usando Web LLM y Web Workers, optimizada para entornos de recursos limitados.",
      description:
        "Creé un Chat IA local como proyecto personal, implementando modelos de IA directamente en el navegador usando Web LLM y recursos del cliente. El principal desafío fue optimizar el rendimiento en entornos con recursos limitados. Utilicé HTML, CSS, JavaScript, Web LLM y Web Workers para lograr un procesamiento eficiente y una experiencia fluida. El resultado fue una aplicación funcional que opera sin servidores externos, mostrando el potencial de la IA local.",
      highlights: ["IA", "Aplicación web", "Servicio local"],
      technologies: ["Web LLM", "Web Workers", "JavaScript", "HTML", "CSS",],
      url: "https://chat-ia-local.netlify.app/",
      image: "/projects/ChatIALocal-preview.avif",
    },
  ],
};
