import "./ProjectsCard.css"

export interface ProjectsCardProps {
    image: string;
    title: string;
    description: string;
    skills: string[];
    githubURL: string;
    liveURL?: string;
}

function ProjectsCard({ image, title, description, skills, githubURL, liveURL }: ProjectsCardProps) {
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

                <div className="card-actions" style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
                    {liveURL && (
                        <a
                            href={liveURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-demo"
                        >
                            Live Demo ↗
                        </a>
                    )}
                    <a
                        href={githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github"
                    >
                        GitHub ↗
                    </a>
                </div>  
            </div>
        </article>
    )
}

export default ProjectsCard