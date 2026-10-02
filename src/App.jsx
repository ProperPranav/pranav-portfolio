import "./App.css";

function App() {
  const skillGroups = [
  {
    title: "Programming",
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Linux"],
  },
  {
    title: "Cybersecurity",
    skills: [
      "Computer Networking",
      "Network Security",
    ],
  },
];

  return (
    <div className="portfolio">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">
        <div className="logo">PB.</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#credentials">Credentials</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            COMPUTER SCIENCE & ENGINEERING
          </p>

          <h1>
            Hi, I'm <span>Pranav Bhagat</span>
          </h1>

          <p className="hero-description">
            Computer Science & Engineering student focused on
            software development, cybersecurity, networking,
            and continuous technical growth.
          </p>

          <div className="hero-buttons">

            <a
              href="#skills"
              className="primary-button"
            >
              Explore My Skills
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              View Resume
            </a>

          </div>


          <div className="social-links">

            <a
              href="https://github.com/ProperPranav"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href="https://www.linkedin.com/in/pranav-bhagat-b8ba242b9/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>


        {/* CODE CARD */}

        <div className="hero-card">

          <div className="card-glow"></div>

          <div className="code-card">

            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>{`const pranav = {
  role: "CSE Student",
  focus: [
    "Development",
    "Cybersecurity"
  ],
  goal: "Keep building."
};`}</pre>

          </div>

        </div>

      </section>


      {/* =========================
          ABOUT
      ========================= */}

      <section
        id="about"
        className="section about"
      >

        <div className="section-label">
          01 — ABOUT
        </div>

        <div className="section-content">

          <h2>
            Building skills through{" "}
            <span>learning.</span>
          </h2>

          <p>
            I'm a Computer Science & Engineering student
            interested in software development, cybersecurity,
            networking and problem solving.
          </p>

          <p>
            I focus on continuously improving my programming
            fundamentals and learning technologies that allow
            me to build practical software solutions.
          </p>

          <div className="stats">

            <div>
              <strong>8.21</strong>
              <span>CGPA</span>
            </div>

            <div>
              <strong>2028</strong>
              <span>Graduation</span>
            </div>

            <div>
              <strong>CSE</strong>
              <span>Discipline</span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SKILLS
      ========================= */}

      <section
        id="skills"
        className="section"
      >

        <div className="section-label">
          02 — SKILLS
        </div>

        <div className="section-content">

          <h2>
            Technologies I{" "}
            <span>work with.</span>
          </h2>

          <div className="skills-grid">

  {skillGroups.map((group) => (
    <div className="skill-category" key={group.title}>

      <h3>{group.title}</h3>

      <div className="skill-list">
        {group.skills.map((skill) => (
          <span className="skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>

    </div>
  ))}

</div>

        </div>

      </section>


      {/* =========================
          CREDENTIALS
      ========================= */}

      <section
        id="credentials"
        className="section credentials"
      >

        <div className="section-label">
          03 — CREDENTIALS
        </div>

        <div className="section-content">

          <h2>
            Education &{" "}
            <span>experience.</span>
          </h2>


          <div className="credentials-grid">


            {/* EDUCATION */}

            <div className="credential-card">

              <div className="credential-type">
                EDUCATION
              </div>

              <h3>
                P.R. Pote Patil College of Engineering
                and Management
              </h3>

              <p>
                B.Tech — Computer Science & Engineering
              </p>

              <span>
                Expected 2028
              </span>

            </div>


            {/* EXPERIENCE */}

            <div className="credential-card">

              <div className="credential-type">
                EXPERIENCE
              </div>

              <h3>
                EduSkills — Virtual Internships
              </h3>

              <p>
                Completed virtual internship programs
                covering cybersecurity, networking,
                AI/ML, cloud, data engineering and
                Android development.
              </p>

              <span>
                Virtual Internship Programs
              </span>

            </div>


            {/* ACHIEVEMENT */}

            <div className="credential-card">

              <div className="credential-type">
                ACHIEVEMENT
              </div>

              <h3>
                Devyatra Hackfest 2026
              </h3>

              <p>
                Secured 4th Prize at Devyatra Hackfest
                2026 at KDK Engineering College,
                Nagpur.
              </p>

              <span>
                ₹5,000 Team Cash Award
              </span>

            </div>


            {/* WORKSHOP */}

            <div className="credential-card">

              <div className="credential-type">
                WORKSHOP
              </div>

              <h3>
                IIT Bombay — LLMs with Python
              </h3>

              <p>
                Participated in an LLMs with Python
                workshop conducted by IIT Bombay.
              </p>

              <span>
                Workshop
              </span>

            </div>


            {/* HACKATHONS */}

            <div className="credential-card">

              <div className="credential-type">
                HACKATHONS
              </div>

              <h3>
                Hackathons & Activities
              </h3>

              <p>
                Participated in Navonmesh 26 Hackathon
                and Smart India Hackathon activities.
              </p>

              <span>
                SIH26033
              </span>

            </div>


          </div>

        </div>

      </section>


      {/* =========================
          PROJECTS
      ========================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="section-label">
          04 — PROJECTS
        </div>

        <div className="section-content">

          <h2>
            Things I'm{" "}
            <span>building.</span>
          </h2>

          <div className="projects-empty">

            <div className="empty-number">
              +
            </div>

            <h3>
              Projects coming soon.
            </h3>

            <p>
              I'm currently building my own projects
              and will be adding them here as they
              are completed.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================= */}

      <section
        id="contact"
        className="section contact"
      >

        <div className="section-label">
          05 — CONTACT
        </div>

        <div className="contact-content">

          <h2>
            Let's build something{" "}
            <span>useful.</span>
          </h2>

          <p>
            I'm open to projects, collaborations,
            internships and interesting technical
            opportunities.
          </p>


          <a
            className="primary-button"
            href="mailto:pranavb973@gmail.com"
          >
            Get In Touch
          </a>


          <div className="contact-links">

            <a
              href="mailto:pranavb973@gmail.com"
            >
              pranavb973@gmail.com
            </a>

            <a
              href="https://github.com/ProperPranav"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ProperPranav
            </a>

            <a
              href="https://www.linkedin.com/in/pranav-bhagat-b8ba242b9/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/pranav-bhagat-b8ba242b9
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <p>
          © 2026 Pranav Bhagat
        </p>

        <p>
          Designed & built with React.
        </p>

      </footer>

    </div>
  );
}

export default App;