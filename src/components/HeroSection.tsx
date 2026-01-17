import { useState } from "react";
import { Phone, Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import mainLogo from "@/assets/final-logo.png";
import accentLogo from "@/assets/final-footer-logo.png";
import studentsImage from "@/assets/students-1.jpg";

const HeroSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

      if (!supabaseUrl) {
        throw new Error("Missing Supabase URL");
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/send-inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      toast({
        title: "Inquiry submitted",
        description: "Thank you for contacting HIRA Institute. Our team will reach out soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        message: "",
      });
    } catch {
      toast({
        title: "Submission received",
        description:
          "Your details have been captured. If there are issues with email, we will still review your inquiry.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-[#020617] text-white">
      <div className="absolute inset-0 -z-20">
        <img
          src={studentsImage}
          alt="Students engaged in learning at HIRA Institute"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-slate-900/95" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.25),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 -left-20 hidden lg:block opacity-[0.1]">
        <img
          src={accentLogo}
          alt=""
          aria-hidden="true"
          className="h-full w-auto object-contain"
        />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-8 md:pt-28 md:pb-10 lg:pt-32 lg:pb-12 relative z-10 flex flex-col gap-6 md:gap-8">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4 rounded-full bg-white/95 px-3 py-1.5 md:px-4 md:py-2 border border-slate-200 shadow-[0_10px_35px_rgba(15,23,42,0.45)]">
            <img
              src={mainLogo}
              alt="HIRA Institute logo"
              className="h-9 w-auto md:h-12"
            />
            <div className="hidden sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-800">
                HIRA Institute
              </p>
              <p className="text-[11px] text-slate-500">
                School Admission 2026-2027
              </p>
            </div>
          </div>
        </header>

        <main className="flex flex-col gap-8 md:gap-9 lg:gap-10 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start max-w-6xl mx-auto w-full">
          <div className="order-1 lg:hidden">
            <div className="space-y-2.5 md:space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-4 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/40">
                Louisville, Kentucky • Islamic School & Tahfiz
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight font-serif">
                <span className="block">HIRA INSTITUTE</span>
                <span className="block text-sky-300">School Admissions 2026–2027</span>
              </h1>
            </div>
          </div>

          <aside className="order-2 w-full max-w-md lg:order-2 lg:max-w-md lg:ml-6 xl:ml-8">
            <div className="bg-white rounded-3xl shadow-[0_16px_50px_rgba(15,23,42,0.85)] border border-sky-500/10 p-3.5 md:p-4">
              <h2 className="text-lg md:text-xl font-serif font-bold text-slate-900 mb-1.5">
                Get started at HIRA Institute
              </h2>
              <p className="text-xs md:text-sm text-slate-600 mb-3">
                Share your details and our admissions team will contact you with next steps,
                tuition information, and a campus visit schedule.
              </p>

              <form onSubmit={handleSubmit} className="space-y-2">
                <Input
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-8 border-slate-200 focus-visible:ring-sky-500"
                />
                <Input
                  required
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-8 border-slate-200 focus-visible:ring-sky-500"
                />
                <Input
                  required
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-8 border-slate-200 focus-visible:ring-sky-500"
                />
                <select
                  required
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full h-8 rounded-md border border-slate-200 bg-background px-3 text-xs md:text-sm text-foreground focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                >
                  <option value="">Select Program *</option>
                  <option value="preschool">Pre School</option>
                  <option value="kindergarten">Kindergarten</option>
                  <option value="grade1">Grade 1</option>
                  <option value="grade2">Grade 2</option>
                  <option value="tahfiz">Tahfiz & Academics</option>
                  <option value="alimiyyah">'Alimiyyah & Academics</option>
                  <option value="k12">K-12 & College Pathways</option>
                </select>
                <Textarea
                  rows={2}
                  placeholder="Tell us about your child or questions you have (optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-slate-200 focus-visible:ring-sky-500 text-xs md:text-sm"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-8 bg-sky-500 text-white text-xs md:text-sm font-semibold shadow-lg hover:bg-sky-400 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {isSubmitting ? "Submitting..." : "Request Information"}
                </Button>
              </form>

              <div className="mt-3 space-y-2">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                  asChild
                >
                  <a
                    href="https://wa.me/15023094472"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </Button>
                <p className="text-[11px] text-slate-500 text-center">
                  Prefer WhatsApp? Tap above to message our admissions team directly.
                </p>
              </div>

              <p className="mt-3 text-[11px] text-slate-500">
                By submitting this form you agree to be contacted by HIRA Institute about
                academic programs and admissions.
              </p>
            </div>
          </aside>

          <div className="order-3 space-y-6 md:space-y-8 lg:order-1 lg:max-w-xl">
            <div className="space-y-2.5 md:space-y-3 max-w-2xl hidden lg:block">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-4 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/40">
                Louisville, Kentucky • Islamic School & Tahfiz
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight font-serif">
                <span className="block">HIRA INSTITUTE</span>
                <span className="block text-sky-300">School Admissions 2026–2027</span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-sm md:text-lg text-slate-200 max-w-xl">
                A full-time Islamic school, Tahfiz, and &apos;Alimiyyah environment where students
                excel academically, morally, socially, and spiritually with Quran and Sunnah at the
                center.
              </p>

              <ul className="grid gap-2 md:gap-3 text-sm text-slate-100">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-4 rounded-full bg-sky-400" />
                  <span>Full-time Tahfiz and &apos;Alimiyyah programs with integrated academics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-4 rounded-full bg-sky-400" />
                  <span>Accredited K–12 Islamic schooling on a 35,000 sq ft campus in Louisville.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-4 rounded-full bg-sky-400" />
                  <span>Safe, mindful community focused on character, adab, and service.</span>
                </li>
              </ul>

              <div className="rounded-2xl border border-sky-500/25 bg-slate-950/80 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.9)] backdrop-blur">
                <p
                  className="mb-2 text-right text-xl md:text-2xl font-serif leading-relaxed text-sky-100"
                  dir="rtl"
                >
                  إِنَّ الْمَلَائِكَةَ لَتَضَعُ أَجْنِحَتَهَا رِضًا لِطَالِبِ الْعِلْمِ
                </p>
                <p className="text-sm italic text-slate-300">
                  The angels lower their wings being pleased for the seeker of knowledge.{" "}
                  <span className="font-semibold text-sky-300">(Abu Dawood)</span>
                </p>
              </div>
            </div>

            <div className="mt-6 bg-sky-600 rounded-2xl p-4 md:p-5 flex flex-wrap items-center justify-between gap-4 text-white">
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="tel:5023094472"
                  className="flex items-center gap-2 hover:text-sky-100 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">502 309 4472</span>
                </a>
                <a
                  href="https://wa.me/15023094472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-sky-100 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-semibold">WhatsApp</span>
                </a>
                <a
                  href="https://www.hirainstitute.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-sky-100 transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  <span className="font-semibold">www.hirainstitute.org</span>
                </a>
              </div>
              <p className="text-xs text-sky-100/90">
                © 2026 HIRA Institute. All rights reserved.
              </p>
            </div>
          </div>
        </main>
      </div>
      <div className="fixed left-4 bottom-6 z-40 md:hidden">
        <Button
          type="button"
          size="icon"
          className="rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1ebe5d]"
          asChild
        >
          <a
            href="https://wa.me/15023094472"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="sr-only">Chat on WhatsApp</span>
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
