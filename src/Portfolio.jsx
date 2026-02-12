import { useEffect } from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa"
import { SiCplusplus } from "react-icons/si"
import "./styles/Portfolio.css"
import civiccareImg from "./assets/civic_care.png"
import ytstackImg from "./assets/ytstack.png"
import ProjectCard from "./components/ProjectCard"
import ContactCard from "./components/ContactCard"

const Portfolio = () => {

    useEffect(() => {
        const sections = document.querySelectorAll('.animate-section')

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting){
                        entry.target.classList.add("show")
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                root: document.querySelector('.portfolio-container'),
                threshold: 0.2
            }
        )
        sections.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <div className="portfolio-container">
            <header className="glass">
                <h2 className="header-name">Pushkar</h2>
                <nav className="header-nav">
                    <ul>
                        <li><a className="nav-item" href="#home">Home</a></li>
                        <li><a className="nav-item" href="#home">About</a></li>
                        <li><a className="nav-item" href="#projects">Projects</a></li>
                        <li><a className="nav-item" href="#skills">Skills</a></li>
                        <li><a className="nav-item">Contact</a></li>

                    </ul>
                </nav>
            </header>

            {/* Home Section */}

                <div className="home-section">
                    <div className="home-wrapper">
                        <h2 className="up-animation">HEY, IT'S</h2>
                        <h1 className="text-size-animation">PUSHKAR</h1>
                        <p className="opacity-animation">I’m a Computer Science enthusiast with a strong interest in Machine Learning and Full-Stack Development. I enjoy building real-world projects that solve practical problems and help me understand systems end-to-end, from designing scalable backend APIs to writing clean, efficient and maintainable code.</p>
                    </div>
                </div>

            {/* Skills Section */}
            <div className="skills-section" id="skills">
                <div className="skills-wrapper animate-section">
                    <h1 className="section-header">Technical Skills</h1>
                    <div className="skills-grid">
                        <h2 className="skill-class">Web Technologies</h2>
                    
                        <div className="skill-list">
                            <FaHtml5 className="skill-item"/>
                            <FaCss3 className="skill-item"/>
                            <FaJs className="skill-item"/>
                            <FaReact className="skill-item"/>
                            <FaNodeJs className="skill-item"/>
                        </div>
                        <h2 className="skill-class">Languages</h2>
                        <div className="skill-list">
                            <SiCplusplus className="skill-item"/>
                            <FaJs className="skill-item"/>
                            <FaPython className="skill-item"/>
                        </div>
                        <h2 className="skill-class">Other</h2>
                        <div className="skill-list">
                            <FaGithub className="skill-item"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROJECTS SECTION */}
            <div className="projects-section" id="projects">
                <div className="projects-wrapper animate-section">
                    <h1 className="section-header">Projects</h1>
                    <div className="projects-container">
                        <ProjectCard
                        title="Civic Care"
                        image={civiccareImg}
                        description="Full Stack website that lets user issue complaints to officers and track the status"
                        link="https://github.com/1304-PK/CivicCare"
                        />
                        <ProjectCard
                        title="YT Stack"
                        image={ytstackImg}
                        description="A website for a niche community that let's you embeds youtube videos and lets you play them simultaneously with the press of a single button"
                        link="https://github.com/1304-PK/yt-stack"
                        />
                    </div>
                </div>
            </div>

            {/* CONTACT SECTION */}
            <div className="contact-section">
                <div className="contact-wrapper animate-section">
                    <h1 className="section-header">Contact Me</h1>
                    <div className="contact-details">
                        <div className="contact-card">
                            <ContactCard />
                        </div>
                        <div className="contact-links">
                            <div className="contact-email">
                                <h1>My Email</h1>
                                <p>pushkark2005@gmail.com</p>
                            </div>
                            <div className="contact-icons">
                            <FaLinkedin size={38} className="contact-icon"/>
                            <FaGithub size={38} className="contact-icon"/>
                            <FaTwitter size={38} className="contact-icon"/>
                            <FaInstagram size={38} className="contact-icon"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio