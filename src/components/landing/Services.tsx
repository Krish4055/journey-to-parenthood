import { Check } from "lucide-react";

const services = [
  "Infertility Assessment",
  "In-vitro Fertilisation – Intra cytoplasmic Sperm Injection (IVF-ICSI)",
  "Fertility Enhancing Surgeries",
  "Genetic Testing (PGT)",
  "Freezing — Egg, Sperm, Embryos",
  "Preservation for cancer patients",
];

const Services = () => (
  <section className="bg-primary/5 py-16">
    <div className="container grid md:grid-cols-2 gap-10 items-center">
      <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 grid place-items-center">
        <div className="text-center px-6">
          <p className="text-6xl md:text-7xl font-bold text-primary">IVF</p>
          <p className="mt-4 text-xl text-foreground font-medium">Comprehensive Fertility Care</p>
        </div>
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Fertility Services</h2>
        <ul className="mt-6 space-y-3">
          {services.map((s) => (
            <li key={s} className="flex items-start gap-3">
              <span className="mt-1 grid place-items-center w-6 h-6 rounded-full bg-secondary text-secondary-foreground shrink-0">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-foreground text-base md:text-lg">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Services;
