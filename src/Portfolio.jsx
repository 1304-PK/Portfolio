import './styles/Portfolio.css';
import ProjectCard from './components/ProjectCard';
import ytstack from "./assets/ytstack.png"
import civiccare from "./assets/civic_care.png"

const Portfolio = () => {

  const Projects = [
    {
      title: "Civic Care",
      description: "Full Stack website that lets user issue complaints to the responsible officer and track the status",
      img: civiccare,
      tags: ["REACT", "EXPRESS", "MYSQL"],
      link: ""
    },
    {
      title: "YT Stack",
      description: "A website for a niche community that let's you embed youtube videos play them simultaneously with the press of a single button",
      img: ytstack,
      tags: ["HTML", "CSS", "JS"],
      link: "https://www.yt-stack.vercel.app"
    },
    {
      title: "KORTEX",
      description: "AI Based course flow generator which generates course plan based on user's query with relevant lectures and let's the user track progress and make notes",
      imge: "",
      tags: ["REACT", "TAILWIND", "EXPRESS", "SUPABASE", "GROQ API"],
      link: ""
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">PUSHKAR</div>
        </div>
        <div className="nav-right">
          <a href="#about">/ABOUT</a>
          <a href="#skills">/SKILLS</a>
          <a href="#logs">/LOGS</a>
          <a href="#work">/WORK</a>
          <button className="hire-btn">HIRE ME</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="status-indicator">
          <span className="status-text">HEY, ITS</span>
        </div>

        <div className="hero-content">
          <div className="blue-square"></div>

          <div className="main-text">
            <h1 className="title-solid">PUSHKAR</h1>
            {/* <h1 className="title-outline">PUSHKAR</h1> */}

            <div className="tagline-box">
              <p className="tagline">
                I build digital products that refuse to be<br />
                boring.<br />
                <span className="tech-stack">Full Stack • Machine Learning • AI</span>
              </p>
            </div>
          </div>

          <div className="pink-circle"></div>
        </div>

        <div className="cta-buttons">
          <button className="btn-primary">VIEW DATABASE</button>
          <button className="btn-secondary">DOWNLOAD CV
          </button>
        </div>
      </div>

      {/* MOVING BAR */}
      <div className='moving-bar'>
        <span className='moving-text'>HTML • CSS • Tailwind • JavaScript • React • Express • NodeJs • Python • Pandas</span>
        <span className='moving-text'>HTML • CSS • Tailwind • JavaScript • React • Express • NodeJs • Python • Pandas</span>
      </div>

      {/* INTRODUCTION SECTION */}

      <section className="introduction-section">
        <div className="introduction-container">
          <div className="introduction-content">
            <div className="introduction-image">
              <img src="https://4kwallpapers.com/images/wallpapers/iron-man-action-2048x2048-13389.jpg" alt="ProfileImg" />
            </div>

            <div className="introduction-text">
              <h1 className="introduction-title">WHO AM I?</h1>
              <p className="introduction-description">
                I am Pushkar. A computer science student with interest in full stack development and AI, engineering solutions centered around efficiency and scalability with a touch of <span className="highlight-text">creativity</span>.
              </p>

              <ul className="introduction-features">
                <li>&gt; Specialized in Designing and Web Development.</li>
                <li>&gt; Obsessed with Perfection and AI.</li>
                <li>&gt; 3+ years of shipping code that works.</li>
              </ul>

              <div className="introduction-buttons">
                <button className="introduction-btn location-btn">
                  📍 LOCATION: EARTH
                </button>
                <button className="introduction-btn status-btn">
                  STATUS: AVAILABLE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}

      <section className="ts_section">
        <div className="ts_container">
          <div className="ts_header">
            <h2 className="ts_title">
              <span className="ts_title_white">TECH</span>
              <span className="ts_title_green">_STACK</span>
            </h2>
          </div>

          <div className="ts_grid">
            <div className="ts_card">
              <span className="ts_card_label">FRONTEND</span>
              <span className="ts_card_tech">REACT</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">FRAMEWORK</span>
              <span className="ts_card_tech">NEXT.JS</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">LANGUAGE</span>
              <span className="ts_card_tech">PYTHON</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">RUNTIME</span>
              <span className="ts_card_tech">NODE.JS</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">STYLING</span>
              <span className="ts_card_tech">TAILWIND</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">DATABASE</span>
              <span className="ts_card_tech">MYSQL</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">MARKUP</span>
              <span className="ts_card_tech">HTML5</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">VERSION</span>
              <span className="ts_card_tech">GIT</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">API</span>
              <span className="ts_card_tech">GRAPHQL</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">PLATFORM</span>
              <span className="ts_card_tech">GITHUB</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">LANGUAGE</span>
              <span className="ts_card_tech">JAVA</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">FRAMEWORK</span>
              <span className="ts_card_tech">DJANGO</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">BACKEND</span>
              <span className="ts_card_tech">PHP</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">FRAMEWORK</span>
              <span className="ts_card_tech">LARAVEL</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">LIBRARY</span>
              <span className="ts_card_tech">THREE.JS</span>
            </div>

            <div className="ts_card">
              <span className="ts_card_label">LANGUAGE</span>
              <span className="ts_card_tech">C++</span>
            </div>
          </div>

          <div className="ts_footer"></div>
        </div>
      </section>

      {/* PROJECTS SECTION */}

      <section className="projects-section">
        <div className="projects-container">
          <h2 className="projects-title">SELECTED WORKS</h2>

          <div className="projects-grid">
            {/* <ProjectCard image={"https://i.ytimg.com/vi/I4n19j0cd9U/maxresdefault.jpg"} title={"Project 1"} description="Hey hello hi hi hi hi hi hi hi hi hi hi hi hi hi" link={"https://www.youtube.com/"} tags={["HTML", "JS", "CSS"]} /> */}
            {
              Projects.map((project, index) => {
                return(
                  <ProjectCard 
                  image={project.img}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  tags={project.tags}
                  />
                )
              })
            }
          </div>

          <a href="https://github.com/1304-PK" target="_blank" rel="noopener noreferrer" className="projects-github-link">
            GITHUB
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-badge">CONTACT ME</div>

          <div className="contact-content">
            <div className="contact-left">
              <h2 className="contact-title">
                LET'S<br />
                CONNECT
              </h2>

              <p className="contact-availability">
                <span className="contact-bullet"></span>
                Open for freelance work and full-time opportunities.
              </p>

              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <span>pushkar@gmail.com</span>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <span>PLANET EARTH</span>
                </div>
              </div>
            </div>

            <div className="contact-right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <label className="contact-label">NAME</label>
                  <input
                    type="text"
                    className="contact-input"
                    placeholder="NAME / COMPANY"
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-label">EMAIL</label>
                  <input
                    type="email"
                    className="contact-input"
                    placeholder="EMAIL ADDRESS"
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-label">MESSAGE</label>
                  <textarea
                    className="contact-textarea"
                    placeholder="MESSAGE..."
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit">
                  TRANSMIT DATA
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;