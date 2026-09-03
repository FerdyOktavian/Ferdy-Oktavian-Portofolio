export const about = {
  title: "A little about me.",
  paragraphs: [
    "I'm an Informatics graduate from Universitas Gunadarma. I enjoy starting new projects, experimenting with different kinds of software, and learning by actually building things.",
    "My interests move across machine learning, computer vision, web development, game development, full-stack development, and data science. I don't really like staying in one box — if something looks interesting, I usually want to try building it.",
  ],
};

export const education = [
  {
    period: "2022 — 2026",
    institution: "Universitas Gunadarma",
    degree: "Bachelor's Degree in Informatics",
    location: "Jakarta, Indonesia",
  },
];

export const experiences = [
  {
    role: "Laboratory Assistant & Instructor",
    institution: "Universitas Gunadarma",
    place: "Computer Informatics Laboratory",
    description:
      "Assisted students during practical computer laboratory sessions, explained programming and course materials, and supported teaching activities in the laboratory.",
  },
];
export type Project = {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  technologies: string[];
  images: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "SawitVision",
    shortTitle: "Machine Learning / Computer Vision",
    description:
      "A web-based system for classifying palm oil fruit ripeness from digital images using a Convolutional Neural Network with EfficientNetV2S.",
    technologies: ["Python", "CNN", "EfficientNetV2S", "Computer Vision"],
    images: [
      "/projects/sawit-home.JPG",
      "/projects/sawit-predict2.JPG",
      "/projects/sawit-about.JPG",
    ],
    github: "https://github.com/FerdyOktavian/klasifikasi_sawit_efficientNetV2",
  },

  {
    number: "02",
    title: "Beyond The Riddle",
    shortTitle: "Desktop Game",
    description:
      "A 2D interactive quiz game developed with Unity Engine, combining platforming elements with a question-based progression system.",
    technologies: ["Unity", "C#", "Game Development"],
    images: ["/projects/beyond-gameplay.JPG", "/projects/beyond-menu.JPG"],
  },

  {
    number: "03",
    title: "BerhentiSekarang",
    shortTitle: "Web Development",
    description:
      "An informational website designed to communicate the health and financial impact of smoking through visual information and interactive content.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    images: ["/projects/smoking-home.png"],
  },

  {
    number: "04",
    title: "Sahabat Kecantikan",
    shortTitle: "Web Application",
    description:
      "A beauty clinic management website created to provide clinic information, treatment services, doctor information, and other supporting features.",
    technologies: ["PHP", "Web Development", "Database"],
    images: ["/projects/clinic-home.png"],
  },

  {
    number: "05",
    title: "Real-Time Object Detection",
    shortTitle: "Computer Vision",
    description:
      "A real-time object detection application using a pretrained YOLO model to identify multiple objects from a live camera feed.",
    technologies: ["Python", "YOLO", "OpenCV", "Ultralytics"],
    images: ["/projects/yolo-detection.jpeg"],
  },
];
export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "C++", "PHP", "Go"],
  },
  {
    title: "Web Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Laravel",
      "CodeIgniter",
    ],
  },
  {
    title: "Machine Learning & Computer Vision",
    items: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "EfficientNetV2",
      "YOLO",
      "OpenCV",
    ],
  },
];

export const interests = [
  "Artificial Intelligence",
  "Data Science",
  "Game Development",
  "Full-stack Development",
  "Computer Vision",
  "Deep Learning",
];
export type Certification = {
  title: string;
  subtitle?: string;
  issuer?: string;
  year?: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Dasar Perancangan Aplikasi Web",
    subtitle: "Basic Web Application Design",
  },
  {
    title: "Dasar Pemrograman Berbasis Desktop",
    subtitle: "Fundamental Desktop Programming",
  },
  {
    title: "Dasar Pemrograman Berbasis Web",
    subtitle: "Fundamental Web Programming",
  },
  {
    title: "Pemrograman Go untuk Tingkat Pemula",
    subtitle: "Go-Lang for Beginner",
  },
  {
    title: "Pemrograman Go untuk Tingkat Menengah",
    subtitle: "Go-Lang for Intermediate",
  },
  {
    title: "Pemrograman Visual Basic .NET untuk Tingkat Menengah",
    subtitle: "Visual Basic .NET for Intermediate",
  },
  {
    title: "Membangun Website Menggunakan HTML 5",
    subtitle: "Building Website using HTML 5",
  },
  {
    title: "Fundamentals of Cloud Computing and Networking Administration",
    issuer: "Alibaba Cloud — Digital Talent Scholarship",
  },
];
export const contact = {
  email: "muhammadferdisp33@gmail.com",
  location: "Jakarta, Indonesia",

  socials: [
    {
      name: "GitHub",
      username: "FerdyOktavian",
      url: "https://github.com/FerdyOktavian",
    },
    {
      name: "LinkedIn",
      username: "Muhammad Ferdy Oktavian",
      url: "https://www.linkedin.com/in/muhammad-ferdy-oktavian-876baa320/",
    },
  ],
};