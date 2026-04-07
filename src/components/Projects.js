const projects = [
  {
    title: "Foodly AI Powered Recipe Generator",
    tag: "React + Typescript + Python (MERN)",
    img: "/projects/foodly.jpg",
    link: "https://github.com/Springboard-Internship-2025/Intell-Recipe-Generator-Personalized-Meal-Suggestions-Based-on-Available-Ingre_Feb_Batch-8_2026",
  },
  {
    title: "Student Management System",
    tag: "Django + SQLite",
    img: "/projects/sms.jpg",
    link: "#",
  },
  {
    title: "Task Flow",
    tag: "MERN Stack",
    img: "/projects/taskpilot.png ",
    link: "https://github.com/rajunarayan/taskpilot-mern",
  },
  {
    title: "PreMerge Risk Guard",
    tag: "Python + API",
    img: "/projects/pragent.jpg",
    link: "https://github.com/rajunarayan/change-risk-agent",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="max-w-6xl mx-auto px-5 py-20">
        <span className="sketch">Featured Projects</span>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article key={p.title} className="card hover:translate-y-[-3px] transition">
              <div className="aspect-[4/3] bg-slate-100 rounded-t-2xl overflow-hidden">
                {/* placeholder gradient if image missing */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="h2 text-xl font-bold text-slate-900">{p.title}</h3>
                  <span className="note-tag">{p.tag}</span>
                </div>
                <a href={p.link} target="_blank" rel="noreferrer"
                  className="inline-block mt-4 text-slate-900 font-semibold hover:underline">
                  View →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
