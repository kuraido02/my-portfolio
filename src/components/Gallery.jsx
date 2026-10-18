import { useEffect, useState } from 'react'
import Reveal from './Reveal'

const artworks = [
  { file: 'giant-and-man.JPG', title: 'The Demon and the Man', technique: 'Hatching' },
  { file: 'mushroom-island.JPG', title: 'Mushroom Island', technique: 'Stippling' },
  { file: 'turtle-world.JPG', title: 'Torterra', technique: 'Stippling' },
  { file: 'snake-visor.JPG', title: 'Serpent and Cat Visor', technique: 'Stippling' },
  { file: 'cosmic-wing.JPG', title: 'Butterfly Effect', technique: 'Stippling' },
  { file: 'winged-dog.JPG', title: 'Winged Hound', technique: 'Stippling' },
  { file: 'clockwork.JPG', title: 'Dark World', technique: 'Mixed linework' },
  { file: 'creature-sketch.JPG', title: 'Monster', technique: 'Hatching' },
  { file: 'portrait.JPG', title: 'Eren Yeager', technique: 'Hatching' },
  { file: 'clown.JPG', title: 'Clown', technique: 'Linework' },
  { file: 'masks.JPG', title: 'Masks', technique: 'Linework' },
]

const tilts = [-1.2, 0.8, -0.5, 1]

function Gallery() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="sketchbook" className="section">
      <h2>Sketchbook</h2>
      <p className="lead">Selected drawings. Click a page to open it.</p>

      <div className="plates">
        {artworks.map((art, i) => (
          <Reveal key={art.file} delay={(i % 3) * 90} className="plate-wrap">
            <figure
              className="plate"
              style={{ '--tilt': `${tilts[i % tilts.length]}deg` }}
              onClick={() => setActive(art)}
            >
              <img src={`/art/${art.file}`} alt={art.title} />
              <figcaption>
                <span>{art.title}</span>
                <small>{art.technique}</small>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={`/art/${active.file}`} alt={active.title} />
            <figcaption>
              <span>{active.title}</span>
              <small>{active.technique}</small>
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

export default Gallery