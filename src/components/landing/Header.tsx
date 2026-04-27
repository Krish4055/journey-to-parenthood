import { Phone } from "lucide-react";

const Header = () => (
  <header className="bg-primary text-primary-foreground">
    <div className="container flex items-center justify-between py-4">
      <a href="#" className="flex items-center gap-2" aria-label="Nova IVF Fertility">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight">NOVA</span>
          <span className="text-2xl md:text-3xl font-light tracking-widest">IVF</span>
        </div>
        <span className="hidden sm:block text-[10px] tracking-[0.3em] border-l border-primary-foreground/40 pl-2">
          FERTILITY
        </span>
      </a>
      <a
        href="tel:08044474588"
        className="flex items-center gap-2 text-sm md:text-base font-semibold hover:opacity-90"
      >
        <span className="grid place-items-center w-8 h-8 rounded-full bg-primary-foreground/15">
          <Phone className="w-4 h-4" />
        </span>
        08044474588
      </a>
    </div>
  </header>
);

export default Header;
