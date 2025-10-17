// ProjectTemplates.js
import styles from "./ProjectTemplates.module.css";

const templates = [
  {
    title: "Full Stack App",
    image: "/template-trello.png", // export slices from templates.png,
    description: "Pre-configured with React, Node.js, and PostgreSQL so you can start coding right away."
  },
   {
    title: "Machine Learning Notebook",
    image: "/template-static.png", // export slices from templates.png,
    description: "Launch Jupyter notebooks with pre-installed ML libraries like TensorFlow and PyTorch."
  },
  {
    title: "Static Website",
    image: "/template-ml.png", // export slices from templates.png,
    description: "Deploy lightweight, blazing-fast websites with integrated CI/CD pipelines."
  }
];

export default function ProjectTemplates() {
  return (
    <section className={styles.templatesSection}>
      <div className={styles.templatesContainer}>
        <p className={styles.templatesHeading}>Project Templates</p>

        <div className={styles.templatesGrid}>
          {templates.map((template, i) => (
            <div key={i} className={styles.templateCard}>
              <img
                src={template.image}
                alt={template.title}
                className={styles.templateImage}
              />
              <p className={styles.templateTitle}>{template.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
