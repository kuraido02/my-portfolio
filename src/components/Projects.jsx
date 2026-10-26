import Reveal from './Reveal'
import { projects } from '../data/project'

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <p className="lead">The code for each project is on my GitHub.</p>
      <div className="grid">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 90}>
            <div className="card">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="tech">{project.tech}</p>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  View code
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects