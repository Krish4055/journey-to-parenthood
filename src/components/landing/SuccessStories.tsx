import { Star } from "lucide-react";

const SuccessStories = () => (
  <section className="bg-background py-16">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Success Stories</h2>
      <p className="mt-4 text-foreground max-w-3xl mx-auto">
        100,000+ happy couples with real stories from our IVF patients — we are proud to have helped
        thousands of families begin their journey, year after year.
      </p>

      <div className="mt-8 inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-md border border-border">
        <div className="flex items-center gap-1" style={{ color: "hsl(45 93% 50%)" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <span className="font-bold text-foreground">4.9</span>
        <span className="text-muted-foreground text-sm">122 Google Reviews</span>
      </div>
    </div>
  </section>
);

export default SuccessStories;
