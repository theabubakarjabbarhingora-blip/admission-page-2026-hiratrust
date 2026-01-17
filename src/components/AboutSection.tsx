import { Award, Users, BookOpen, Target, GraduationCap, Heart, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/singlewindow-lighting-building-based-islamic-architecture.jpg";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "K-12", label: "Holistic Islamic Education" },
    { icon: Award, value: "Qualified", label: "Teachers & Hufaz" },
    { icon: BookOpen, value: "Tahfiz & 'Alimiyyah", label: "Integrated With Academics" },
    { icon: Target, value: "Character", label: "Development & Tarbiyah" },
  ];

  const facilities = [
    { icon: GraduationCap, text: "Tahfiz & Academics" },
    { icon: BookOpen, text: "'Alimiyyah & Academics" },
    { icon: Users, text: "K-12 & College" },
    { icon: Award, text: "Qualified Teachers" },
    { icon: Heart, text: "Spiritual Development" },
    { icon: Building2, text: "New Campus" },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Calm Islamic-inspired learning environment at HIRA Institute"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-secondary text-white p-6 rounded-xl shadow-xl hidden md:block max-w-xs">
              <div className="text-2xl font-bold font-serif mb-1">Reviving Prophetic Legacy</div>
              <div className="text-sm opacity-90">Faith, Knowledge, and Character</div>
            </div>
          </div>

          <div className="max-w-xl">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-xs md:text-sm font-medium mb-4">
              About HIRA Institute
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif leading-tight">
              Empowering minds with balanced Islamic education
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-4 leading-relaxed">
              HIRA&apos;s mission is to cultivate a holistic education that nurtures students academically,
              morally, socially, and spiritually, so they can thrive in every dimension of life with the
              Quran and Sunnah at the center.
            </p>
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              Through Tahfiz, &apos;Alimiyyah, and K–12 academics, students learn in a structured environment
              that connects classroom learning with real-life character, adab, and community service for the
              Louisville community and beyond.
            </p>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 bg-muted/50 rounded-xl flex flex-col gap-2 border border-primary/5 transition-colors hover:bg-muted"
                  >
                    <stat.icon className="w-6 h-6 text-secondary" />
                    <div>
                      <div className="text-lg font-bold text-primary font-serif">{stat.value}</div>
                      <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <section aria-labelledby="facilities-heading" className="space-y-6 pt-4 border-t border-border/40">
                <div className="flex items-center justify-between">
                  <h3
                    id="facilities-heading"
                    className="text-xl font-serif font-bold text-primary"
                  >
                    Why Choose HIRA?
                  </h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {facilities.map((facility) => (
                    <div
                      key={facility.text}
                      className="flex items-center gap-3 rounded-lg bg-white px-3 py-2.5 shadow-sm border border-slate-100 transition-all hover:border-secondary/20 hover:shadow-md"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                        <facility.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-slate-700">
                        {facility.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto shadow-lg group"
                    asChild
                  >
                    <a
                      href="https://hirainstitute.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore Our Campus
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
