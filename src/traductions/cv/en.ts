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
      keywords: ["Spring", "Java", "Node.js",],
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
      name: "Diplomas (Educem,Tecmas,Firenze)",
      startDate: "2024-11-01",
      endDate: "2025-01-09",
      summary: "Digital diploma management system for Educem, Tecmas, and Firenze students.",
      description:
        `
        Developed a digital platform for educational companies, allowing the generation of diplomas automatically based on course templates and online access to diplomas. Utilized Next.js, TypeScript, MUI, and QR and PDF technologies for ensuring the authenticity and dynamic nature of diplomas. Implemented a role and permission system to manage users and synchronize diplomas with external platforms.
        `,
      highlights: ["Next js", "TypeScript", "MUI", "CSS", "QR", "PDF"],
      url: "https://educem.mx/",
      image: "/projects/Diplomas Multimarca.webp",
    },
    {
      name: "Educem (Official Website)",
      startDate: "2024-08-01",
      endDate: "2024-11-01",
      summary: "Dynamic information platform for Educem.",
      description:
        `
        Educem required a modernization of its website to improve its functionality and align it with its institutional identity. The challenge was to automate the management of data and optimize the user experience. I implemented the design with Next.js, TypeScript, and Material UI, integrating dynamic data from an API. The result was an efficient and functional site that improved the management of digital content for the company.
        `,
      highlights: ["Next js", "TypeScript", "MUI", "CSS",],
      url: "https://educem.mx/",
      image: "/projects/Educem.webp",
    }, {
      name: "Offer Form",
      startDate: "2022-01-01",
      endDate: null,      
      summary: "Offer tracking tool.",
      description:
        `I developed 'Offer Form', a tool to centralize the tracking of offers in Novatec, connecting proposals with the CRM to validate costs and compare budgets for sales, production and real costs. I proposed architectural improvements, implemented user control, security with tokens and exportable reports. The tool reduced the tracking time from weeks to seconds, standardized processes and improved strategic decision making.`,
      highlights: ["JSF", "XHTML", "CSS", "Java", "JavaScript", "SQL Server"],
      url: "",
      image: "/projects/Project-OfferForm.webp",
    },
    {
      name: "Local AI Chat",
      startDate: "2024-06-20",
      endDate: null,
      summary: "Local AI Chat is an application that operates 100% in the browser using Web LLM and Web Workers, optimized for resource-constrained environments.",
      description:
        "I created a local AI chat as a personal project, implementing AI models directly in the browser using Web LLM and client-side resources. The main challenge was optimizing performance in resource-constrained environments. I used HTML, CSS, JavaScript, Web LLM and Web Workers to achieve efficient processing and a smooth user experience. The result was a functional application that operates without external servers, showcasing the potential of local AI.",
      highlights: ["HTML", "CSS", "JavaScript", "Web LLM", "Web Workers"],
      url: "https://chat-ia-local.netlify.app/",
      image: "/projects/ChatIALocal-preview.avif",
    },

  ],
};
