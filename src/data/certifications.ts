export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  category: "ai-ml" | "db" | "data" | "dev" | "other" | "degree";
  badgeEmoji: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Master of Science AI: Deep Learning",
    issuer: "Degree - WES accredited",
    date: "April 2024",
    credentialUrl: "/assets/pdf/NMIMS_Degree.pdf",
    category: "degree",
    badgeEmoji: "📚",
  },
  {
    id: 2,
    title: "Master of Management: Operations",
    issuer: "Degree - WES accredited",
    date: "April 2016",
    credentialUrl: "/assets/pdf/MBA_degree_certificate.pdf",
    category: "degree",
    badgeEmoji: "📚",
  },
  {
    id: 3,
    title: "Programming for Everybody",
    issuer: "Coursera",
    date: "Jun 2023",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/97TXY5WCGD65",
    category: "dev",
    badgeEmoji: "🧑‍💻",
  },
  {
    id: 4,
    title: "Python Data structures",
    issuer: "Coursera",
    date: "Jun 2023",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/AZ6UTTV7TW9B",
    category: "dev",
    badgeEmoji: "🧑‍💻",
  },
  {
    id: 5,
    title: "Career Essentials in GitHub Professional",
    issuer: "Linkedin",
    date: "Nov 2025",
    credentialUrl: "https://www.linkedin.com/learning/certificates/0d57043da050515fcc9ac1e719f2bff918f0cc80f356ad0a95ab2cae221f2f44?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B3%2FY0h0xbRJazi80q7ptDHA%3D%3D&trk=share_certificate&accountId=0&u=0&success=true&authUUID=0qDal3BgRHuL9LBI1F98Dg%3D%3D",
    category: "dev",
    badgeEmoji: "🧑‍💻",
  },
  {
    id: 6,
    title: "Programming Foundations: APIs and Web Services",
    issuer: "Linkedin",
    date: "Nov 2025",
    credentialUrl: "https://www.linkedin.com/learning/certificates/bbdf2cfeb0305f65e72cf342a2073f099ae06eadc3d28c3da6db0c703cc931a0?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B3%2FY0h0xbRJazi80q7ptDHA%3D%3D",
    category: "dev",
    badgeEmoji: "🧑‍💻",
  },
  {
    id: 7,
    title: "Building Production-Ready React Apps: Setup to Deployment with Firebase",
    issuer: "Linkedin",
    date: "Nov 2023",
    credentialUrl: "https://www.linkedin.com/learning/certificates/891d43371cbef0fbf42b41a189d7b2ee30042465cb25283cf3b56d1e16ff8e0a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B3%2FY0h0xbRJazi80q7ptDHA%3D%3D",
    category: "dev",
    badgeEmoji: "🧑‍💻",
  },
  {
    id: 8,
    title: "Deep Learning with PyTorch : Image Segmentation",
    issuer: "Coursera",
    date: "Apr 2024",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/AJK92XWDW4VG",
    category: "ai-ml",
    badgeEmoji: "👁️",
  },
  {
    id: 9,
    title: "OpenAI API: Speech",
    issuer: "Linkedin",
    date: "Nov 2025",
    credentialUrl: "https://www.linkedin.com/learning/certificates/3aa9a6d47426b64a47dddd3a9ceb1915a572d3dde6a62bb152e0905ab7d32de5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B3%2FY0h0xbRJazi80q7ptDHA%3D%3D",
    category: "ai-ml",
    badgeEmoji: "🧠",
  },
  {
    id: 10,
    title: "Advanced NLP with Python for Machine Learning",
    issuer: "Linkedin",
    date: "Nov 2025",
    credentialUrl: "https://www.linkedin.com/learning/certificates/b7cf7564bc29efc8821568bc78a43ac79d1917dcc8b6fb5dfa57a84c968dc248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B3%2FY0h0xbRJazi80q7ptDHA%3D%3D",
    category: "ai-ml",
    badgeEmoji: "🧠",
  },
  {
    id: 11,
    title: "MongoDB CRUD Operations in Python",
    issuer: "MongoDB",
    date: "Apr 2023",
    credentialUrl: "https://learn.mongodb.com/c/mQEYLQqRQcSJXF0FsOavjg",
    category: "db",
    badgeEmoji: "☁️",
  },
  {
    id: 12,
    title: "All Certifications",
    issuer: "List of all my certications",
    date: "2017 - 2026",
    credentialUrl: "https://www.linkedin.com/in/saumitrapanchal/details/certifications/",
    category: "other",
    badgeEmoji: "💯",
  },
];
