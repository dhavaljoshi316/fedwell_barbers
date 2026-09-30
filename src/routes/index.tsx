import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Clock3, Instagram, MapPin, Menu, Phone, Scissors, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import mark from "@/assets/fadewell-mark.png";
import hero from "@/assets/hero-barbershop.jpg";
import craft from "@/assets/craft-cut.jpg";
import interior from "@/assets/interior.jpg";
import beard from "@/assets/beard-detail.jpg";
import fade from "@/assets/fade-detail.jpg";
import james from "@/assets/barber-james.jpg";
import ayaan from "@/assets/barber-ayaan.jpg";
import marcus from "@/assets/barber-marcus.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fadewell Barbers | Sharp cuts. Good atmosphere. No fuss." },
      { name: "description", content: "Fadewell Barbers is a modern UK barbershop for considered cuts, precise fades and a grooming experience worth taking your time over." },
      { property: "og:title", content: "Fadewell Barbers | Sharp cuts. Good atmosphere. No fuss." },
      { property: "og:description", content: "Quality cuts, considered grooming and a relaxed experience at Fadewell Barbers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Home", "#home"], ["About", "#about"], ["Services", "#services"],
  ["Barbers", "#barbers"], ["Gallery", "#gallery"], ["Contact", "#contact"],
] as const;
const services = [
  { number: "01", name: "Classic Haircut", detail: "A tailored cut, finished with care and styled to suit you.", time: "45 min" },
  { number: "02", name: "Skin Fade", detail: "Clean, precise blending with a sharp finish from every angle.", time: "45 min" },
  { number: "03", name: "Beard Trim", detail: "Shape, definition and the finer details taken care of.", time: "30 min" },
  { number: "04", name: "Hair & Beard", detail: "The full refresh. A considered cut and beard shape in one visit.", time: "60 min" },
  { number: "05", name: "Kids Haircuts", detail: "A patient, comfortable cut for the younger gentlemen.", time: "30 min" },
  { number: "06", name: "Luxury Grooming", detail: "A little extra time for the details that make the difference.", time: "75 min" },
];
const barbers = [
  { name: "James Bennett", role: "Senior Barber", description: "Classic technique, modern perspective. James knows a great cut starts with listening.", image: james },
  { name: "Ayaan Patel", role: "Fade Specialist", description: "From subtle tapers to sharp skin fades, Ayaan has an eye for every detail.", image: ayaan },
  { name: "Marcus Reed", role: "Barber & Grooming Specialist", description: "An effortless approach to clean cuts, considered beard work and good conversation.", image: marcus },
];
const gallery = [
  { image: fade, alt: "Fresh skin fade haircut", label: "The fade", className: "md:col-span-2 md:row-span-2" },
  { image: interior, alt: "Warm barbershop interior", label: "The space", className: "md:col-span-2" },
  { image: beard, alt: "Barber shaping a beard", label: "The details", className: "" },
  { image: craft, alt: "Barber cutting hair with scissors", label: "The craft", className: "" },
];
const reviews = [
  { quote: "Finally found a barber who actually listens. Great cut, easy atmosphere, and never feels rushed.", name: "Daniel M." },
  { quote: "The attention to detail is on another level. I walked out feeling like a new man.", name: "Oliver R." },
  { quote: "Proper good service from start to finish. The kind of place you keep coming back to.", name: "Sam T." },
];

function Brand({ small = false }: { small?: boolean }) {
  return <a href="#home" aria-label="Fadewell Barbers, back to top" className="inline-flex shrink-0 items-center gap-2.5">
    <img src={mark} width={42} height={42} alt="" className={small ? "h-8 w-8 object-contain" : "h-10 w-10 object-contain"} />
    <span className="flex flex-col justify-center leading-none"><strong className={`display-type font-extrabold text-foreground ${small ? "text-[16px]" : "text-[18px]"}`}>FADEWELL</strong><span className="mt-1 text-[9px] font-bold tracking-[0.31em] text-primary">BARBERS</span></span>
  </a>;
}

function SectionIntro({ label, title, copy, centered = false }: { label: string; title: string; copy?: string; centered?: boolean }) {
  return <div className={`reveal ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
    <p className="section-label mb-5">{label}</p>
    <h2 className="display-type text-3xl font-bold leading-[1.16] text-foreground sm:text-4xl lg:text-[44px]">{title}</h2>
    {copy && <p className="mt-5 text-[15px] leading-7 text-muted-foreground sm:text-base">{copy}</p>}
  </div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <div className="overflow-hidden bg-background text-foreground">
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Brand />
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex xl:gap-9">
          {nav.map(([name, href]) => <a key={name} href={href} className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground">{name}</a>)}
        </nav>
        <Button asChild variant="gold" size="pill" className="hidden lg:inline-flex"><a href="#contact">Book an Appointment <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-[76px] flex flex-col border-b border-border bg-background px-6 pb-7 pt-3 shadow-xl lg:hidden">
        {nav.map(([name, href]) => <a key={name} href={href} onClick={() => setMenuOpen(false)} className="border-b border-border/60 py-3.5 text-sm font-medium">{name}</a>)}
        <Button asChild variant="gold" size="pill" className="mt-6 self-start"><a href="#contact" onClick={() => setMenuOpen(false)}>Book an Appointment <ArrowUpRight /></a></Button>
      </nav>}
    </header>

    <main>
      <section id="home" className="relative flex min-h-[590px] items-end md:min-h-[650px] lg:min-h-[690px]">
        <img src={hero} width={1536} height={1024} alt="Barber giving a precise haircut inside a warm, modern barbershop" className="absolute inset-0 h-full w-full object-cover object-[58%_center]" fetchPriority="high" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 pb-16 pt-32 sm:px-8 md:pb-24 lg:px-12 lg:pb-28">
          <div className="mb-6 flex items-center gap-3"><span className="h-px w-7 bg-primary" /><span className="section-label">A better kind of barbershop</span></div>
          <h1 className="display-type max-w-[760px] text-[43px] font-extrabold leading-[1.1] text-foreground sm:text-6xl lg:text-[72px]">Sharp cuts.<br />Good atmosphere.<br /><span className="text-primary">No fuss.</span></h1>
          <p className="mt-7 max-w-[470px] text-[15px] leading-7 text-foreground/80 sm:text-base">Great hair feels effortless. Come in, take your time, and leave looking like yourself at your best.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="pill"><a href="#contact">Book an Appointment <ArrowUpRight /></a></Button>
            <Button asChild variant="quiet" size="pill" className="border-foreground/40 bg-background/20 hover:bg-background/50"><a href="#services">View Services <ArrowRight /></a></Button>
          </div>
        </div>
        <a href="#about" className="absolute bottom-7 right-6 hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground/75 transition-colors hover:text-foreground md:flex lg:right-12">Scroll to explore <ArrowDown size={14} /></a>
      </section>

      <section id="about" className="border-b border-border/50 pb-20 pt-7 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-24 lg:px-12">
          <div className="reveal relative"><div className="overflow-hidden rounded-lg"><img src={interior} alt="Leather chairs and warm timber inside a modern barbershop" width={1280} height={1024} loading="lazy" className="aspect-[5/4] w-full object-cover" /></div><div className="absolute -bottom-5 right-5 rounded-md border border-border bg-card px-6 py-4 shadow-xl sm:right-8"><span className="display-type block text-lg font-bold">Good cuts.</span><span className="text-xs text-muted-foreground">Better days.</span></div></div>
          <div className="lg:pl-3"><SectionIntro label="01 / About us" title="A place to look good. And feel even better." /><div className="reveal mt-7 space-y-5 text-[15px] leading-8 text-muted-foreground"><p>Fadewell is a modern UK barbershop built around a simple idea: a good haircut should be the best part of your day, not another thing on your list.</p><p>We bring together quality cuts, thoughtful grooming and a laid-back atmosphere. No rushing, no overcomplicating it. Just people who care about their craft and make sure you leave feeling right.</p></div><a href="#barbers" className="mt-9 inline-flex items-center gap-2 border-b border-primary pb-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">Meet the team <ArrowUpRight size={17} /></a></div>
        </div>
      </section>

      <section id="services" className="bg-surface-deep py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><SectionIntro label="02 / What we do" title="The right cut. Every time." copy="From the everyday tidy-up to the full works, every service gets the same attention to detail." /><p className="reveal max-w-[230px] text-sm leading-6 text-muted-foreground md:text-right">Considered grooming for however you like to wear it.</p></div>
          <div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => <article key={item.number} className="reveal group flex min-h-[220px] flex-col justify-between rounded-lg border border-border/70 bg-card p-6 transition-colors duration-300 hover:border-primary/60 hover:bg-secondary sm:p-7"><div className="flex items-start justify-between"><span className="text-xs font-semibold text-primary">{item.number} /</span><Scissors size={20} strokeWidth={1.4} className="text-muted-foreground transition-colors group-hover:text-primary" /></div><div><h3 className="display-type text-xl font-bold">{item.name}</h3><p className="mt-3 max-w-[280px] text-sm leading-6 text-muted-foreground">{item.detail}</p><div className="mt-5 flex items-center justify-between border-t border-border/70 pt-4"><span className="text-xs text-muted-foreground">Approx. {item.time}</span><a href="#contact" aria-label={`Enquire about ${item.name}`} className="text-primary transition-transform group-hover:translate-x-1"><ArrowUpRight size={18} /></a></div></div></article>)}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">Service times are indicative. Please enquire for availability and pricing.</p>
        </div>
      </section>

      <section id="barbers" className="py-20 sm:py-28 lg:py-32"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><SectionIntro label="03 / The people" title="Good hands. Good company." copy="Get to know the people behind the chair. Each brings their own style, and the same commitment to getting yours just right." /><div className="mt-12 grid gap-5 md:grid-cols-3">{barbers.map((barber) => <article key={barber.name} className="reveal"><div className="photo-zoom overflow-hidden rounded-lg bg-card"><img src={barber.image} alt={`Portrait of ${barber.name}`} width={768} height={960} loading="lazy" className="aspect-[4/4.3] w-full object-cover object-top" /></div><div className="pt-5"><p className="section-label mb-2">{barber.role}</p><h3 className="display-type text-xl font-bold">{barber.name}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">{barber.description}</p></div></article>)}</div></div></section>

      <section id="experience" className="relative flex min-h-[520px] items-center overflow-hidden sm:min-h-[620px]"><img src={craft} width={1024} height={1280} loading="lazy" alt="Barber carefully cutting a client's hair with scissors" className="absolute inset-0 h-full w-full object-cover object-[center_35%]" /><div className="hero-shade absolute inset-0" /><div className="relative mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12"><div className="reveal max-w-[580px]"><p className="section-label mb-6">04 / The experience</p><h2 className="display-type text-4xl font-extrabold leading-[1.15] sm:text-5xl lg:text-[58px]">The little things<br />make the cut.</h2><p className="mt-7 max-w-[470px] text-base leading-8 text-foreground/85">A proper consultation. A steady hand. The time to get every detail right. Settle in, enjoy the atmosphere and let us take care of the rest.</p><Button asChild variant="gold" size="pill" className="mt-9"><a href="#contact">Come see for yourself <ArrowUpRight /></a></Button></div></div></section>

      <section id="gallery" className="py-20 sm:py-28 lg:py-32"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><div className="flex flex-wrap items-end justify-between gap-6"><SectionIntro label="05 / From the chair" title="A closer look." copy="A little glimpse of the work, the space, and everything in between." /><span className="text-sm text-muted-foreground">Real detail. Real confidence.</span></div><div className="mt-11 grid auto-rows-[245px] gap-3 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-4">{gallery.map((item) => <div key={item.label} className={`reveal photo-zoom group relative overflow-hidden rounded-lg bg-card ${item.className}`}><img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-cover" /><div className="image-shade absolute inset-0" /><span className="absolute bottom-5 left-5 display-type text-lg font-bold">{item.label}</span></div>)}</div></div></section>

      <section id="testimonials" className="border-y border-border/60 bg-secondary/45 py-20 sm:py-28"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><SectionIntro label="06 / Kind words" title="The word around the chair." /><div className="mt-11 grid gap-4 md:grid-cols-3">{reviews.map((review) => <blockquote key={review.name} className="reveal flex min-h-[220px] flex-col justify-between rounded-lg border border-border/70 bg-card p-7"><div><div aria-label="5 out of 5 stars" className="flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" strokeWidth={1} />)}</div><p className="mt-5 text-[15px] leading-7">“{review.quote}”</p></div><cite className="mt-8 text-sm font-semibold not-italic text-muted-foreground">— {review.name}</cite></blockquote>)}</div></div></section>

      <section id="booking" className="bg-primary py-20 text-primary-foreground sm:py-24"><div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12"><div><p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]">Your chair is waiting</p><h2 className="display-type text-4xl font-extrabold leading-tight sm:text-5xl">Ready for a sharper look?</h2><p className="mt-4 text-sm opacity-80 sm:text-base">A good haircut makes everything else feel easier.</p></div><Button asChild variant="light" size="pill" className="shrink-0"><a href="#contact">Book an Appointment <ArrowUpRight /></a></Button></div></section>

      <section id="contact" className="py-20 sm:py-28 lg:py-32"><div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><SectionIntro label="07 / Find us" title="Come on in." copy="We'd love to see you in the chair. Our location and booking details will be shared here soon." /><div className="mt-11 grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16"><div className="reveal grid gap-7 sm:grid-cols-2 lg:grid-cols-1"><div className="flex gap-4 border-b border-border pb-6"><MapPin className="mt-1 shrink-0 text-primary" size={20} /><div><h3 className="display-type font-bold">Address</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">UK location to be confirmed</p></div></div><div className="flex gap-4 border-b border-border pb-6"><Clock3 className="mt-1 shrink-0 text-primary" size={20} /><div><h3 className="display-type font-bold">Opening hours</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Hours to be confirmed</p></div></div><div className="flex gap-4 border-b border-border pb-6"><Phone className="mt-1 shrink-0 text-primary" size={20} /><div><h3 className="display-type font-bold">Bookings & enquiries</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Phone and booking details coming soon</p></div></div></div><div className="reveal relative flex min-h-[310px] items-center justify-center overflow-hidden rounded-lg border border-border bg-secondary sm:min-h-[370px]"><div className="map-grid absolute inset-0 opacity-30" /><div className="relative flex max-w-[250px] flex-col items-center rounded-md border border-border bg-card px-7 py-6 text-center shadow-xl"><MapPin className="text-primary" size={30} /><strong className="display-type mt-3 text-base">Fadewell Barbers</strong><span className="mt-1 text-xs leading-5 text-muted-foreground">Map available once the address is confirmed</span></div></div></div></div></section>
    </main>

    <footer className="border-t border-border bg-surface-deep"><div className="mx-auto max-w-[1280px] px-5 pb-8 pt-16 sm:px-8 lg:px-12"><div className="grid gap-10 border-b border-border pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]"><div><Brand small /><p className="mt-5 max-w-[250px] text-sm leading-6 text-muted-foreground">Sharp cuts, good company and a little time for yourself.</p></div><div><h3 className="mb-5 text-sm font-bold">Explore</h3><div className="flex flex-col gap-3">{nav.map(([name, href]) => <a key={name} href={href} className="text-sm text-muted-foreground transition-colors hover:text-primary">{name}</a>)}</div></div><div><h3 className="mb-5 text-sm font-bold">Visit</h3><p className="text-sm leading-7 text-muted-foreground">UK address coming soon<br />Hours to be confirmed<br />Phone to be confirmed</p></div><div><h3 className="mb-5 text-sm font-bold">Stay in touch</h3><p className="text-sm leading-6 text-muted-foreground">Social links will be added soon.</p><Instagram size={21} className="mt-5 text-primary" aria-label="Instagram" /></div></div><div className="flex flex-col justify-between gap-4 pt-7 text-xs text-muted-foreground sm:flex-row"><span>© {new Date().getFullYear()} Fadewell Barbers. All rights reserved.</span><div className="flex gap-6"><Dialog><DialogTrigger className="cursor-pointer hover:text-foreground">Privacy Policy</DialogTrigger><DialogContent><DialogHeader><DialogTitle>Privacy Policy</DialogTitle></DialogHeader><p className="text-sm text-muted-foreground">Privacy policy details will be published here before online bookings are available.</p></DialogContent></Dialog><Dialog><DialogTrigger className="cursor-pointer hover:text-foreground">Terms</DialogTrigger><DialogContent><DialogHeader><DialogTitle>Terms</DialogTitle></DialogHeader><p className="text-sm text-muted-foreground">Booking terms will be published here when appointments become available.</p></DialogContent></Dialog></div></div></div></footer>
  </div>;
}
