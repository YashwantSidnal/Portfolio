import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import blog from "../assets/blog.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import cs from "../assets/cs.jpg";




import weather from "../assets/weather.png";

export const navData = [
    { id: 1, path: "/", label: "Home" },
    { id: 2, path: "/about", label: "About" },
    { id: 3, path: "/projects", label: "Projects" },
];

export const socialLinks = [
    { name: "Github", icon: FaSquareGithub, link: "https://github.com/Abhishek-Sidnal" },
    { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/apsidnal/" },
    { name: "X", icon: FaSquareXTwitter, link: "https://x.com/apsidnal/" },
    { name: "Instagram", icon: FaInstagramSquare, link: "https://www.instagram.com/apsidnal/" },
];

export const projectsData =

    [
        {
            "image": [],
            "title": "Amazon Sales Analysis Dashboard",
            "description": "Developed an interactive Power BI dashboard to analyze sales KPIs, enabling data-driven insights. Recommended strategies to enhance customer satisfaction and optimize sales performance, identifying opportunities for a 10% increase in operational efficiency.",
            "skills": ["Power BI", "Excel", "Python"]
        },
        {
            "image": [],
            "title": "HR Analytics Dashboard Project",
            "description": "Optimized a Power BI dashboard for analyzing HR data of 1,470 employees, highlighting key metrics like 16.1% attrition rate and $6.5K average salary. Discovered attrition patterns and visualized job satisfaction trends to drive organizational improvements.",
            "skills": ["Power BI", "SQL", "Excel"]
        },
        {
            "image": [],
            "title": "Call Center Trends Analysis",
            "description": "Developed a Power BI dashboard to analyze call center performance, improving workforce management efficiency by 15%. Conducted data cleaning, exploration, and visualization to identify trends and actionable insights.",
            "skills": ["Power BI", "Python", "SQL"]
        },
        {
            "image": [],
            "title": "PwC Virtual Internship - Power BI Developer",
            "description": "Created a call center analysis report to evaluate performance trends, achieving a 3.4/5 customer rating. Designed churn analysis for 7,043 customers using charts and DAX functions, resulting in a 26.54% churn rate and enabling data-driven decision-making.",
            "skills": ["Power BI", "DAX", "Data Analysis"]
        }
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
        "description": "Graduated with a focus on data analytics and visualization, acquiring expertise in tools like Power BI, Tableau, SQL, and Python."
    }
]; 