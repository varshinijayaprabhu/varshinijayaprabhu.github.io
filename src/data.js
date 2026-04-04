// data.js
export const personalInfo = {
  name: "Varshini J",
  tagline: "I Design and develop Machine Learning & Full Stack application",
  email: "varshini.j.512004@gmail.com",
  github: "https://github.com/varshinijayaprabhu",
  linkedin: "https://www.linkedin.com/in/varshinij2004/",
};

export const aboutText = [
  "I have a strong background in machine learning, data analysis, and data-driven application development.",
  "My experience includes building predictive models, performing exploratory data analysis, and designing scalable software solutions around real-world datasets.",
  "I enjoy solving complex problems by combining analytical thinking with well-structured backend and application logic.",
  "I am motivated by building reliable, impactful systems that transform data into meaningful insights.",
];

export const skills = [
  {
    name: "Java",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "HTML",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Python",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Machine Learning",
    category: "AI/ML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Data Visualization",
    category: "Analytics",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Git",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Hugging Face",
    category: "Deployment",
    icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  },
  {
    name: "Streamlit",
    category: "Deployment",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
  },
  {
    name: "Render",
    category: "Deployment",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "GitHub Pages",
    category: "Deployment",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    category: "IDE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];

export const projects = [
  {
    title: "Carbon Pulse",
    category: "CO2 Emission Predictor with Machine Learning",
    description:
      "Carbon Pulse is an intelligent, machine learning–powered CO₂ emissions prediction platform developed with Flask and a custom web frontend. The application allows users to input key vehicle or industrial parameters and instantly predicts CO₂ emission values using a robust regression model trained on real-world datasets. It features a seamless, interactive web interface built with HTML, CSS, and JavaScript, providing clear visualizations and actionable insights. The backend leverages advanced data preprocessing and model deployment techniques to ensure reliable, real-time predictions. This project showcases end-to-end ML workflow implementation, full-stack integration, and the practical application of AI for environmental sustainability and awareness.",
    tags: [
      "Machine Learning",
      "CO₂ Emissions Prediction",
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Data Science",
      "Regression Model",
      "Web Application",
      "Environmental Analytics",
      "REST API",
      "Frontend-Backend Integration",
    ],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    github: "https://github.com/varshinijayaprabhu/CO2_emission_predictor",
    demo: "https://carbon-pulse.onrender.com/",
  },
  {
    title: "ForecastIQ",
    category: "Machine Learning & Weather Analytics",
    description:
      "ForecastIQ is an intelligent, machine learning–powered weather prediction platform developed with Streamlit. The tool enables users to input 14 environmental parameters—including location, meteorological data, and all six WHO air-quality indicators—to instantly predict rainfall, temperature, and weather categories. It features high-accuracy classifiers (ExtraTrees and XGBoost), a user-friendly web interface, and generates personalized, styled PDF weather reports. The project demonstrates end-to-end ML pipeline development, model benchmarking, and seamless integration of air quality data for enhanced weather forecasting.",
    tags: [
      "Machine Learning",
      "Weather Prediction",
      "Streamlit",
      "Python",
      "XGBoost",
      "ExtraTrees",
      "Air Quality Integration",
      "WHO Air Quality Metrics",
      "PDF Report Generation",
      "Data Science",
      "Environmental Analytics",
      "Model Benchmarking",
      "End-to-End ML Pipeline",
      "Interactive Web App",
      "scikit-learn",
      "Data Visualization",
    ],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    github:
      "https://github.com/varshinijayaprabhu/ForecastIQ-Weather-Prediction-Tool",
    demo: "https://forecastiq-weather-prediction-tool-2025.streamlit.app/",
  },
  {
    title: "AQI Insight",
    category: "Air Quality Analytics & Visualization Platform",
    description:
      "AQI Insight is a comprehensive air quality analytics platform designed to monitor, analyze, and visualize real-time and historical air quality data across India. Built with a modern React frontend and a robust Python backend, the tool aggregates data from multiple sources, including government APIs and OpenWeatherMap, to provide users with up-to-date AQI readings, pollutant breakdowns, and health advisories. Key features include interactive dashboards, historical trend analytics, and a news feed for environmental updates. The project showcases full-stack development, API integration, data visualization, and the application of analytics for actionable environmental insights.",
    tags: [
      "Air Quality Index (AQI)",
      "Environmental Analytics",
      "Data Visualization",
      "Real-time Monitoring",
      "Historical Data Analysis",
      "React.js",
      "Python Backend",
      "REST API Integration",
      "OpenWeatherMap API",
      "Government AQI Data",
      "Health Advisory",
      "Interactive Dashboard",
      "Full-Stack Development",
      "Data Aggregation",
      "Pollution Monitoring",
      "Environmental News Feed",
      "User Experience (UX)",
      "Data-driven Insights",
      "Modern Web Application",
      "India Air Quality",
    ],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    github:
      "https://github.com/varshinijayaprabhu/AQI-Insight-Hyperlocal-Air-Pollution-Monitoring-and-Advisory-System",
    demo: "#",
    status: "Ongoing",
  },
  {
    title: "MindSafe",
    category: "AI-Powered Web Safety & Mental Health Platform",
    description:
      "MindSafe is an innovative, AI-driven unified safety platform developed for the Gateways 2k25 hackathon at Christ University. The platform combines a powerful AI Safety Filter (Chrome Extension) with a dedicated Mental Health Assistant to create a secure online environment. It leverages React and Flask, integrating machine learning models from Hugging Face for real-time toxic content blocking and anonymous abuse reporting. The system also features a CBT-based conversational AI designed to provide emotional support and trigger crisis intervention alerts. MindSafe represents a fusion of web security and psychological well-being, utilizing modern AI to protect and support users in the digital age.",
    tags: [
      "AI Safety Filter",
      "Mental Health Assistant",
      "Chrome Extension",
      "Machine Learning",
      "Hugging Face",
      "CBT-based AI",
      "Real-time Content Blocking",
      "Toxic Content Detection",
      "Abuse Reporting System",
      "React.js",
      "Flask Backend",
      "Conversational AI",
      "Crisis Intervention",
      "Web Security",
      "Emotional Support AI",
      "Python",
      "Full-Stack Development",
      "Hackathon Project",
      "Mental Well-being",
      "AI Ethics",
    ],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    github: "https://github.com/varshinijayaprabhu/Mindsafe",
    demo: "#",
    status: "Hackathon",
  },
  {
    title: "DataGuard",
    category: "AI-Driven Data Quality & Remediation Platform",
    description:
      "DataGuard is a comprehensive, AI-powered platform designed to ensure data integrity, quality, and compliance for modern organizations. Built with a robust React frontend and a scalable Flask backend, DataGuard streamlines the entire data lifecycle—from ingestion and validation to remediation and reporting. The platform features advanced rule-based and machine learning-driven data profiling, automated data cleaning, and real-time quality monitoring. With seamless integration to cloud databases and support for custom validation rules, DataGuard empowers teams to detect anomalies, enforce data standards, and generate actionable reports. Its modular architecture and intuitive dashboard make it ideal for enterprises seeking to automate data governance and maintain high-quality datasets.",
    tags: [
      "Data Ingestion & Profiling",
      "Automated Data Validation",
      "Rule Engine for Custom Quality Checks",
      "AI-Powered Data Remediation",
      "Real-Time Quality Monitoring",
      "Comprehensive Reporting & PDF Export",
      "React.js Frontend",
      "Flask Backend",
      "Modular, Scalable Architecture",
      "Cloud Integration",
      "Python",
      "JavaScript",
      "Full-Stack Development",
      "Data Governance & Compliance",
      "Hackathon-Ready Solution",
      "User-Friendly Dashboard",
      "Open Source & Extensible",
    ],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    github: "https://github.com/varshinijayaprabhu/data_quality_framework",
    demo: "https://varshinijayaprabhu-data-quality-and-trustability-80a0704.hf.space/",
    status: "Ongoing",
  },
];

export const publications = [
  {
    title:
      "Smart Home Security using IOT, Deep Learning and Block Chain Technologies",
    type: "Review Paper",
    status: "Published",
    abstract:
      "Presented at Krupadecon, this review explores the synergistic integration of IoT, Deep Learning, and Blockchain technologies to fortify smart home security architectures. It addresses critical vulnerabilities in current centralized systems and proposes a robust, decentralized framework. The study analyzes how these technologies collectively enhance threat detection, data integrity, and user privacy within modern automated home ecosystems.",
    links: {
      journal:
        "https://www.propulsiontechjournal.com/index.php/journal/article/view/3849",
    },
  },
  {
    title:
      "ML Framework for Rain and Temperature Forecasting Based on Meteorological and Air Quality Data",
    type: "Implementation Paper",
    status: "Publication On-going",
    abstract:
      "This research evaluates five machine learning algorithms, including Random Forest and XGBoost, for precise rainfall and temperature forecasting using the Indian Weather Repository and CPCB air quality data. Results indicate that Extra Trees achieved the lowest MSE for regression, while XGBoost and LightGBM exceeded 97% accuracy in classification. The study highlights the significant impact of incorporating pollutants like PM2.5 and uses SHAP for model interpretability.",
    links: {
      github:
        "https://github.com/varshinijayaprabhu/ForecastIQ-Weather-Prediction-Tool",
      demo: "https://forecastiq-weather-prediction-tool-2025.streamlit.app/",
    },
  },
  {
    title:
      "AQI-INSIGHT: Hyperlocal Air Pollution Monitoring and Advisory System",
    type: "Implementation Paper",
    status: "Published",
    abstract:
      "This research presents AQI-INSIGHT, a hyperlocal air pollution monitoring and advisory system that analyzes key pollutants such as PM2.5, PM10, NO₂, SO₂, O₃, and CO to compute the Air Quality Index (AQI). The platform provides real-time air quality insights through interactive geospatial visualization, historical trend analysis, and color-coded health indicators. Built using Python, FastAPI, and PostgreSQL, the system also integrates a fallback mechanism to ensure uninterrupted AQI availability during data outages.",
    links: {
      journal:
        "https://ijarety.in/admin/img/20_AQI-Insight%20Hyperlocal%20Air%20Pollution%20Monitoring%20and%20Advisory%20System.pdf",
    },
  },
];

export const experiences = [
  {
    company: "Prinston Smart Engineers",
    role: "Machine Learning Intern",
    duration: "May 2024 - June 2024",
    description:
      "During this intensive machine learning internship, I was trained on end-to-end ML methodologies, from data collection and preprocessing to model deployment. I was assigned the 'Carbon Pulse' problem statement, where I developed a robust CO₂ emission prediction platform. This project involved extensive exploratory data analysis (EDA), feature engineering on engine and fuel consumption datasets, and the implementation of regression algorithms to achieve high prediction accuracy. The experience culminated in the successful integration of the ML model into a functional web application, showcasing the practical application of AI in environmental analytics.",
    icon: "💼",
  },
  {
    company: "Gesix Solutions Private Limited",
    role: "Full Stack Intern",
    duration: "February 2026 - Ongoing",
    description:
      "Currently leading the 'Data Quality and Trustability' project team, where I architect and develop scalable full-stack solutions to ensure organizational data integrity. My role involves managing the complete development lifecycle, from high-performance React frontends to robust Flask backends. I lead a team of developers to implement automated data validation frameworks and real-time remediation systems, focusing on building high-trust data architectures that meet modern enterprise standards for reliability and compliance.",
    icon: "🚀",
  },
];

export const certifications = [

  {
    title: "Certificate of Publication",
    issuer: "IJARETY",
    fullName: "International Journal of Advanced Research in Education & Technology",
    description:
      'Awarded for the publication of the paper "AQI-Insight: Hyperlocal Air Pollution Monitoring and Advisory System" in IJARETY, Volume 13, Issue 2, March-April 2026. IJARETY is a bi-monthly, peer-reviewed, multidisciplinary, scholarly indexed open access journal with an Impact Factor of 8.152.',
    date: "March 2026",
    type: "Publication",
    icon: "📄",
    color: "#915eff",
    image: "/IJARETY.jpg",
  },
  {
    title: "Certificate of Participation",
    issuer: "Amity School of Engineering & Technology",
    fullName: "AI - WebForge 2026",
    description:
      "Awarded for participating in AI - WebForge 2026, organised by Amity School of Engineering & Technology (AMITY), Noida.",
    date: "2026",
    type: "Award",
    icon: "🌐",
    color: "#1d4ed8",
    image: "/WebForge.jpg",
  },
  {
    title: "Certificate of Participation",
    issuer: "InfoTechiezz",
    fullName: "ByteBattle 2026",
    description:
      "Participated in ByteBattle 2026 – The Ultimate Coding Showdown, organised by InfoTechiezz.",
    date: "2026",
    type: "Hackathon",
    icon: "💻",
    color: "#10b981",
    image: "/ByteBattle.jpg",
  },
  {
    title: "Certificate of Appreciation",
    issuer: "CMR Institute of Technology",
    fullName: "STACKATHON 2025",
    description:
      "Awarded for participating in the Stackathon, a hackathon on Full Stack Development organized by the Department of Computer Applications, CMRIT. Acknowledged for effort, teamwork, and enthusiasm.",
    date: "November 2025",
    type: "Hackathon",
    icon: "💻",
    color: "#0369a1",
    image: "/STACKATHON.jpeg",
  },
  {
    title: "Certificate of Participation",
    issuer: "GATEWAYS 2025",
    fullName: "GATEWAYS 2025 International-level IT Fest",
    description:
      "Participated in the GATEWAYS 2025 Hackathon, an International-level IT Fest, where the MindSafe project was developed. The event was conducted from 19th to 20th September 2025, organized by the Department of Computer Science, CHRIST (Deemed to be University), Bangalore.",
    date: "September 2025",
    type: "Fest",
    icon: "🎉",
    color: "#e81cff",
    image: "/GATEWAYS.jpg",
  },
  {
    title: "Developer Certification",
    issuer: "freeCodeCamp",
    fullName: "Front End Development Libraries",
    description:
      "Successfully completed the Front End Development Libraries Developer Certification, representing approximately 300 hours of work.",
    date: "August 2025",
    type: "Course",
    icon: "🔥",
    color: "#1d4ed8",
    image: "/FRONTEND.jpg",
  },
  {
    title: "Certificate of Presentation",
    issuer: "IEEE ICCCNT 2025",
    fullName:
      "16th International IEEE Conference on Computing, Communication and Networking Technologies",
    description:
      'Awarded for virtually presenting the paper "ML Framework for Rain and Temperature Forecasting Based on Meteorological and Air Quality Data" (Paper ID-8939) at ICCCNT 2025, held at IIT Indore, Madhya Pradesh, in association with IEEE Electronics Packaging Society and AICTE.',
    date: "July 2025",
    type: "Conference",
    icon: "🏛️",
    color: "#22d3ee",
    image: "/IEEE ICCCNT 2025.jpg",
  },
  {
    title: "Course Completion Certificate",
    issuer: "Infosys Springboard",
    fullName: "Machine Learning with Python 2022",
    description:
      "Awarded by Infosys Springboard for successfully completing the course 'Machine Learning with Python 2022'.",
    date: "June 2025",
    type: "Course",
    icon: "🧠",
    color: "#0284c7",
    image: "/ML.jpg",
  },
  {
    title: "Certificate of Completion",
    issuer: "Udemy",
    fullName: "Learn JAVA Programming - Beginner to Master",
    description:
      "Awarded for successfully completing the 61.5-hour course 'Learn JAVA Programming - Beginner to Master' instructed by Abdul Bari on Udemy.",
    date: "March 2025",
    type: "Course",
    icon: "☕",
    color: "#a855f7",
    image: "/JAVA.jpg",
  },
  {
    title: "Certificate of Acknowledgement",
    issuer: "Bharatiya Antariksh Hackathon 2025-ISRO",
    fullName: "Bharatiya Antariksh Hackathon 2025",
    description:
      "Awarded for successfully submitting the AQI-Insight idea for the Bharatiya Antariksh Hackathon 2025. This participation reflects innovation, curiosity, and commitment in solving real-world challenges of space and technology, advancing India's space innovation journey.",
    date: "2025",
    type: "Hackathon",
    icon: "🚀",
    color: "#ff4d4d",
    image: "/ISRO.jpeg",
  },
  {
    title: "Certificate of Internship",
    issuer: "Prinston Smart Engineers",
    fullName: "Internship in Machine Learning",
    description:
      "Awarded for completion of the internship in Machine Learning at Prinston Smart Engineers (May 2024 - June 2024).",
    date: "June 2024",
    type: "Internship",
    icon: "🎓",
    color: "#ff9800",
    image: "/PRINSTON.jpeg",
  },
  {
    title: "Outstanding Cloud 9 Collaborator",
    issuer: "Krupanidhi Degree College",
    fullName: "Outstanding Cloud 9 Collaborator Award (BCA Batch 2021-2024)",
    description:
      "Awarded for winning the coveted title of Outstanding Cloud 9 Collaborator for the BCA Batch 2021-2024 at Krupanidhi Degree College.",
    date: "2024",
    type: "Award",
    icon: "🏅",
    color: "#ffd700",
    image: "/CC.jpeg",
  },
  {
    title: "Outstanding Teamplayer",
    issuer: "Krupanidhi Degree College",
    fullName: "Outstanding Teamplayer Award (BCA Batch 2021-2024)",
    description:
      "Awarded for winning the coveted title of Outstanding Teamplayer for the BCA Batch 2021-2024 at Krupanidhi Degree College.",
    date: "2024",
    type: "Award",
    icon: "🤝",
    color: "#ff8c00",
    image: "/TP.jpeg",
  },
  {
    title: "Certificate of Appreciation",
    issuer: "KrupaDecon 2023",
    fullName:
      "International Conference on Global Readiness To Adapt To The Futuristic Reality: PLAN-PREPARE-PERFORM",
    description:
      'Awarded for participation and excellent research presented through the paper "Smart Home Security Using IoT" under the Information and Technology track at KrupaDecon 2023, organized by Krupanidhi Degree College, Bengaluru, India, on 21st July 2023.',
    date: "July 2023",
    type: "Conference",
    icon: "🎓",
    color: "#f59e0b",
    image: "/KRUPADECON.jpeg",
  },
  {
    title: "Diploma in Computer Applications",
    issuer: "Softech Computer Education Center",
    fullName: "Diploma in Computer Applications",
    description:
      "Awarded for successfully completing a course on Diploma in Computer Applications with Grade A+ (Outstanding), conducted from July 2021 to Oct 2021 at Softech Computer Education Center, Bangalore.",
    date: "October 2021",
    type: "Course",
    icon: "💻",
    color: "#3b82f6",
    image: "/DCA.jpeg",
  },
];

export const education = [
  {
    institution: "CMR Institute of Technology (CMRIT)",
    degree: "Masters of Computer Application (MCA)",
    duration: "2024 - 2026 (Ongoing)",
    grade: "Current CGPA: 9.15",
    image: "/CMRIT.jpeg",
    icon: "🎓",
  },
  {
    institution: "Krupanidhi Degree College",
    degree: "Bachelor of Computer Application (BCA)",
    duration: "2021 - 2024",
    grade: "CGPA: 9.15",
    image: "/KRUPANIDHI.jpeg",
    icon: "🎓",
  },
  {
    institution: "Ujjval Vidyalaya School and Composite PU College",
    degree: "Schooling & Pre-University (PU)",
    duration: "",
    grade: "Passed out School - 2019\nPassed out PU - 2021",
    image: "/UJJVAL.jpeg",
    icon: "🏫",
  },
];

export const navLinks = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "publications", title: "Publications" },
  { id: "education", title: "Education" },
  { id: "experience", title: "Experience" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];
