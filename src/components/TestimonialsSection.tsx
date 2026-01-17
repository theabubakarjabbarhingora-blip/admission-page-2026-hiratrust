import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Parent of Grade 2 Student",
      role: "Louisville, KY",
      content:
        "HIRA Institute has given our child a strong foundation in Quran, academics, and character. We love that Islamic manners are reinforced every single day.",
      rating: 5,
    },
    {
      name: "Tahfiz Program Parent",
      role: "Full-Time Tahfiz & Academics",
      content:
        "The balance of memorization, understanding, and school subjects is exactly what we were looking for. The teachers are patient, caring, and connected to the students.",
      rating: 5,
    },
    {
      name: "Alimiyyah Student",
      role: "'Alimiyyah & Academics",
      content:
        "Studying at HIRA has helped me connect deeply with my deen while still keeping up with my academic goals. The environment is spiritually uplifting and supportive.",
      rating: 5,
    },
    {
      name: "High School Parent",
      role: "K–12 Program",
      content:
        "Our teenager is surrounded by peers and teachers who remind them of Allah and good character while still pushing them academically.",
      rating: 5,
    },
    {
      name: "New Family",
      role: "First Year at HIRA",
      content:
        "From the first day, the staff made us feel like family. Communication is clear, and our child looks forward to school every morning.",
      rating: 5,
    },
    {
      name: "Community Member",
      role: "Louisville Muslim Community",
      content:
        "HIRA is filling a critical need in our community—producing students who understand deen and can excel in their careers inshaAllah.",
      rating: 5,
    },
    {
      name: "Tahfiz Graduate",
      role: "Hafiz al-Quran",
      content:
        "Completing my hifz at HIRA while continuing my academics kept everything balanced. The environment helped me stay focused and motivated.",
      rating: 5,
    },
    {
      name: "Alimiyyah Parent",
      role: "Advanced Islamic Studies",
      content:
        "The depth of Islamic learning and the attention the teachers give to each student is something we haven’t seen anywhere else.",
      rating: 5,
    },
    {
      name: "Elementary Parent",
      role: "Lower Grades",
      content:
        "Our young children are memorizing Quran, learning duas, and picking up beautiful adab along with math and reading.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-8 md:mb-10">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-xs md:text-sm font-medium mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
            What families say about HIRA Institute
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Hear from parents and students whose lives have been impacted by a learning
            environment rooted in Quran, Sunnah, and academic excellence.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <Quote className="w-10 h-10 text-secondary mb-4" />
                  <p className="text-slate-700 mb-6 leading-relaxed italic flex-1">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
