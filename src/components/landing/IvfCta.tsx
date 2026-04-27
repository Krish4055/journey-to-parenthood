import { Phone, Hand } from "lucide-react";
import ctaImg from "@/assets/cta-couple.jpg";

const reasons = [
  "Low sperm count",
  "Poor egg quality",
  "Uterus or Fallopian tube issues",
  "Ovulation Problems",
  "Unidentified infertility issues",
];

const IvfCta = () => (
  <section className="bg-primary-soft py-16">
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <img
        src={ctaImg}
        alt="Happy couple with newborn"
        loading="lazy"
        width={1280}
        height={720}
        className="rounded-xl shadow-xl w-full object-cover aspect-video"
      />
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Why opt for In-Vitro Fertilization (IVF)?
        </h2>
        <p className="mt-4 text-foreground/80">
          IVF is one of the most effective fertility treatments available today. Our IVF programs offer
          high success rates and quick time-to-pregnancy in India.
        </p>
        <p className="mt-4 font-semibold text-foreground">Reasons for considering IVF:</p>
        <ul className="mt-3 space-y-2">
          {reasons.map((r) => (
            <li key={r} className="flex items-center gap-2 text-foreground">
              <span className="w-2 h-2 rounded-full bg-primary" /> {r}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="tel:08044474588"
            className="inline-flex items-center gap-2 px-6 h-12 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            <Phone className="w-4 h-4" /> 08044474588
          </a>
          <button
            onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-6 h-12 rounded-full bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition"
          >
            <Hand className="w-4 h-4" /> Book an Appointment
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default IvfCta;
