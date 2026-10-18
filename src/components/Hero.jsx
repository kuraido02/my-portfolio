import { useRef } from 'react'

function Hero() {
  const sheetRef = useRef(null)

  const handleMove = (e) => {
    const x = e.clientX / window.innerWidth - 0.5
    const y = e.clientY / window.innerHeight - 0.5
    const el = sheetRef.current
    el.style.setProperty('--rx', `${-y * 8}deg`)
    el.style.setProperty('--ry', `${x * 10}deg`)
  }

  return (
    <section id="home" className="hero" onMouseMove={handleMove}>
      <div className="hero-text">
        <p className="eyebrow">Portfolio · 2026</p>
        <h1>
          Ivan Clyd
          <br />
          Suello
        </h1>
        <svg className="scribble" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
          <path d="M2 8 C 60 2, 120 11, 180 5 S 270 6, 298 4" pathLength="1" />
        </svg>
        <p className="subtitle">
          Computer Science student. I build websites and loves to draw.
        </p>
        <div className="buttons">
          <a href="#sketchbook" className="btn">Open the sketchbook</a>
          <a href="#projects" className="btn btn-outline">Projects</a>
        </div>
      </div>

      <div className="sheet" ref={sheetRef}>
        <img
          src="/art/cosmic-wing.JPG"
          alt="Drawing of a creature with a wide open mouth"
        />
        <span className="note">more below ↓</span>
      </div>
    </section>
  )
}

export default Hero