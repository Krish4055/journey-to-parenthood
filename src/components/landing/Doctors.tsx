import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";
import d4 from "@/assets/doctor-4.jpg";
import d5 from "@/assets/doctor-5.jpg";
import d6 from "@/assets/doctor-6.jpg";

type Doctor = {
  name: string;
  qualifications: string;
  experience: string;
  speciality: string;
  img: string;
};

const doctors: Doctor[] = [
  { name: "Dr. Anindita Singh", qualifications: "MBBS, DGO, Trained in Advanced Infertility Management (FOGSI)", experience: "7+ years of experience as a fertility specialist", speciality: "IVF Specialist in Kolkata", img: d1 },
  { name: "Dr. Indumathi Joy", qualifications: "DGO, DNB (OBG), Fellowship in Reproductive Medicine (FRM)", experience: "Over 13+ years of experience in Reproductive Medicine", speciality: "Infertility Specialist in Chennai", img: d2 },
  { name: "Dr. Ajantha Boopathi", qualifications: "MS (OG), DGO, MRCOG (UK), DMAS, Diploma in Advanced Reproductive Medicine", experience: "Over 14+ years of experience in Reproductive Medicine", speciality: "Infertility Specialist in Chennai", img: d3 },
  { name: "Dr. Aviva Pinto Rodrigues", qualifications: "MD (OBG), Diploma in Reproductive Medicine (Germany)", experience: "Over 25+ years of experience in Reproductive Medicine", speciality: "Infertility Specialist in Bangalore", img: d4 },
  { name: "Dr. Rohit Gutgutia", qualifications: "MBBS, DGO, Trained in fertility medicine in Israel", experience: "Over 18+ years of experience in reproductive medicine", speciality: "Infertility Specialist in Kolkata", img: d5 },
  { name: "Dr. Sulbha Arora", qualifications: "MD, DNB (OBG), Fellowship in Advanced ART (Israel)", experience: "Over 20+ years of experience in Reproductive Medicine", speciality: "Infertility Specialist in Mumbai", img: d6 },
  { name: "Dr. Meenakshi Priya", qualifications: "MS (OBG), DNB, FRM, Diploma in Reproductive Medicine (Germany)", experience: "Over 11+ years of experience in Reproductive Medicine", speciality: "Infertility Specialist in Coimbatore", img: d3 },
  { name: "Dr. Sneha Sathe", qualifications: "MS, MRM (UK), ART training (Singapore)", experience: "Over 17+ years of experience in Reproductive Medicine", speciality: "Infertility Specialist in Mumbai", img: d2 },
];

const Doctors = () => (
  <section className="bg-muted/40 py-16">
    <div className="container">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-primary uppercase tracking-wide">
        Our IVF Specialists
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((d) => (
          <article
            key={d.name}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition flex flex-col"
          >
            <img
              src={d.img}
              alt={d.name}
              loading="lazy"
              width={512}
              height={512}
              className="w-full aspect-square object-cover"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-primary">{d.name}</h3>
              <p className="text-xs text-muted-foreground mt-2">{d.qualifications}</p>
              <p className="text-sm text-foreground mt-2">{d.experience}</p>
              <p className="text-sm font-semibold text-secondary mt-2">{d.speciality}</p>
              <button
                onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-4 w-full rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition"
              >
                Book an Appointment
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Doctors;
