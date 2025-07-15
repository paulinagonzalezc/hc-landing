// components/Hero.js
import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Launch Code. Learn Fast. Build Big.</h1>
        <p>The all-in-one cloud console built for developers and learners.</p>
        <div className="hero-buttons">
          <button className="primary-btn">🚀 Start Building</button>
          <button className="secondary-btn">🎓 Try Guided Mode</button>
        </div>
      </div>
    </section>
  )
}
