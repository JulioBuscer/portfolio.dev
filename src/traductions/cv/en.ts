import type { CvData } from "../../interfaces/CvData.ts";
export const cv: CvData = {
  basics: {
    name: "Julio Bustamante",
    label: "Programmer & Developer Web",
    image: "/img/Perfil_5.webp",
    email: "juliobuscer@gmail.com",
    phone: "+52 (477) 704-6131",
    url: "https://johndoe.com",
    summary:
      "years of experience as a developer. Specialized in developing web solutions. I stand out for my ability to quickly assimilate new knowledge and apply it efficiently.",
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
      position: "Web Developer",
      url: "https://www.educem.mx",
      startDate: "2024-06-19",
      endDate: "",
      summary: "",
      highlights: [
        "Led development of the official platform and automated diploma systems, integrating Next.js, TypeScript, dynamic QR/PDFs, and an AI-based document classifier to optimize academic processes.",
        "Implemented robust security (roles, permissions, and encryption) and data synchronization via RESTful APIs, ensuring integrity across internal and external platforms.",
        "Drove digital transformation of the corporation, collaborating with multidisciplinary teams to modernize existing applications, optimize administrative workflows, and provide ongoing technical support."
      ]
    },
    {
      id: 1,
      name: "Novatec Group",
      position: "FullStack Java JSF developer",
      url: "https://novatecgroup.com/es/",
      startDate: "2021-07-01",
      endDate: "2024-05-24",
      summary: "",
      highlights: [
        "Led development of 'Offer Form', a tool for centralizing commercial offer tracking, integrating cost validation with CRM and generating exportable reports (JSF, Java, SQL Server).",
        "Optimized traceability processes, implementing automated tracking that reduced risk analysis times and detected inconsistencies in proposals.",
        "Collaborated with executives and multidisciplinary teams to align technical features with strategic objectives, ensuring timely deliveries."
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
      area: "Software Development and Management.",
      studyType: "Engineer",
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
      name: "Frontend",
      level: "Advanced",
      keywords: ["React", "Next.js", "Astro", "JSF", "JavaScript", "CSS", "HTML"],
    },
    {
      name: "Backend",
      level: "Advanced",
      keywords: ["Spring", "Java", "Node.js","Python"],
    },
    {
      name: "Data Bases",
      level: "Advanced",
      keywords: ["SQL Server", "MySQL", "MongoDB"],
    },
    {
      name: "DevOps",
      level: "Advanced",
      keywords: ["GitHub", "Jira", "Confluence"],
    },
  ],
  languages: [
    {
      language: "English",
      fluency: "B2",
    },
    {
      language: "Spanish",
      fluency: "Native",
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
      name: "Document Classifier",
      startDate: "2024-11-01",
      endDate: "2025-01-09",
      summary: "",
      description:
        "I trained a model.",
      highlights: ["AI", "Python Microservice"],
      technologies: ["Python", "ML", "Torch", "OCR", "FastAPI", "SQL Server"],
      url: "https://diplomas.educem.mx/",
      image: "/projects/Diplomas Multimarca.webp",
      id_work: 2,
      featured: true
    },
    {
      name: "Multibrand Diplomas",
      startDate: "2024-11-01",
      endDate: "2025-01-09",
      summary: "System to manage student diplomas for Educem, Tecmas, and Firenze.",
      description:
        "I developed a platform to manage student diplomas for Educem, Tecmas, and Firenze. The platform allows for the automatic generation of diplomas from templates associated with courses and enables online consultation. I used Next.js, TypeScript, MUI, and QR and PDF technologies to ensure the authenticity and dynamism of the diplomas. Additionally, I implemented a role and permission system to manage users and synchronize diplomas with external platforms.",
      highlights: ["Internal web platform", "Public web application", "Java Microservice"],
      technologies: ["Next.js", "TS", "MUI", "CSS", "QR", "PDF", "Spring", "SQL Server"],
      url: "https://diplomas.educem.mx/",
      image: "/projects/Diplomas Multimarca.webp",
      id_work: 2,
      featured: true
    },
    {
      name: "Commercial Websites",
      startDate: "2024-08-01",
      endDate: "2024-11-01",
      summary: "Informational commercial websites for Educem, Tecmás, and Firenze.",
      description:
        "The EDUCEM corporation needed to modernize its websites to improve functionality and align them with its institutional identity. The challenge was to automate data handling and optimize the user experience. I implemented the design using Next.js, TypeScript, and Material UI, integrating dynamic data from an API. The result was an efficient and functional site that improved the company's digital content management.",
      highlights: ["Web application", "Java Microservice"],
      technologies: ["Next.js", "TypeScript", "MUI", "CSS"],
      url: "https://educem.mx/",
      image: "/projects/Educem.webp",
      id_work: 2,
    },
    {
      name: "Offer Form",
      startDate: "2022-01-01",
      endDate: null,
      summary: "Offer tracking tool.",
      description:
        "The company Novatec needed a tool to centralize offer tracking. I participated in the development of the Offer Form tool, connecting proposals with the CRM to validate costs and compare sales, production, and actual cost budgets. I proposed architectural improvements, implemented user control, token-based security, and exportable reports. The tool reduced tracking time from weeks to seconds, standardized processes, and improved strategic decision-making.",
      highlights: ["Enterprise web application", "Exportable reports", "Email sending"],
      technologies: ["JSF", "XHTML", "CSS", "Java", "JavaScript", "SQL Server"],
      url: "",
      image: "/projects/Project-OfferForm.webp",
      id_work: 1,
      featured: true
    },
    {
      name: "Local AI Chat",
      startDate: "2024-06-20",
      endDate: null,
      summary: "AI chat application that operates 100% in the browser using Web LLM and Web Workers, optimized for resource-limited environments.",
      description:
        "I created a Local AI Chat as a personal project, implementing AI models directly in the browser using Web LLM and client resources. The main challenge was optimizing performance in resource-limited environments. I used HTML, CSS, JavaScript, Web LLM, and Web Workers to achieve efficient processing and a smooth experience. The result was a functional application that operates without external servers, showcasing the potential of local AI.",
      highlights: ["AI", "Web application", "Local service"],
      technologies: ["Web LLM", "Web Workers", "JavaScript", "HTML", "CSS"],
      url: "https://chat-ia-local.netlify.app/",
      image: "/projects/ChatIALocal-preview.avif",
    },
  ],
};
