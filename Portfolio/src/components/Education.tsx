import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "Programming Foundations with JavaScript, HTML and CSS (Coursera)",
  "Generative AI with Large Language Models (Coursera)",
  "Generative AI for Everyone (Coursera)",
  "IBM Introduction to Machine Learning (Coursera)",
  "Operations Research 3-Part Course (Coursera)",
];

const Education = () => {
  return (
    <section className="py-20">
      <div className="section-container">
        <p className="section-title">Background</p>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-heading mb-10">
          Education & Certifications
        </h2>
        
        <div className="space-y-6">
          <div className="card-elevated p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold text-heading mb-1">
                  Bachelor of Science in Computing
                </h3>
                <p className="text-subheading font-medium mb-2">
                  Cavendish University Zambia, Lusaka
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  August 2021 – June 2025
                </p>
                
                <div className="pt-4 border-t border-divider">
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-subheading">Focus Areas:</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Software Engineering",
                      "Artificial Intelligence",
                      "Data Structures",
                      "Networking",
                    ].map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-elevated p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent flex-shrink-0">
                <Award className="w-6 h-6 text-accent-foreground" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold text-heading mb-4">
                  Professional Certifications
                </h3>
                
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li
                      key={cert}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
