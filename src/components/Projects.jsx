const projects = [
  {
    title: 'Movie Booking System',
    description: 'Lets users pick a movie time, date and seats, and shows the price.',
    tech: 'HTML, CSS, PHP, MySQL',
    link: 'https://github.com/kuraido02',
  },
  {
    title: 'Theater Scheduling System',
    description: 'Scheduling for theater actors and a scheduling manager. My first project using JavaScript.',
    tech: 'HTML, CSS, JavaScript, PHP, MySQL',
    link: 'https://github.com/kuraido02',
  },
  {
    title: 'Thesis Project',
    description: 'A proposed system I am currently working on with my group.',
    tech: 'In progress',
    link: '',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech">{project.tech}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                View code
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects