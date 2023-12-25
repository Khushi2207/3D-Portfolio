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
  MatlabIcon,
  BusManagement,
  MovieRecommendation,
  TrumindsProject1,
  TrumindsProject2,
  bvn,
  manit
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
    id: "education",
    title: "Education",
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
    company_name: "Truminds Software Systems, Bengaluru",
    icon: trumindsIcon,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Developed iOS app using Swift UI and Android app using Flutter for real client projects.",
      "Managed various aspects of app development, including designing the user interface and integrating APIs.",
      "Fixed bugs and made improvements based on client feedback and demo sessions.",
      "Used tools like Azure, Bitbucket, Jira, Android Studio and Xcode for effective project development."
    ],
  },
  {
    title: "Software  Developer Intern",
    company_name: "Truminds Software Systems, Bengaluru",
    icon: trumindsIcon,
    iconBg: "#383E56",
    date: "Feb 2023 - July 2023",
    points: [
      "Developed web application built in Angular to improve remote Educational document verification.",
      "I took care of different parts of making the website, especially how it looks and works with other systems  and integrating APIs.",
      "Utilized tools such as GitHub, Visual Studio Code, and Mobaxterm, along with cutting-edge technologies, to ensure efficient and effective project development."
    ],
  },
  {
    title: "Industrial Trainee",
    company_name: "Deft Organics Ltd.",
    icon: deftIcon,
    iconBg: "#383E56",
    date: "May 2022 - June 2022",
    points: [
      "Explored membrane separation technologies through research and investigation.",
      "Collaborated within a team and operated machinery, including a weighting machine, muffle furnace and ball mill.",
      "Learned how to make membranes, figured out ways to test and understand them better, and did hands-on tasks like pouring paste, sintering, and ultrasonic cleaning."
    ],
  },
];

const educations = [
  {
    title: "B.Tech. in Chemical Engg",
    company_name: "NIT Bhopal",
    icon: manit,
    iconBg: "#383E56",
    date: "2019 - 2023",
    points: [
      "CGPA - 8.81"
    ],
  },
  {
    title: "Higher Secondary",
    company_name: "Bhartiyam Vidya Niketan, Gwalior",
    icon: bvn,
    iconBg: "#383E56",
    date: "2018",
    points: [
      "Percentage - 88",
    ],
  },
  {
    title: "Senior Secondary",
    company_name: "Bhartiyam Vidya Niketan, Gwalior",
    icon: bvn,
    iconBg: "#383E56",
    date: "2016",
    points: [
      "CGPA - 10.0"
    ],
  },
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
    name: "iOS Platform VPN Application",
    description:
      "It is VPN application with key functionality of supporting multiple network interfaces with detailed real-time statistics of speed, responsiveness, data usage, connection logs and customized VPN settings for account management, server selection, network preferences, location access and multilingual support.",   
    tags: [
      {
        name: "SwiftUI",
        color: "blue-text-gradient",
      },
      // {
      //   name: "SourceTree",
      //   color: "green-text-gradient",
      // },
      {
        name: "XCode",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "green-text-gradient",
      },
      {
        name:"Bitbucket",
        color: "orange-text-gradient",
      },
    ],
    image: TrumindsProject1,
    //source_code_link: "https://github.com/neelesh17/YelpCamp",
  },
  {
    name: "Automated BG Verification System",
    description:
      "The purpose of this website is to improve remote Educational document verification, providing the flexible mode of mapping the various verification data points with the Issuing Authority data points with Batch mode feature to further enhance efficiency by enabling smart verification in bulk.",    
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "FrontEnd Developement",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: TrumindsProject2,
    //source_code_link: "https://github.com/neelesh17/crown-clothing",
  },
  {
    name: "Movie Recommender System",
    description:
      "Used Content-based ML algorithm to recommend movies to a user from dataset of 5000 movies from the TMDB site, As the user provides more inputs or takes actions on the recommender, the engine becomes more accurate.", 
    tags: [
      {
        name: "Text Vectorization",
        color: "blue-text-gradient",
      },
      {
        name:"Jupyter Notebook",
        color: "orange-text-gradient",
      },
      {
        name: "Cosine distance",
        color: "green-text-gradient",
      },
      {
        name:"Machine Learning",
        color: "orange-text-gradient",
      },
      {
        name:"Python",
        color: "pink-text-gradient",
      },
      
    ],
    image: MovieRecommendation,
    source_code_link: "https://movie-recommendation-system-7ver.onrender.com/",
  },
  {
    name: "Bus Reservation System",
    description:
      "Used OOPS and File handling concepts for performing various functions like adding/displaying/updating/searching/ deleting bus records, displaying routes of buses, and seats renew.", 
      tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "File handline",
        color: "green-text-gradient",
      },
      {
        name: "Object-Oriented Programming (OOP)",
        color: "pink-text-gradient",
      }
    ],
    image: BusManagement,
    source_code_link: "https://github.com/Khushi2207/Bus-Reservation-System",
  }
];

export { services, technologies, experiences, testimonials, projects , educations};