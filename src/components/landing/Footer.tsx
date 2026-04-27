const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-8">
    <div className="container text-center text-sm space-y-2">
      <p className="font-bold text-lg">NOVA IVF FERTILITY</p>
      <p className="opacity-90">India's leading fertility care provider</p>
      <p className="opacity-75 text-xs">
        © {new Date().getFullYear()} Nova IVF Fertility. All rights reserved.{" "}
        <a href="#" className="underline">Privacy Policy</a>
      </p>
    </div>
  </footer>
);

export default Footer;
