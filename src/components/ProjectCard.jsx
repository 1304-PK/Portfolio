import "../styles/ProjectCard.css"

const ProjectCard = ({ image, title, liveUrl, githubUrl, description, techStack }) => {
  return (
    <div className="project-card">
      <div className="project-img-wrapper"><img src={image} alt="" className="project-img" /></div>
      <div className="project-details">
        <div className="details-header">
          <h1 className="project-title">{title}</h1>
          <div className="project-links">
            <a className="project-live-link" href={liveUrl}>Live</a>
            <a className="project-github-link" href={githubUrl} >Github</a>
          </div>
        </div>
        <p className="project-description">{description}</p>
        <div className="project-tech-stack">
          {techStack.map((item, index) => {
            return (
              <div className="project-tech-stack-item" key={index}>{item}</div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard