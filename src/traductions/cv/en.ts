import type { CvData } from "../../interfaces/CvData.ts";
export const cv: CvData = {
  basics: {
    name: "Julio Bustamante",
    label: "Programmer & Developer Web",
    //TODO: cambiar la foto    
    image: "img/Avatar.webp",
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
        "Work in team by project",
        "Collaboration with executives and the production area to know the requirements and business specificities around the management of customer offers, analysis and risks",
        "Implementing modern technologies for the continuous improvement and evolution of the company and its customers",
        "Implementing and upgrading application modules under the guidance of the Porject Manager",
        "Effective coding of software changes and enhancements based on concrete specifications",
        "Development and presentation of findings and solutions to senior executives and stakeholders",
      ],
    },
    {
      name: "Novatec Group",
      position: "FullStack developer",
      url: "https://company.com",
      startDate: "2021-07-01",
      endDate: "2024-05-24",
      summary: "",
      highlights: [
        "Worked independently or in a team",
        "Collaboration with the CEO and the Marketing department to understand the requirements and specifications of business in the management of customer offers, risks and analysis",
        "Collaboration with the production area to understand the requirements and business specificities around customer offerings, analysis and risk management",
        "Troubleshooting using the Web stack required by the company (Java, Netbeans IDE, SQL Server, Payara Server)",
        "Implementation and update of application modules under the direction of the Porject Manager",
        "Effective coding of software changes and enhancements based on concrete specifications",
        "Development and presentation of findings and solutions to senior executives and stakeholders",
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
      keywords: ["Spring Boot", "Java", "Node.js",],
    },
    {
      name: "Data Bases",
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
        "Product developed for internal use of the company Novatec, provides a solution to the estimation and monitoring of projects offered to its customers. It has reports that support and speed up the decision making process.",
      highlights: ["JSF", "XHTML", "CSS", "Java", "JavaScript", "SQLServer"],
      url: "",
      image: "/projects/Project-OfferForm.webp",
    },
    {
      name: "AI Chat Local",
      startDate: "2024-06-20",
      endDate: null,
      description:
        "Personal project, to implement AI models from the browser using client resources, implementing the Web LLM library.",
      highlights: ["HTML", "CSS", "JavaScript", "Web LLM", "Web Workers"],
      url: "https://chat-ia-local.netlify.app/",
      image: "/projects/ChatIALocal-preview.avif",
    },
    {
      name: "Educem",
      startDate: "2024-08-01",
      endDate: "2024-11-01",
      description:
        "Collaborator in the development of the official website of the educational company educem. Developed with React and Material UI",
      highlights: ["React", "CSS", "TypeScript", "MUI"],
      url: "https://educem.mx/",
      image: "/projects/Educem.webp",
    },
  ],
};
