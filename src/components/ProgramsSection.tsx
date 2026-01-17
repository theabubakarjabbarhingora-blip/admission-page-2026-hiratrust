import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, GraduationCap, Briefcase } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Business Administration",
      description: "Develop leadership skills and business acumen with our comprehensive MBA and BBA programs.",
      duration: "2-4 Years",
      level: "Graduate & Undergraduate",
      careers: "Manager, Entrepreneur, Consultant",
      color: "bg-blue-500",
    },
    {
      title: "Information Technology",
      description: "Master cutting-edge technologies and become a skilled IT professional ready for the digital age.",
      duration: "4 Years",
      level: "Undergraduate",
      careers: "Software Developer, Data Analyst",
      color: "bg-purple-500",
    },
    {
      title: "Healthcare Management",
      description: "Combine healthcare knowledge with management skills to lead modern healthcare organizations.",
      duration: "2 Years",
      level: "Graduate",
      careers: "Hospital Admin, Health Consultant",
      color: "bg-green-500",
    },
    {
      title: "Engineering",
      description: "Build the future with our accredited engineering programs in multiple specializations.",
      duration: "4 Years",
      level: "Undergraduate",
      careers: "Engineer, Project Manager",
      color: "bg-orange-500",
    },
    {
      title: "Professional Certifications",
      description: "Enhance your skills with industry-recognized certifications and short courses.",
      duration: "3-12 Months",
      level: "Professional",
      careers: "Various Industries",
      color: "bg-red-500",
    },
    {
      title: "Research Programs",
      description: "Contribute to knowledge through our PhD and research programs across disciplines.",
      duration: "3-5 Years",
      level: "Doctoral",
      careers: "Researcher, Academic",
      color: "bg-teal-500",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
            Discover Your <span className="text-secondary">Path to Success</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our wide range of accredited programs designed to meet industry demands and prepare you for a successful career.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`h-2 ${program.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-serif group-hover:text-secondary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-secondary" />
                    <span>{program.level}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Briefcase className="w-4 h-4 text-secondary" />
                    <span>{program.careers}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group/btn hover:bg-secondary hover:text-white hover:border-secondary"
                  asChild
                >
                  <a
                    href="https://hirainstitute.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white"
            asChild
          >
            <a
              href="https://hirainstitute.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Programs
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
