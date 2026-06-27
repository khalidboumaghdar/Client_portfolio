export interface Experience {
  role: string;
  company: string;
  client?: string;
  period: string;
  responsibilities: string[];
  techStack?: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
}

export interface EducationItem {
  year: string;
  title: string;
  institution: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const PROFILE = {
  name: 'Fatima Ezzahra Adnibi',
  title: 'Data Analyst',
  tagline: 'Turning scattered data into dashboards people actually act on.',
  email: 'fatima.adnibi1997@gmail.com',
  phone: '0619709711',
  linkedin: 'https://www.linkedin.com/in/fatima-ezzahra-adnibi',
  location: 'Morocco',
};

export const METRICS = [
  { value: '3+', label: 'years in production BI' },
  { value: '2', label: 'enterprise clients' },
  { value: '15+', label: 'tools across the stack' },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Data Analyst',
    company: 'Cyclad Maroc',
    client: 'AXA GO',
    period: 'June 2025 — Present',
    responsibilities: [
      'Integrate data from Power BI and manual measurement sources',
      'Control integrity and quality of evidence and data provided',
      'Follow up and ensure integrity of documentation and strategic evidence',
      'Ensure continuity of issues and demands from users through to the L3 team',
      'Build and deliver reports, KPIs and intermediate scores from Power BI with Excel',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'Alten Delivery Center Morocco',
    client: 'Stellantis',
    period: 'June 2022 — June 2025',
    responsibilities: [
      'Created and maintained Power BI dashboards (DAX, ETL) for data visualization',
      'Collected and integrated data from multiple heterogeneous sources',
      'Detected anomalies in operational data and performed root cause analysis',
      'Supported and enhanced existing BI solutions in collaboration with business teams',
      'Designed new dashboards to meet specific user requirements',
      'Developed PySpark scripts in Jupyter Notebook to process large-scale data',
      'Automated data processes using Apache Airflow',
      'Developed and deployed machine learning models for predictive analytics and pattern recognition',
      'Implemented NLP techniques for text analysis and sentiment analysis on customer feedback data',
    ],
    techStack: ['PySpark', 'Python', 'SQL', 'Power BI', 'Hadoop', 'Apache Airflow', 'Jupyter Notebook', 'Machine Learning', 'NLP', 'TensorFlow', 'Scikit-learn', 'Statistical Analysis'],
  },
  {
    role: 'Final Year Project Intern',
    company: "CHU Ibn Sina Children's Hospital",
    period: 'April — September 2021',
    responsibilities: [
      'Implemented a decision-making and predictive solution for pharmaceutical data using Machine Learning and Deep Learning methods',
    ],
    techStack: ['Business Intelligence', 'Deep Learning', 'Machine Learning', 'Python', 'ARIMA', 'LSTM'],
  },
  {
    role: 'Academic Intern',
    company: 'GM-SOFT',
    period: 'August — September 2020',
    responsibilities: [
      "Designed and developed JBGERMAN OIL's e-commerce website using Scrum methodology, with front-end implementation in HTML/CSS",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Flower Species Identification',
    description: 'Convolutional neural network trained to classify flower species from images.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn'],
  },
  {
    title: 'AI-Powered Customer Service Chatbot',
    description: 'Conversational AI agent built to automate customer interactions and reduce response time.',
    tech: ['Python', 'NLTK', 'TensorFlow'],
  },
  {
    title: 'Video Game Sales Statistical Analysis',
    description: 'Statistical analysis of global video game sales trends across markets and platforms.',
    tech: ['R', 'Python', 'Pandas', 'Excel'],
  },
  {
    title: 'Inventory Management Mobile App',
    description: 'Mobile application for tracking and managing inventory in real time.',
    tech: ['Android Studio', 'Java', 'Firebase', 'SQLite'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    year: '2021',
    title: 'Data and Knowledge Engineering',
    institution: "School of Information Sciences (Ecole des Sciences de l'Information), Rabat",
  },
  {
    year: '2018',
    title: 'Classes préparatoires aux grandes écoles d\'ingénieurs (CPGE)',
    institution: 'Day Prépas, Beni Mellal',
  },
  {
    year: '2015',
    title: 'Baccalauréat in Physical Sciences',
    institution: 'Lycée Annasr, Beni Mellal',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  { label: 'Big Data', items: ['PySpark', 'Apache Spark', 'Hadoop'] },
  { label: 'Deep Learning', items: ['TensorFlow', 'Keras'] },
  { label: 'Machine Learning', items: ['Classification', 'Regression', 'Clustering'] },
  { label: 'Business Intelligence', items: ['Talend', 'Microsoft SQL Server', 'SSIS', 'SSAS'] },
  { label: 'Data Visualization', items: ['Power BI', 'Qlik Sense', 'Tableau'] },
  { label: 'Databases', items: ['SQL', 'MySQL'] },
  { label: 'Languages', items: ['Python', 'Java', 'JavaScript', 'PHP', 'PL/SQL'] },
  { label: 'Methods', items: ['Statistical Analysis', 'Operations Research', 'UML', 'Agile Scrum'] },
  { label: 'Mobile & Cloud', items: ['Android', 'Azure'] },
  { label: 'Document Management', items: ['Alfresco', 'Maarch Courier'] },
];

export const CERTIFICATIONS = ['HCIA-5G Course', 'HCIA-BIG DATA Course'];
export const LANGUAGES = ['French', 'English', 'Arabic'];
export const INTERESTS = ['Travelling', 'Music'];
export const OFFICE_TOOLS = ['Word', 'Excel', 'PowerPoint', 'LaTeX'];
