import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Launch Code.</h1>
          <h1 className={styles.subtitle}>Lean Fast.</h1>
          <h1 className={styles.heading}>Build Big.</h1>
          <div><br/></div>
          <p className={styles.description}>The all-in-one cloud console designed for developers, students, and teams. No config. No chaos. Just code.</p>
          <div className={styles.buttons}>
            <button className={styles.primary}>Start Building</button>
            <button className={styles.secondary}>Try Guided Mode</button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/vscode_php.gif" alt="Console animation" />
        </div>
      </div>
    </section>
  )
}
