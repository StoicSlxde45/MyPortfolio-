const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "Java", "PHP", "SQL"],
  },
  {
    title: "Tools & Technologies",
    skills: ["React.js", "Node.js", "Git/GitHub", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "AI & Specialized",
    skills: ["Machine Learning", "Neural Networks", "Arduino Programming", "Agile Methodologies"],
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="section-container">
        <p className="section-title">Technical Proficiency</p>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-heading mb-10">
          Skills Snapshot
        </h2>
        
        <div className="grid sm:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-heading text-sm font-semibold text-heading mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
