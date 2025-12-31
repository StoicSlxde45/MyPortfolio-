import { Code2, Brain } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Software Engineering",
    items: [
      "Full-stack development with React.js, Node.js, and PHP",
      "Building web applications from concept to deployment",
      "Agile methodologies and Git/GitHub version control",
      "Database design with MySQL, PostgreSQL, and MongoDB",
    ],
  },
  {
    icon: Brain,
    title: "AI & Emerging Tech",
    items: [
      "Machine Learning algorithms and Neural Networks",
      "AI-powered application development (diagnosis assistant)",
      "Data classification and prediction models",
      "Robotics with Arduino programming and sensor integration",
    ],
  },
];

const Capabilities = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="section-container">
        <p className="section-title">What I Do</p>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-heading mb-10">
          Core Capabilities
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="card-elevated p-6 sm:p-8"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent mb-5">
                <capability.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              
              <h3 className="font-heading text-lg font-semibold text-heading mb-4">
                {capability.title}
              </h3>
              
              <ul className="space-y-3">
                {capability.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
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

export default Capabilities;
