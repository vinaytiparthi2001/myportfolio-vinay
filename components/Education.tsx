"use client";
import { useInView } from "@/hooks/useInView";

const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    spec: "Specialization in AI & Machine Learning",
    school: "Samskruti College of Engineering and Technology",
    place: "Hyderabad, Telangana",
    years: "2021 – 2024",
    cgpa: "7.63",
    color: "#63b3ed",
    note: "This is where I got into AI — the AIML stream covered ML fundamentals, neural networks, and data handling. Pushed me toward where I am now.",
  },
  {
    degree: "Diploma — Computer Engineering",
    spec: null,
    school: "Samskruti College of Polytechnic",
    place: "Hyderabad, Telangana",
    years: "2018 – 2021",
    cgpa: "9.4",
    color: "#b794f4",
    note: "Solid foundation in programming and computer basics. Graduated with a 9.4 CGPA.",
  },
];

export default function Education() {
  const { ref, visible } = useInView();

  return (
    <section id="education" className="py-24 max-w-6xl mx-auto px-4 md:px-8" ref={ref}>
      <span className="section-label">Education</span>
      <h2 className={`text-3xl md:text-4xl font-bold text-[#e2e8f0] mt-3 mb-14 anim-fade-up ${visible ? "in" : ""}`}>
        Academic background
      </h2>

      <div className="relative">
        <div className="absolute left-[21px] top-6 bottom-6 w-px bg-gradient-to-b from-[#63b3ed]/60 via-[#b794f4]/40 to-transparent hidden md:block" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`relative md:pl-16 anim-fade-up ${visible ? "in" : ""}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className="absolute left-[12px] top-6 w-[18px] h-[18px] rounded-full border-2 hidden md:block"
                style={{ borderColor: edu.color, background: "#050d1a" }}
              />

              <div className="glass-card p-6 md:p-7">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#e2e8f0] mb-1">{edu.degree}</h3>
                    {edu.spec && (
                      <p className="text-sm font-medium mb-1" style={{ color: edu.color }}>{edu.spec}</p>
                    )}
                    <p className="text-[#94a3b8] text-sm">{edu.school}</p>
                    <p className="text-[#4a5568] text-xs mt-0.5">{edu.place}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span className="font-mono-custom text-xs text-[#718096] bg-[#0a1628] px-3 py-1.5 rounded-lg border border-[rgba(99,179,237,0.08)]">
                      {edu.years}
                    </span>
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-lg"
                      style={{ color: edu.color, background: `${edu.color}12`, border: `1px solid ${edu.color}20` }}
                    >
                      CGPA {edu.cgpa}
                    </span>
                  </div>
                </div>
                <p className="text-[#718096] text-xs mt-4 leading-relaxed italic">{edu.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}