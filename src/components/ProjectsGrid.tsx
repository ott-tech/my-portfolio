import ProjectsCard from "./ProjectsCard";
import "./ProjectGrid.css"

const Projects_Data = [
    {
        image: "src/assets/bible-verse-generator.png",
        title: "Bible Verse Generator",
        description: "A beautiful and interactive Bible Verse Generator App built with HTML, CSS, and JavaScript - designed to help users discover random Bible verses, save favourites, and meditate daily, all within a calm, responsive, and faith-inspired interface.",
        skills: ["HTML", "CSS", "JavaScript"],
    },

    {
        image: "src/assets/interest-calculators.png",
        title: "Interest Calculator",
        description: "A simple, elegant calculator web app that helps you compute Simple Interest and Compound Interest with ease — built using HTML, CSS, and JavaScript.",
        skills: ["HTML", "CSS", "JavaScript"],
    },

    {
        image: "src/assets/weather.png",
        title: "Weather App",
        description: "A responsive weather dashboard built with React and the Open-Meteo API. Search any city, get real-time weather data, save your favourite locations, and switch between light and dark themes.",
        skills: ["HTML", "CSS", "JavaScript"],
    }
];

export const ProjectsGrid = () => {
    return (
        <div id="projects" className="projects-grid-container">
            {Projects_Data.map((project, index) => (
                <ProjectsCard key={index} 
                image={project.image}
                title={project.title}
                description={project.description}
                skills={project.skills}
                />
            ))}
        </div>
    );
};