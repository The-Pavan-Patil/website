export const navItems = [
  { name: "About", link: "#About" },
  { name: "Skills", link: "#skill" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Weaving Magic into Every Project",
    description: "I'm the Patronus of Productivity,",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Patient Monitoring System using AI",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Developers Portfolio",
    des: "Portfolio which you are using is my personal favourite project.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "/https://github.com/The-Pavan-Patil/PavansPortfolio",
  },
  {
    id: 2,
    title: "Sonai Engineering & Services",
    des: "The website is built for a company which provides various engineering services.",
    img: "sonai_full.svg",
    iconLists: ["re.svg", "tail.svg", "ts.svg", "mongo.svg", "node.svg"],
    link: "https://www.sonaiengineering.in",
  },
  {
    id: 3,
    title: "Warehouse Mangement System Backend",
    des: "It is a Warehouse Management System backend built using Nodejs and Expressjs.",
    img: "/warehouse.svg",
    iconLists: ["expressjs.svg", "node.svg", "mongo.svg"],
    link: "https://warehouse-tglv.onrender.com/",
  },
  {
    id: 4,
    title: "VitaLink",
    des: "It is a IoT based Patient Monitoring system which helps the doctors to monitor the patient's health in real time.",
    img: "/doctor.svg",
    iconLists: ["flutter.svg", "Python.svg"],
    link: "https://github.com/The-Pavan-Patil/MyApp",
  },
];

export const companies = [
  {
    id: 1,
    name: "DRDO",
    img: "/drdo.svg",
    nameImg: "/drdo.svg",
  },
  {
    id: 2,
    name: "Sonai Engineering & Services",
    img: "/sonai.svg",
    nameImg: "/sonai_full.svg",
  },
];
export const workExperience = [
  {
    id: 1,
    title: "Project Intern",
    company: "Defence research and development oraganisation, Pune ",
    desc: "I developed a high-performance backend system that deployed LiDAR object detection models on an Express.js server, achieving response times of under 100 milliseconds for real-time defense surveillance applications. Using the Ouster SDK, I integrated LiDAR data acquisition in Python, processing over 10GB of point cloud data daily and optimizing data format conversion to ensure seamless integration with the Express.js backend while maintaining 95% data accuracy. I also implemented RESTful APIs to serve processed LiDAR detection results to frontend visualization systems, enabling real-time analysis and tracking of more than 50 concurrent objects in defense scenarios. Additionally, I optimized the data transfer pipeline between the Python-based machine learning module and the Node.js backend, reducing data latency by 60% and ensuring robust, real-time performance with fail-safe mechanisms critical to defense operations.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full stack developer",
    company: "Sonai Engineeiring and Services, Pune",
    desc: "I engineered a comprehensive workforce management system for an MEP firm using React.js, TypeScript, Node.js, and MongoDB, enabling efficient real-time tracking of over 100 workers across multiple construction sites. The system featured intelligent payroll automation with configurable overtime rates (ranging from 1.5x to 5x) and Excel export functionality, reducing payroll processing time by 75% and eliminating manual calculation errors. I also built an advanced attendance tracking system that automated check-in/check-out processes and performed real-time overtime calculations, achieving 99.9% accuracy in computing working hours and performance analytics. To enhance usability, I implemented a dual-interface architecture that included a protected admin panel for workforce management and a public portfolio showcase displaying the company’s MEP projects, expertise, and client testimonials, all within a responsive design and secured by authentication middleware. Additionally, I designed a RESTful API architecture supporting comprehensive CRUD operations, robust data validation, and secure endpoints for labour, site, and portfolio management, ensuring reliable and protected data access across the system.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/The-Pavan-Patil",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/The_Pavan_Patil",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/thepavanpatilofficial",
  },
];
