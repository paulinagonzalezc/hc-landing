import styles from "./GetStarted.module.css";
import Image from "next/image";

export default function GetStarted() {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        {/* Heading */}
        <h2 className={styles.title}>
          Ready to Build Your Next Big Idea?
        </h2>

        {/* Subtext */}
        <p className={styles.subtitle}>
          Whether you’re a student, startup founder, or developer, Hashconsole 
          gives you everything you need to take your idea from{" "}
          <span className={styles.highlight}>concept to launch</span> — 
          without the steep learning curve of traditional cloud platforms.
        </p>

        {/* Features grid */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Instant Cloud Setup</h3>
            <p className={styles.cardText}>
              Skip endless configs and start coding in seconds.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>All-in-One Workspace</h3>
            <p className={styles.cardText}>
              Development, collaboration, and deployment in one place.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Built-in Guidance</h3>
            <p className={styles.cardText}>
              24/7 AI-powered tutoring and human experts at your fingertips.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Scalable by Design</h3>
            <p className={styles.cardText}>
              Start small and grow without ever leaving the platform.
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>
            Start Building Free
          </button>
          <button className={styles.secondaryButton}>
            See Demo Projects
          </button>
        </div>

        {/* Illustration 
        <div className={styles.illustration}>
          <Image
            src="/illustrations/cta-idea.png" // replace with generated illustration
            alt="Big Idea Illustration"
            width={600}
            height={400}
          />
        </div>
        */}
      </div>
    </section>
  );
}
