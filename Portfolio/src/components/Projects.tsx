import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Hospital Management System with AI Diagnosis",
    problem: "Patients needed a way to identify possible disease outcomes before consulting doctors.",
    solution: "Built a comprehensive hospital management system featuring an AI-based diagnosis assistant that helps patients identify possible conditions based on symptoms.",
    technologies: ["Python", "Machine Learning", "React.js", "MySQL"],
    skills: ["AI Integration", "Full-stack Development", "Healthcare Tech"],
    github: "https://github.com",
  },
  {
    title: "Job Application Platform",
    problem: "Job seekers and employers needed a streamlined way to connect and manage applications.",
    solution: "Developed a full-stack job application platform with user authentication, job listings, application tracking, and employer dashboards.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    skills: ["Full-stack Development", "REST APIs", "User Authentication"],
    github: "https://github.com",
  },
  {
    title: "Robotics Automation Software",
    problem: "Required automated control systems for sensor-based robotic operations.",
    solution: "Built robotics software integrating Arduino sensors with automation logic for data collection and responsive control systems.",
    technologies: ["Arduino", "Python", "Sensor Integration"],
    skills: ["IoT Development", "Hardware Integration", "Automation"],
    github: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section className="py-20">
      <div className="section-container">
        <p className="section-title">Selected Work</p>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-heading mb-10">
          Projects
        </h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="card-elevated p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <h3 className="font-heading text-lg font-semibold text-heading">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
              
              <div className="space-y-3 mb-5">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-subheading">Problem:</span> {project.problem}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-subheading">Solution:</span> {project.solution}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-accent text-accent-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
