import { Award, Trophy, Medal, Star } from "lucide-react";

const awards = [
  { icon: Trophy, title: "IVF Chain of The Year", year: "National Fertility Awards 2021" },
  { icon: Star, title: "Excellence in Customer Care & Support", year: "National Fertility Awards 2021" },
  { icon: Award, title: "Best IVF Chain in India", year: "National Fertility Awards 2021" },
  { icon: Medal, title: "IVF Champion of the Year", year: "National Fertility Awards 2019" },
];

const Awards = () => (
  <section className="bg-background py-16">
    <div className="container">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-primary">
        Choose the best. Choose Nova IVF.
      </h2>
      <p className="text-center text-muted-foreground mt-4 max-w-3xl mx-auto">
        Nova IVF Fertility is among the largest service providers in fertility treatment. We aim to provide
        advanced Assisted Reproductive Technology (ART) in India on par with what is available globally.
      </p>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {awards.map(({ icon: Icon, title, year }) => (
          <div
            key={title}
            className="rounded-lg border border-border p-6 text-center hover:shadow-md transition bg-card"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 grid place-items-center mx-auto">
              <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="mt-4 font-bold text-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground mt-1">(National)</p>
            <p className="text-xs text-muted-foreground">ET Healthworld</p>
            <p className="text-sm text-primary font-semibold mt-2">{year}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Awards;
