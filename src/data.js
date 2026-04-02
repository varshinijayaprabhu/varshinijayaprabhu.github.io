// data.js
export const personalInfo = {
  name: "Varshini",
  role: "GeoAI Full Stack Intern",
  tagline: "I Design and develop Machine Learning & Full Stack application",
  email: "varshini.j.512004@gmail.com",
  github: "https://github.com/varshinijayaprabhu",
  linkedin: "https://www.linkedin.com/in/varshinij2004/",
};

export const aboutText = [
  "I am a GeoAI Full Stack Intern with a strong background in machine learning, data analysis, and data-driven application development.",
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
];

export const projects = [
  {
    title: "ForecastIQ - Weather Prediction Tool",
    category: "ML & Data Science Projects",
    description: [
      "Developed an interactive weather prediction app using Streamlit that predicts rainfall and temperature from 14 environmental parameters.",
      "Implemented Extra Trees Regressor and Classifier models achieving ~93% accuracy for rain occurrence and ~96% for temperature categorization.",
      "Integrated WHO air-quality metrics (PM2.5, PM10, NOx) to analyze their correlation with climate outcomes.",
      "Features a downloadable PDF report generation system and interactive data visualizations.",
    ],
    tags: ["Python", "Streamlit", "Machine Learning", "Extra Trees", "Pandas"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    github:
      "https://github.com/varshinijayaprabhu/ForecastIQ-Weather-Prediction-Tool",
    demo: "https://forecastiq-weather-prediction-tool-2025.streamlit.app/",
  },
  {
    title: "AQI Insight System - Air Pollution Monitoring",
    category: "Full-Stack Web Application",
    description: [
      "Built a real-time air quality monitoring system using FastAPI (Python) and React, integrating OpenWeatherMap for global data.",
      "Engineered an intelligent fallback mechanism storing 1°×1° grid data in PostgreSQL to ensure offline data availability.",
      "Designed an interactive Leaflet map interface featuring heatmaps, theme switching, and an animated sentiment mascot.",
      "Implemented a 3-tier architecture with rate-limited batch data fetching and historical trend analytics.",
    ],
    tags: ["FastAPI", "React", "PostgreSQL", "Leaflet.js", "Python"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    github:
      "https://github.com/varshinijayaprabhu/AQI-Insight-Hyperlocal-Air-Pollution-Monitoring-and-Advisory-System",
    demo: "#",
    status: "Ongoing",
  },
  {
    title: "MindSafe - Unified Safety Platform",
    category: "AI & Web Safety Hackathon Project",
    description: [
      "Developed a comprehensive web safety platform featuring an AI Safety Filter (Chrome Extension) and Mental Health Assistant.",
      "Implemented real-time content blocking and anonymous abuse reporting using React, Flask, and ML models from Hugging Face.",
      "Integrated a CBT-based conversational AI for emotional support and crisis intervention alerts.",
      "Hackathon project completed as part of Gateways 2k25 conducted by Christ University ",
    ],
    tags: ["React", "Flask", "AI/ML", "Hugging Face", "Chrome Extension"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    github: "https://github.com/varshinijayaprabhu/Mindsafe",
    demo: "#",
    status: "Hackathon",
  },
  {
    title: "AI-Powered Applicant Tracking System",
    category: "College Level Project",
    description: [
      "Built an intelligent resume parsing and matching system that extracts candidate details from PDF/DOCX files.",
      "Utilized Gemini LLM for structured data extraction and semantic matching against job descriptions.",
      "Implemented Explainable AI (XAI) to generate transparent ranking reports for transparency in hiring.",
      "Features a Python-based pipeline with JSON outputs for parsed data and match results.",
    ],
    tags: ["Python", "GenAI", "LLM", "NLP", "Flask"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    github: "https://github.com/varshinijayaprabhu/applicant_tracking_system",
    demo: "#",
    status: "College",
  },
  {
    title: "CO2 Emission Predictor - Internship Project",
    category: "Machine Learning Analysis",
    description: [
      "Developed ML models to analyze and predict vehicle CO2 emissions based on fuel consumption data.",
      "Implemented Linear Regression, Decision Trees, and KNN algorithms using Scikit-Learn to compare performance.",
      "Conducted extensive EDA and feature engineering on dataset containing engine size, cylinders, and fuel type.",
      "Achieved ~98% R2 score with Decision Tree model, optimizing for accurate environmental impact assessment.",
    ],
    tags: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Jupyter"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    github: "https://github.com/varshinijayaprabhu/CO2_emission_predictor",
    demo: "#",
    status: "Internship",
  },
];

export const publications = [
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
    title: "Intelligent AI-based Application Tracking System (ATS) with XAI",
    type: "Review Paper",
    status: "In Progress",
    abstract:
      "This paper introduces an intelligent Applicant Tracking System (ATS) that harnesses NLP and machine learning for automated resume parsing and candidate ranking. By integrating TF-IDF and BERT for semantic matching, the system generates precise Skill Match and Readiness Scores. A key innovation includes the use of Explainable AI (XAI) to provide transparent, interpretable reports on ranking logic, promoting fairness, accountability, and trust in automated hiring.",
    links: {},
  },
  {
    title:
      "Smart Home Security using IOT, Deep Learning and Block Chain Technologies",
    type: "Review Paper",
    status: "Published",
    abstract:
      "Presented at Krupadecon, this review explores the synergistic integration of IoT, Deep Learning, and Blockchain technologies to fortify smart home security architectures. It addresses critical vulnerabilities in current centralized systems and proposes a robust, decentralized framework. The study analyzes how these technologies collectively enhance threat detection, data integrity, and user privacy within modern automated home ecosystems.",
    links: {
      linkedin:
        "https://www.linkedin.com/posts/varshinij2004_my-first-research-paper-presented-krupadecon-activity-7179472510818668544-YzAY?utm_source=share&utm_medium=member_android&rcm=ACoAAEgF7NsBF35N8nAz1d8C9U3BqwaPlGIMU4M",
    },
  },
];

export const navLinks = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "publications", title: "Publications" },
  { id: "contact", title: "Contact" },
];
