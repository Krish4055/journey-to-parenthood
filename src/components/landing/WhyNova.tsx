import { UserRound, Baby, IndianRupee, Search, Clock } from "lucide-react";

const items = [
  { icon: UserRound, label: "Acclaimed IVF Experts" },
  { icon: Baby, label: "High Success Rate" },
  { icon: IndianRupee, label: "Affordable Treatment" },
  { icon: Search, label: "Transparent Pricing" },
  { icon: Clock, label: "24*7 Care" },
];

const WhyNova = () => (
  <section className="bg-background py-16">
    <div className="container">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-primary">Why Nova?</h2>
      <h3 className="text-center text-xl md:text-2xl font-semibold text-foreground mt-6 max-w-4xl mx-auto">
        Nova IVF is India's leading fertility care provider and the 1st to follow international protocols.
      </h3>
      <p className="text-center text-muted-foreground mt-4 max-w-4xl mx-auto">
        With high success rates, an expert team of fertility specialists, trained embryologists, counsellors,
        and fertility-trained nurses, we support you in every step of your fertility journey. We offer fertility
        treatment with uncompromising ethics, transparent pricing, and a patient-centric approach with the
        highest quality of care.
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="aspect-square rounded-lg border border-secondary/40 flex flex-col items-center justify-center text-center p-4 hover:shadow-md transition"
          >
            <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
            <p className="mt-4 font-semibold text-foreground text-sm md:text-base">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyNova;
