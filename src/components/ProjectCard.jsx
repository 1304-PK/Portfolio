import "../styles/ProjectCard.css"

const ProjectCard = ({ image, title, description, tags, link }) => {
  return (
    <div className="project-card">
      <div className="project-card_image-wrapper">
        <img src={image} alt={title} className="project-card_image" />
      </div>
      
      <div className="project-card_content">
        <div className="project-card_header">
          <h3 className="project-card_title">{title}</h3>
          <a href={link} className="project-card_link" target="_blank" rel="noopener noreferrer">
            <svg className="project-card_arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        
        <p className="project-card_description">{description}</p>
        
        <div className="project-card_tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-card_tag">{tag}</span>
          ))} 
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;