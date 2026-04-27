import heroImg from "@/assets/hero-mother-baby.png";
import { useState } from "react";
import { toast } from "sonner";

const cities = [
  "Agra","Aligarh","Amritsar","Aurangabad","Bandra","Bangalore","Bareilly","Bhopal",
  "Bhubaneswar","Chandigarh","Chennai","Coimbatore","Davanagere","Dehradun","Delhi",
  "Erode","Ghaziabad","Gorakhpur","Gulbarga","Guntur","Gurugram","Guwahati","Haldwani",
  "Hisar","Howrah","Hubli","Hyderabad","Indore","Jaipur","Jalandhar","Jammu","Kalyan",
  "Kanchipuram","Kolhapur","Kolkata","Lucknow","Ludhiana","Madurai","Mangalore","Mumbai",
  "Mysore","Nagpur","Noida","Patna","Pondicherry","Prayagraj","Pune","Rajkot","Ranchi",
  "Salem","Siliguri","Surat","Thane","Tirupur","Udupi","Vadodara","Varanasi","Vellore",
  "Vijayawada","Vizag","Warangal",
];

const Hero = () => {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city || !name || phone.length !== 10) {
      toast.error("Please fill all fields. Phone must be 10 digits.");
      return;
    }
    toast.success("Request sent! Our team will reach out shortly.");
    setCity(""); setName(""); setPhone("");
  };

  return (
    <section className="bg-hero-bg">
      <div className="container grid lg:grid-cols-12 gap-8 py-10 lg:py-16 items-center">
        {/* Left text */}
        <div className="lg:col-span-4 order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            We take dreams &amp; turn them into families
          </h1>
          <p className="mt-4 text-lg text-foreground/80">IVF center that puts you first</p>

          <div className="mt-8 relative">
            <div className="bg-primary text-primary-foreground text-center py-3 rounded-t-md text-2xl font-bold tracking-wide">
              FREE
            </div>
            <div className="border-2 border-primary border-t-0 px-4 py-3 text-center text-foreground font-medium rounded-b-md bg-background">
              Consultation <span className="text-primary">|</span> Ultrasound{" "}
              <span className="text-primary">|</span> Registration
            </div>
          </div>
          <p className="mt-4 font-semibold text-foreground">Personalized IVF Treatment Packages</p>
        </div>

        {/* Center image */}
        <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
          <img
            src={heroImg}
            alt="Mother holding her baby — Nova IVF Fertility"
            width={1024}
            height={1024}
            className="max-h-[520px] w-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* Right form */}
        <div className="lg:col-span-4 order-3">
          <div className="bg-card rounded-md shadow-2xl p-6">
            <h2 className="text-primary font-bold text-lg uppercase tracking-wide">
              Book a Free Consultation!
            </h2>
            <p className="text-xs text-muted-foreground mt-1">निःशुल्क परामर्श के लिए बुक करें!</p>

            <form className="mt-5 space-y-3" onSubmit={onSubmit}>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full h-12 px-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                required
              >
                <option value="">select</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-12 px-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={phone}
                maxLength={10}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                className="w-full h-12 px-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <p className="text-xs text-muted-foreground">The maximum length of contact number is 10.</p>

              <button
                type="submit"
                className="w-full h-12 rounded-full bg-secondary text-secondary-foreground font-semibold uppercase tracking-wide hover:opacity-90 transition"
              >
                Send Request! <span className="text-xs opacity-90">अनुरोध भेजें</span>
              </button>

              <p className="text-xs text-muted-foreground pt-1">
                <input type="checkbox" defaultChecked className="accent-primary mr-2" />
                Nova IVF Fertility{" "}
                <a href="#" className="text-primary underline">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
