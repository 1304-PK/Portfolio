import "./styles/Portfolio.css"
import { useEffect, useMemo, useRef, useState } from "react";
import Snowfall from "react-snowfall";
import OrbitingCircle from "./components/OrbitingCircle";
import { File, icons, Search, Settings } from "lucide-react"

import { OrbitingCircles } from "@/components/ui/orbiting-circles"

// IMPORT ICONS
import cpp from "./assets/icons/cpp.svg";
import express from "./assets/icons/express.png";
import github from "./assets/icons/github.png";
import nodejs from "./assets/icons/nodejs.svg";
import python from "./assets/icons/python.svg";
import react from "./assets/icons/react.svg";
import tailwind from "./assets/icons/tailwind.svg";
import postgresql from "./assets/icons/postgresql.svg"
import mongodb from "./assets/icons/mongodb.svg"
import git from "./assets/icons/git.svg"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

// IMPORT COMPONENTS
import ProjectCard from "./components/ProjectCard";
import SkillTile from "./components/SkillTile";

// IMPORT IMAGES
import civic_care from "./assets/civic_care.png"
import ytstack from "./assets/ytstack.png"

const PROJECTS = [
  {
    image: civic_care,
    title: "Civic Care",
    liveUrl: "dummy",
    githubUrl: "dummy",
    description: "this is an apt description for this project",
    techStack: ["React", "Node", "Express", "MySQL"]
  },
  {
    image: ytstack,
    title: "YT Stack",
    liveUrl: "dummy",
    githubUrl: "dummy",
    description: "this is an apt description for this project",
    techStack: ["React", "Node", "Express", "MySQL"]
  }
]

const SKILLS = [
  { image: cpp, title: "Cpp" },
  { image: express, title: "Express" },
  { image: github, title: "Github" },
  { image: nodejs, title: "Nodejs" },
  { image: python, title: "Python" },
  { image: react, title: "React" },
  { image: mongodb, title: "Mongodb" },
  { image: tailwind, title: "Tailwind" },
  { image: postgresql, title: "Postgresql" },
  { image: git, title: "Git" }
]

const orbitSkills = [
  { image: cpp, title: "Cpp" },
  { image: nodejs, title: "Nodejs" },
  { image: python, title: "Python" },
  { image: react, title: "React" },
  { image: mongodb, title: "Mongodb" },
  { image: tailwind, title: "Tailwind" },
  { image: postgresql, title: "Postgresql" },
  { image: git, title: "Git" }
]

const flyingSpriteModules = import.meta.glob(
  "./assets/sprites/flying/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, import: "default" }
);

const stillSpriteModules = import.meta.glob(
  "./assets/sprites/*still*.{png,jpg,jpeg,webp,gif}",
  { eager: true, import: "default" }
);

const stillDirectorySpriteModules = import.meta.glob(
  "./assets/sprites/still/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, import: "default" }
);

const sleepSpriteModules = import.meta.glob(
  "./assets/sprites/*sleep*.{png,jpg,jpeg,webp,gif}",
  { eager: true, import: "default" }
);

const sortSpritePaths = (spriteObject) =>
  Object.entries(spriteObject)
    .sort(([pathA], [pathB]) =>
      pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: "base" })
    )
    .map(([, spritePath]) => spritePath);

const Portfolio = () => {
  const getScreenCenter = () => ({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [cursorPosition, setCursorPosition] = useState(getScreenCenter);
  const [spritePosition, setSpritePosition] = useState(getScreenCenter);
  const [frameIndex, setFrameIndex] = useState(0);
  const [isChasing, setIsChasing] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);
  const cursorPositionRef = useRef(getScreenCenter());
  const isChasingRef = useRef(false);

  const flyingFrames = useMemo(() => sortSpritePaths(flyingSpriteModules), []);
  const stillFrames = useMemo(
    () => [...new Set([...sortSpritePaths(stillSpriteModules), ...sortSpritePaths(stillDirectorySpriteModules)])],
    []
  );
  const sleepFrames = useMemo(() => sortSpritePaths(sleepSpriteModules), []);

  const stillSprite = stillFrames[0] ?? flyingFrames[0] ?? "";
  const sleepSprite = sleepFrames[0] ?? stillSprite;
  const stillRadius = 150;
  const chaseStartRadius = 160;

  useEffect(() => {
    const handleMouseMove = (event) => {
      const nextPosition = { x: event.clientX, y: event.clientY };
      cursorPositionRef.current = nextPosition;
      setCursorPosition(nextPosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const center = getScreenCenter();
      cursorPositionRef.current = center;
      setCursorPosition(center);
      setSpritePosition(center);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setSpritePosition((previousPosition) => {
        if (isSleeping) {
          return previousPosition;
        }

        const deltaX = cursorPositionRef.current.x - previousPosition.x;
        const deltaY = cursorPositionRef.current.y - previousPosition.y;
        const distance = Math.hypot(deltaX, deltaY);

        const shouldStartChasing = distance > chaseStartRadius;
        const shouldStopChasing = distance <= stillRadius;

        if (!isChasingRef.current && shouldStartChasing) {
          isChasingRef.current = true;
          setIsChasing(true);
        } else if (isChasingRef.current && shouldStopChasing) {
          isChasingRef.current = false;
          setIsChasing(false);
        }

        if (!isChasingRef.current) {
          return previousPosition;
        }

        const movementStep = Math.min(distance, 3.5);
        return {
          x: previousPosition.x + (deltaX / distance) * movementStep,
          y: previousPosition.y + (deltaY / distance) * movementStep,
        };
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animationFrameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [chaseStartRadius, stillRadius, isSleeping]);

  useEffect(() => {
    if (flyingFrames.length <= 1) {
      return undefined;
    }

    const frameIntervalId = window.setInterval(() => {
      setFrameIndex((previousFrame) => (previousFrame + 1) % flyingFrames.length);
    }, 90);

    return () => window.clearInterval(frameIntervalId);
  }, [flyingFrames.length]);

  const currentSprite = isSleeping
    ? sleepSprite
    : ((isChasing ? flyingFrames[frameIndex] : stillSprite) ?? stillSprite);
  const shouldFlipSprite = cursorPosition.x > spritePosition.x;

  return (
    <div id='portfolio-container'>
      {currentSprite && (
        <img
          src={currentSprite}
          alt=""
          className="cursor-chaser-sprite"
          onClick={() => setIsSleeping((previousState) => !previousState)}
          style={{
            left: `${spritePosition.x}px`,
            top: `${spritePosition.y}px`,
            pointerEvents: "auto",
            cursor: "pointer",
            transform: isSleeping
              ? "translate(-50%, -50%) scaleX(1)"
              : shouldFlipSprite
              ? "translate(-50%, -50%) scaleX(-1)"
              : "translate(-50%, -50%) scaleX(1)",
          }}
        />
      )}
      <Snowfall style={{
        position: "fixed"
      }} />
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero_tag">Hi, I am</div>

        <h1 className="hero_name">PUSHKAR</h1>

        <p className="hero_role">
          <span className="hero_role-line" />
          COMPUTER SCIENCE ENGINEER
          <span className="hero_role-line" />
        </p>

        <div className="hero_socials">
          {/* GitHub */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hero_social-link" aria-label="GitHub">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
          0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755
          -1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 
          3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
          0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 
          3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 
          3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 
          1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 
          0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 
          24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero_social-link" aria-label="LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
          -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046
          c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 
          7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 
          13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542
          C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729
          C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* X (Twitter) */}
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hero_social-link" aria-label="X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231
          -5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 
          2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
            </svg>
          </a>
        </div>

        <p className="hero_bio">
          I build <span className="hero-bio-highlight">robust</span> systems and <span className="hero-bio-highlight">elegant</span> interfaces that live at the intersection of
          performance and craft. Currently focused on full-stack development, developer
          tooling, and anything that makes engineers more productive with a touch of <span className="hero-bio-highlight">creativity</span>. Open to new
          opportunities and interesting problems.
        </p>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero_resume-btn">
          Resume
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* SKILLS SECTION */}
      <div className="skills-section section">
        <h1 className="section-title">SKILL SET</h1>
          <OrbitingCircle skills={orbitSkills} iconSize={60} radius={220}  />
      </div>



      {/* PROJECTS SECTION */}
      <div className="projects-section section">
        <h1 className="section-title">PROJECTS</h1>
        <div className="projects-container">
          {PROJECTS.map((item, index) => {
            return (
              <ProjectCard
                image={item.image}
                title={item.title}
                liveUrl={item.liveUrl}
                githubUrl={item.githubUrl}
                description={item.description}
                techStack={item.techStack}
              />
            )
          })}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="contact-section section">
        <h1 className="contact-section-heading">IF YOU'VE SCROLLED THIS FAR...</h1>
        <h1 className="contact-section-heading">LET'S TALK</h1>

        <div className="contact-icons-section">
          <FaGithub className="contact-icons" size={40} />
          <FaLinkedin className="contact-icons" size={40} />
          <FaTwitter className="contact-icons" size={40} />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        &#169; 2026 Made by Pushkar &bull; All Rights Reserved
      </footer>
    </div>
  )
}

export default Portfolio