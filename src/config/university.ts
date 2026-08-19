export const programmes = [
  "Certificate",
  "Diploma",
  "ND",
  "HND",
  "B.Sc",
  "B.A",
  "B.Ed",
  "B.Tech",
  "M.Sc",
  "MBA",
  "M.Phil",
  "PhD",
] as const;

export const faculties = [
  {
    name: "Faculty of Science",
    slug: "science",
    departments: [
      "Physics",
      "Mathematics",
      "Chemistry",
      "Computer Science",
      "Biology",
      "Statistics",
      "Microbiology",
    ],
  },
  {
    name: "Faculty of Engineering",
    slug: "engineering",
    departments: [
      "Software Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Chemical Engineering",
      "Mechatronics Engineering",
    ],
  },
  {
    name: "Faculty of Arts",
    slug: "arts",
    departments: [
      "English and Literary Studies",
      "History and International Studies",
      "Linguistics",
      "Philosophy",
      "Theatre Arts",
    ],
  },
  {
    name: "Faculty of Education",
    slug: "education",
    departments: [
      "Educational Management",
      "Guidance and Counselling",
      "Science Education",
      "Arts Education",
      "Human Kinetics",
    ],
  },
  {
    name: "Faculty of Law",
    slug: "law",
    departments: [
      "Public Law",
      "Private Law",
      "Commercial and Industrial Law",
      "International Law and Jurisprudence",
    ],
  },
  {
    name: "Faculty of Social Sciences",
    slug: "social-sciences",
    departments: [
      "Economics",
      "Political Science",
      "Psychology",
      "Sociology",
      "Mass Communication",
    ],
  },
  {
    name: "Faculty of Management Sciences",
    slug: "management-sciences",
    departments: [
      "Accounting",
      "Business Administration",
      "Banking and Finance",
      "Marketing",
      "Public Administration",
    ],
  },
  {
    name: "Faculty of Health Sciences",
    slug: "health-sciences",
    departments: [
      "Nursing Science",
      "Public Health",
      "Medical Laboratory Science",
      "Physiotherapy",
      "Human Anatomy",
    ],
  },
] as const;

export const academicRanks = [
  "Fresh Applicant",
  "Fresher",
  "Active Learner",
  "Department Scholar",
  "Faculty Champion",
  "University Legend",
  "Professor of Common Sense",
  "Chancellor of Knowledge",
] as const;
