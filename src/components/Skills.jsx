const skills = [
  { name: 'HTML', level: 'Comfortable' },
  { name: 'CSS', level: 'Comfortable' },
  { name: 'JavaScript', level: 'Comfortable' },
  { name: 'PHP', level: 'Comfortable' },
  { name: 'MySQL', level: 'Comfortable' },
  { name: 'Git', level: 'Comfortable' },
  { name: 'React.js', level: 'Learning' },
  { name: 'Node.js', level: 'Learning' },
  { name: 'Docker', level: 'Learning' },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((skill) => (
          <div className="card" key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills