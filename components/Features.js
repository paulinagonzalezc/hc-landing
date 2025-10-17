// src/components/Features.jsx
import styles from './Features.module.css'
import { Cloud, Bot, Wrench } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "One-Click Cloud Environments",
      description: "Spin up environments with ease.",
      icon: <Cloud size={48} />,
    },
    {
      title: "24/7 AI + Human Tutoring",
      description: "Instant help with code, bug fixes, and exams.",
      icon: <Bot size={48} />,
    },
    {
      title: "Fully Integrated Dev + Deploy Tools",
      description: "Everything from repository to deployment.",
      icon: <Wrench size={48} />,
    },
  ];

  return (
    <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
            <div className={styles.featuresGrid}>
            {features.map((feature, i) => (
                <div key={i} className={styles.featureCard}>
                    <div className={styles.featureIconContainer}>
                        <div className={styles.featureIcon}>{feature.icon}</div>
                    </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                </div>
            ))}
            </div>

            <p className={styles.featuresTagline}>
            “It’s like VS Code + AWS + Stack Overflow in one window.”
            </p>
            <div className={styles.user}>
                <img
                    src="/female-avatar.svg"
                    alt="User avatar"
                    className={styles.avatar}
                />
                <div>
                    <p className={styles.userName}>Ame_Worg</p>
                    <p className={styles.userRole}>Customer</p>
                </div>
            </div>
        </div>
    </section>

  );
}
