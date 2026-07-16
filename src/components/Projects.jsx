import './Projects.css'

const projects = [
  {
    status: 'LIVE',
    category: 'CAB FARE COMPARISON',
    title: 'CabConnect',
    date: 'March 2026',
    description:
      'Engineered a web application that compares real-time fares across Uber, Ola, and Rapido, reducing user search time by approximately 30%. Integrated Uber\u2019s official API for live pricing and implemented a simulated data layer for platforms without public APIs. Developed a responsive interface that displays the cheapest and fastest ride options across multiple service providers.',
    tags: ['JavaScript', 'HTML', 'CSS', 'REST APIs'],
    github: 'https://github.com/UjjwalTyagi-2749/Cab-connect-DTI',
    live: 'https://cab-connect-hazel.vercel.app/',
  },
  {
    status: 'LIVE',
    category: 'REAL-TIME CHAT APP',
    title: 'MatchingHub',
    date: 'Dec 2025 \u2013 Feb 2026',
    description:
      'Developed a real-time random chat platform featuring user matching and secure friend requests. Implemented WebSocket-based messaging, achieving sub-second latency for instantaneous communication. Integrated privacy controls and moderation features to improve user safety and environment quality.',
    tags: ['WebSockets', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/UjjwalTyagi-2749/Final-MatchingHUb',
    live: 'https://final-matchinghub.onrender.com/',
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Featured Work</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.title} className="projects__card">
            <div className="projects__card-topbar">
              <span className="projects__dot projects__dot--red" />
              <span className="projects__dot projects__dot--yellow" />
              <span className="projects__dot projects__dot--green" />
            </div>

            <div className="projects__card-body">
              <div className="projects__card-header">
                <div className="projects__badges">
                  <span className="projects__status">{project.status}</span>
                  <span className="projects__category">{project.category}</span>
                </div>
                <div className="projects__links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.94.57.1.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.26 5.69.42.36.78 1.08.78 2.17v3.22c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                    </svg>
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live site">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <path d="M15 3h6v6" />
                        <path d="M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="projects__card-title">{project.title}</h3>
              {project.date && <p className="projects__date">{project.date}</p>}
              <p className="projects__description">{project.description}</p>

              <div className="projects__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="projects__tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects