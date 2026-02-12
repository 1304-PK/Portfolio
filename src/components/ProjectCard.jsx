import React, { useState } from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({title, image, description, link}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick={handleFlip}>
      <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
  
        <div className="card-face card-front">
          <h2>{title}</h2>
        </div>

        <div className="card-face card-back">
          <img className='project-img' src={image} alt="" />
          <div className="project-details">
            <h1 className="project-title">{title}</h1>
            <p className="project-description">{description}</p>
            <p><a href={link} target='_blank' className="github-link">Github</a></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;