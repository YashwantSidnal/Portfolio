import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import blog from "../assets/blog.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import c1 from "../assets/C1.png";
import a1 from "../assets/Amazon1.png";
import a2 from "../assets/Amazon2.png";
import a3 from "../assets/Amazon3.png";
import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import cc from "../assets/cc.jpg";
import hrd from "../assets/hrd.jpg";



export const navData = [
    { id: 1, path: "/", label: "Home" },
    { id: 2, path: "/about", label: "About" },
    { id: 3, path: "/projects", label: "Projects" },
];

export const socialLinks = [
    { name: "Github", icon: FaSquareGithub, link: "https://github.com/YashwantSidnal" },
    { name: "LinkedIn", icon: FaLinkedin, link: "http://linkedin.com/in/yashwant-sidnal" },
    { name: "X", icon: FaSquareXTwitter, link: "https://x.com/sidnal_yashwant/" },
];

export const projectsData =

    [
        {
            "image": [a1, a2, a3],
            "title": "Amazon Sales Analysis Dashboard",
            "description": "Developed an interactive Power BI dashboard to analyze sales KPIs, enabling data-driven insights. Recommended strategies to enhance customer satisfaction and optimize sales performance, identifying opportunities for a 10% increase in operational efficiency.",
            "skills": ["Power BI", "Excel", "Python"]
        },
        {
            "image": [hrd, h1, h2],
            "title": "HR Analytics Dashboard Project",
            "description": "Optimized a Power BI dashboard for analyzing HR data of 1,470 employees, highlighting key metrics like 16.1% attrition rate and $6.5K average salary. Discovered attrition patterns and visualized job satisfaction trends to drive organizational improvements.",
            "skills": ["Power BI", "SQL", "Excel"]
        },
        {
            "image": [cc, c1],
            "title": "Call Center Trends Analysis",
            "description": "Developed a Power BI dashboard to analyze call center performance, improving workforce management efficiency by 15%. Conducted data cleaning, exploration, and visualization to identify trends and actionable insights.",
            "skills": ["Power BI", "Python", "SQL"]
        },
    ]

export const experienceData = [
    {
        "company": "Unified Mentor Pvt. Ltd",
        "role": "Data Analyst Intern",
        "duration": "March 2024",
        "responsibilities": "Analyzed 4,410 employee records and $15M in sales data, delivering actionable insights. Built real-time Power BI dashboards, improving reporting efficiency by 30%. Cleaned, transformed, and analyzed data using SQL, Excel, and Python achieving 95% accuracy."
    }
];

export const educationData = [
    {
        "degree": "BE in Mechanical Engineering",
        "short": "BE",
        "institution": "SDM College of Engineering and Technology, Dharwad",
        "duration": "2019 - 2023",
    }
];

import {
    FaPython,
    FaMicrosoft,
} from "react-icons/fa6";
import {
    SiTableau,
    SiMysql,

    SiNumpy,
    SiPandas,
} from "react-icons/si";

import { BiBarChartSquare } from "react-icons/bi";

export const skillsData = [
    { name: "Power BI", icon: BiBarChartSquare },
    { name: "Tableau", icon: SiTableau },
    { name: "SQL", icon: SiMysql },
    { name: "Excel", icon: FaMicrosoft },
    { name: "Python", icon: FaPython },
    { name: "NumPy", icon: SiNumpy },
    { name: "Pandas", icon: SiPandas },

];
