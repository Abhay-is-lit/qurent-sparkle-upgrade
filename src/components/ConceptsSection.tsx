const ConceptsSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 animate-gentle-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Concepts That{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Click
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience breakthrough moments with our visual learning approach that makes complex topics simple and memorable.
          </p>
        </div>

        <div className="animate-smooth-rise">
          <img
            src="https://uploads.onecompiler.io/435u35p2a/43x3ctn7u/Gemini_Generated_Image_hf95sshf95sshf95.png"
            alt="Visual Learning Concepts"
            className="w-full max-w-4xl h-auto mx-auto rounded-2xl shadow-glow hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ConceptsSection;