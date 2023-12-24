import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  docker,
  jenkins,
  bash,
  firebase,
  python,
  vmware,
  moogle,
  benzag_labs,
  kubernetes,
  expense_tracker,
  crown_clothing,
  maynooth,
  yelpcamp,
  deftIcon,
  trumindsIcon,
  flutterIcon,
  SwiftIcon,
  css,
  AngularIcon,
  CplusIcon,
  SqlIcon,
  MachineLearningIcon,
  DsaIcon,
  OperatingSystemIcon,
  ComputerNetworkIcon,
  BitbucketIcon,
  JiraIcon,
  SourcetreeIcon,
  AzureIcon,
  MatlabIcon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: creator,
  },
  {
    title: "iOS App Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Android App Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutterIcon,
  },
  {
    name: "SwiftUI",
    icon: SwiftIcon,
  },
  {
    name: "Angular",
    icon: AngularIcon,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C/C++",
    icon: CplusIcon,
  },
  {
    name: "SQL",
    icon: SqlIcon,
  },
  {
    name: "Data Structures And Algorithms",
    icon: DsaIcon,
  },
  // {
  //   name: "Machine Learning",
  //   icon: MachineLearningIcon,
  // },
  {
    name: "MATLAB",
    icon: MatlabIcon,
  },
  {
    name: "Azure",
    icon: AzureIcon,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "SDE - 1",
    company_name: "Truminds Software Systems",
    icon: trumindsIcon,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Worked with React, Reselect, Redux, Firebase, Razorpay Api, Node-Sass, SailsJS, REST Apis and MongoDB.",
      "Implemented state and async code management using redux and saga, dynamic loading SVG animation generator.",
      "Implemented server functionalities using best practies regarding REST api and sailsJS."
    ],
  },
  {
    title: "Software  Developer Intern",
    company_name: "Truminds Software Systems",
    icon: trumindsIcon,
    iconBg: "#383E56",
    date: "Jan 2023 - July 2023",
    points: [
      "Switched basic app framework from VueJS to ReactJS and implemented provided AdobeXD design Upgrades.",
      "Applied multi-threading using web-worker for reoccurring tasks on react.",
      "Implemented multiple lambda functions, ses templates for the company’s AWS server.",
      "Worked on optimising and increasing the page speed score of previously built applications",
    ],
  },
  {
    title: "Industrial Trainee",
    company_name: "Deft Organics Ltd.",
    icon: deftIcon,
    iconBg: "#383E56",
    date: "May 2022 - June 2022",
    points: [
      "Worked on super-collider to gather data using vdkcli and python scripting and creating charts to monitor data.",
      "Worked with python scripting to automate data collection through super-collider job which was previously done manually",
      "Worked with tools like wavefront, bigpanda, logz to monitor, maintain and remediate alerts for customer sddc’s"
    ],
  },
  // {
  //   title: "Member of Technicla Staff - 1",
  //   company_name: "VMware",
  //   icon: vmware,
  //   iconBg: "#E6DEDD",
  //   date: "July 2022 - Present",
  //   points: [
  //     "Worked on automating & patching activity for different components of the project using python and Jenkins.",
  //     "Day to day activities involved monitoring, remediating and escalating customer’s software defined data center alerts",
  //     "Authored RTS(Remediation & Troubleshooting Service) scripts which use python scripting for automating common day to day alerts triaging and remediation",
  //     "Developed and maintained monitoring capabilities for diffent aspects of the project like backup failure, vm snapshot analysis, cert expiry etc. using python and jenkins"
  //   ],
  // }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Yelp Camp",
    description:
      "A server side rendering website built for choosing campgrounds with technologies like jQuery, MongoDB, HTML, CSS, mongoose, passport, node, multer and other javascript libraries.",   
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "ejs",
        color: "orange-text-gradient",
      }
    ],
    image: yelpcamp,
    source_code_link: "https://github.com/neelesh17/YelpCamp",
  },
  {
    name: "Crown Clothing",
    description:
      "A client side rending e-commerce shopping website built using React, Redux, Firebase, HTML, Styled Component, NodeJS , Express, stripe for processing payments and react-lazy for optimising code",    
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: crown_clothing,
    source_code_link: "https://github.com/neelesh17/crown-clothing",
  },
  {
    name: "Maynooth Furniture",
    description:
      "A furniture purchasing site using React, Redux, Styled Component, Express, NodeJS, PassportJS, MongoDB, Stripe for payments and react-lazy for optimising code", 
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name:"styled-components",
        color: "orange-text-gradient",
      }
    ],
    image: maynooth,
    source_code_link: "https://github.com/neelesh17/Mayooth-Furniture",
  },
  {
    name: "Expense Tracker",
    description:
      "A Voice automated expense tracker made with the help of react, speechly and chartJS. It is also a Progressive Web App, thus it can also be install as an app in both android and IOS.", 
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "speechly",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      }
    ],
    image: expense_tracker,
    source_code_link: "https://github.com/neelesh17/Expense-Tracker",
  }
];

export { services, technologies, experiences, testimonials, projects };