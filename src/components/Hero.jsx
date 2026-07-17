import { useRef, useState } from 'react'
import './Hero.css'
import faceImg from '../assets/Face.png'

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  {href:'#techstack', label:'TechStack'},
  { href: '#contact', label: 'Contact' },
  { href:'/ResumeM.pdf' , label: 'Resume'},
]

function Hero() {
  const imgRef = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const img = imgRef.current
    if (!img) return

    const rect = img.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    const distance = Math.sqrt(distX * distX + distY * distY)

    const maxDistance = 320
    const maxOffset = 30

    if (distance < maxDistance) {
      const pull = (1 - distance / maxDistance) * maxOffset
      const angle = Math.atan2(distY, distX)
      setOffset({
        x: Math.cos(angle) * pull,
        y: Math.sin(angle) * pull,
      })
    } else {
      setOffset({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 })

  return (
    <section className="hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <nav className="hero__nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        {/* <a href="#contact" className="hero__cta">Contact Me</a> */}
      </nav>

      <div className="hero__content">
        <h1>HI, I'M Ujjwal</h1>

        <img
          ref={imgRef}
          src={faceImg}
          alt="Character illustration"
          className="hero__face"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        />

        {/* <a href="/ResumeM.pdf" className="hero__side-cta">Resume</a> */}
      </div>

      <p className="hero__tagline">A designer passionate about crafting bold and memorable projects.</p>
    </section>
  )
}

export default Hero