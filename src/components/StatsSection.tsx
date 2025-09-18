const stats = [
  { number: "Built for Students, by student", label: "", description: "" },
  { number: "Designed with the CGBSE syllabus at its core", label: "", description: "" },
  { number: "Prototype today, future of learning tomorrow", label: "", description: "" },
  { number: "our learning journey, reimagined", label: "", description: "" }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-feature">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-gentle-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Querent.AI{" "}
            <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-smooth-rise hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 animate-pulse-soft">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-primary-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-primary-foreground/70 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
