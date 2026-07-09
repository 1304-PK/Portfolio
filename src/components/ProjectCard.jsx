import { useEffect, useRef, useState } from "react";
import "../styles/ProjectCard.css"

const ProjectCard = ({ image, title, liveUrl, githubUrl, description, techStack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={`project-card ${isVisible ? "is-visible" : ""}`}>
      <div className="project-img-wrapper"><img src={image} alt="" className="project-img" /></div>
      <div className="project-details">
        <div className="details-header">
          <h1 className="project-title">{title}</h1>
          <div className="project-links">
            <a className="project-live-link" href={liveUrl} target="_blank" rel="noopener norefferer">Live</a>
            <a className="project-github-link" href={githubUrl} target="_blank" rel="noopener norefferer">Github</a>
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