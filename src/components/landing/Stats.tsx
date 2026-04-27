import { Hospital, MapPin, Baby } from "lucide-react";

const stats = [
  { icon: Hospital, value: "120", label: "IVF Centres" },
  { icon: MapPin, value: "75", label: "Cities" },
  { icon: Baby, value: "100000+", label: "IVF Pregnancies" },
];

const Stats = () => (
  <section className="bg-primary text-primary-foreground py-16">
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={label} className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-background grid place-items-center shadow-lg -mt-16">
            <Icon className="w-10 h-10 text-secondary" strokeWidth={1.5} />
          </div>
          <p className="mt-4 text-4xl font-bold text-secondary">{value}</p>
          <p className="mt-1 text-lg">{label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
