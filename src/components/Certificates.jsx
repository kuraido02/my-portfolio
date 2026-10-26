import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import { certificates } from '../data/certificates'

function Certificates() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="certificates" className="section">
      <h2>Certificates</h2>
      <p className="lead">Courses, trainings and recognitions. Click one to view it.</p>

      {certificates.length === 0 ? (
        <p className="soon">Certificates coming soon.</p>
      ) : (
        <div className="certs">
          {certificates.map((cert, i) => (
            <Reveal key={cert.file} delay={(i % 3) * 90}>
              <figure className="cert" onClick={() => setActive(cert)}>
                <img
                  src={`/certificates/${cert.file}`}
                  alt={`${cert.title} certificate`}
                />
                <figcaption>
                  <strong>{cert.title}</strong>
                  <span>{cert.issuer}</span>
                  <small>{cert.date}</small>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      )}

      {active && (
        <div className="lightbox cert-view" onClick={() => setActive(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img
              src={`/certificates/${active.file}`}
              alt={`${active.title} certificate`}
            />
            <figcaption>
              <span>{active.title}</span>
              {active.link && (
                <a href={active.link} target="_blank" rel="noreferrer">
                  Verify
                </a>
              )}
            </figcaption>
          </figure>
          <button className="close" onClick={() => setActive(null)}>
            Close
          </button>
        </div>
      )}
    </section>
  )
}

export default Certificates