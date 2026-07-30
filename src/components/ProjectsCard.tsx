import "./ProjectsCard.css"

interface ProjectsCardProps {
    image: string;
    title: string;
    description: string;
    skills: string[];
}

function ProjectsCard({ image, title, description, skills }: ProjectsCardProps) {
    return (
        <article className="project-card">
            <div className="card-img">
                <img src={image} alt={title} className="card-image" />
            </div>

            <div className="card-body">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>

                <div className="card-desc">
                    <p>{description}</p>
                </div>

                <div className="card-skills">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-badge">{skill}</span>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default ProjectsCard