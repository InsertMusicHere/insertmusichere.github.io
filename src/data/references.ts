export interface Reference {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  linkedIn?: string;
  pdfPath?: string;
  docPath?: string;
  imgPath: string;
}

export const references: Reference[] = [
  {
    id: 1,
    name: "Avinash Kanaskar",
    role: "Director - Global Procurement EM Asia",
    company: "Pfizer",
    quote:
      "Saumitra's project centered around the development of the ML web app to predict daily food orders. Implementation of model has resulted in reduction in food wastage — a meaningful, measurable impact.",
    linkedIn: "https://www.linkedin.com/in/avinash-kanaskar-0403b55/",
    pdfPath: "/assets/pdf/To Whomsoever It May Concern.pdf",
    imgPath: "/assets/img/testimonial1.png",
  },
  {
    id: 2,
    name: "Soham Basak",
    role: "Director Implementation",
    company: "Darwinbox",
    quote:
      "Saumitra has now transitioned to the core product team, as a Technical Consultant, where he focuses on expediting the data migration process through extensive backend scripting.",
    linkedIn: "https://www.linkedin.com/in/sohambasak/",
    pdfPath: "/assets/pdf/Reference_Letter_Saumitra_Dbox.pdf",
    imgPath: "/assets/img/testimonial2.png",
  },
  {
    id: 3,
    name: "Brite Jackson",
    role: "Sr. Manager - Merit",
    company: "Letrim",
    quote:
      "In my individual capacity, I can personally attest to Saumitra's good performance and work ethic. Saumitra consistently exhibited a high level of dedication, accountability, and ownership in his role as a Research Analyst.",
    linkedIn: "https://www.linkedin.com/in/britejackson/",
    pdfPath: "/assets/pdf/Employment-Reference Mer.pdf",
    imgPath: "/assets/img/testimonial2.png",
  },
  {
    id: 4,
    name: "Sneha Singh",
    role: "Vice President Operations",
    company: "BARE International",
    quote:
      "Saumitra is a very hardworking employee and has displayed immense dedication in his role. He is a very keen learner and has taken up responsibilities pro actively. He has worked on very complex projects and provided support to his peers at all times. He manages work pressure well and keeps his calm with a smile. I wish him all the best for all his future projects.",
    linkedIn: "https://www.linkedin.com/in/saumitrapanchal/details/recommendations/",
    imgPath: "/assets/img/testimonial3.png",
  },
  {
    id: 5,
    name: "Deepak Parmar",
    role: "Associate Director Training",
    company: "UpGrad",
    quote:
      "Saumitra is one of the most dedicated, sincere and honest people I know. My earliest memory of him is me giving him a task and him coming back in 15 mins with a way to automate that task.",
    linkedIn: "https://www.linkedin.com/in/saumitrapanchal/details/recommendations/",
    imgPath: "/assets/img/testimonial3.png",
  },
];
