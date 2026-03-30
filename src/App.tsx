/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Eye, 
  Gavel, 
  Shield, 
  Globe, 
  Quote as QuoteIcon,
  Mountain
} from "lucide-react";
import { cn } from "./lib/utils";

const Navbar = ({ onNavigate, currentPage }: { onNavigate: (page: "home" | "mission") => void, currentPage: string }) => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full bg-white/60 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(28,28,24,0.06)] flex justify-between items-center px-8 py-3 z-50">
    <button 
      onClick={() => onNavigate("home")}
      className="text-xl font-bold font-headline text-on-surface hover:text-primary transition-colors"
    >
      Ethereal Archive
    </button>
    <div className="hidden md:flex items-center gap-8">
      {[
        { name: "Research", page: "home" },
        { name: "Mission", page: "mission" },
        { name: "Contact", page: "home" }
      ].map((item) => (
        <button 
          key={item.name}
          onClick={() => onNavigate(item.page as any)}
          className={cn(
            "transition-colors font-headline font-medium text-sm tracking-wide",
            currentPage === item.page ? "text-primary" : "text-on-surface-variant hover:text-primary"
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
    <button className="bg-primary text-white px-6 py-2 rounded-full font-headline font-medium text-sm hover:opacity-90 transition-all active:scale-95">
      Sign In
    </button>
  </nav>
);

const Hero = () => (
  <header className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
    <div className="absolute inset-0 z-0 flex justify-center items-center p-8 md:p-16">
      <div className="w-full h-full max-w-6xl relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <img 
          className="w-full h-full object-cover opacity-90 scale-75" 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920"
          alt="Canadian Landscape Panoramic"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/10 to-surface/40"></div>
      </div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl"
      >
        <span className="inline-block px-4 py-1 mb-6 rounded-full hero-glass text-[0.75rem] uppercase tracking-[0.1em] font-label text-primary font-semibold">
          The Archive Initiative
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface leading-[1.1] mb-8">
          Canada deserves <br/>
          <span className="italic text-primary">its own AI</span>
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed mb-10 max-w-2xl">
          Research, models, and content rooted in Canadian cultures, languages, and communities. Built for the North, by the North.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-medium text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
            Explore Research
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="glass-card px-8 py-4 rounded-xl font-medium text-lg hover:bg-surface-container transition-all">
            Our Mission
          </button>
        </div>
      </motion.div>
    </div>
  </header>
);

const PillarCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="glass-card p-10 rounded-xl flex flex-col items-start group"
  >
    <div className="w-14 h-14 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-2xl font-headline font-bold mb-4">{title}</h3>
    <p className="text-on-surface-variant leading-relaxed font-light">
      {description}
    </p>
  </motion.div>
);

const FoundationalPillars = () => (
  <section className="py-32 bg-surface">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-headline font-bold text-on-surface mb-4">Our Foundational Pillars</h2>
        <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <PillarCard 
          icon={Eye} 
          title="Vision" 
          description="Pioneering an intelligence that understands the nuance of the Canadian landscape and societal fabric." 
        />
        <PillarCard 
          icon={Gavel} 
          title="Ethics" 
          description="Radical transparency in data sourcing and model alignment, prioritizing collective human welfare." 
        />
        <PillarCard 
          icon={Shield} 
          title="Sovereignty" 
          description="Keeping Canadian data within borders, ensuring technological independence for future generations." 
        />
        <PillarCard 
          icon={Globe} 
          title="Accessibility" 
          description="Democratizing high-tier compute and models for every community from coast to coast to coast." 
        />
      </div>
    </div>
  </section>
);

const ResearchDomainCard = ({ id, title, description, className }: { id: string, title: string, description: string, className?: string }) => (
  <div className={cn("glass-card p-12 rounded-xl flex flex-col justify-between group", className)}>
    <div className="mb-12">
      <span className="text-primary/60 font-label text-xs tracking-widest uppercase">{id}</span>
      <h4 className="text-3xl font-headline font-bold mt-2">{title}</h4>
    </div>
    <p className="text-on-surface-variant font-light leading-relaxed">{description}</p>
  </div>
);

const ResearchDomains = () => (
  <section className="py-32 relative">
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-surface-container">
        <img 
          className="w-full h-full object-cover opacity-20 mix-blend-multiply" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg6xqScDKmygqLJAnYvnL5imMuNgTXzIxhYPAeJmJQge-fk8hb4HuQ25bYHyYKz_mUkZDETX-TmNH2f4JYRYaZ75QyVpfV_o739wrpE1JH2CrLTAPBn1un4YsZDgYywawWGSc-T2vQfxMh_0k5DuNYVxIldehf_F9axvs_KiJgml3Pl-fi1RBUzf6kEiKOCdXwXgYYZISM-0FQ2PteJybXwaH2__5MpG4xChPn6tMYYUQVgPRB1lrnEhWWGjU-O2HwV_VxXAFoeB8"
          alt="Texture"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-surface/80"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6">Research Domains</h2>
          <p className="text-lg text-on-surface-variant font-light">Our archival work bridges the gap between traditional knowledge systems and frontier artificial intelligence.</p>
        </div>
        <button className="text-primary font-label text-xs uppercase tracking-[0.1em] border-b border-primary/30 pb-1 hover:border-primary transition-all">
          View Archive Repository
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <ResearchDomainCard 
          id="Field 01" 
          title="Sovereign AI" 
          description="Infrastructure and foundational models developed specifically for national security and data residency."
          className="md:col-span-3"
        />
        <ResearchDomainCard 
          id="Field 02" 
          title="Linguistic Tuning" 
          description="Specialized optimization for Canadian English, French, and dialects reflective of our regional diversity."
          className="md:col-span-3"
        />
        <ResearchDomainCard 
          id="Field 03" 
          title="Indigenous Outreach" 
          description="Ethics-first collaboration with First Nations, Inuit, and Métis for language preservation."
          className="md:col-span-2"
        />
        <ResearchDomainCard 
          id="Field 04" 
          title="Society & Culture" 
          description="Analyzing AI impact on Canadian labor, law, and creative industries."
          className="md:col-span-2"
        />
        <ResearchDomainCard 
          id="Field 05" 
          title="Applied Research" 
          description="Direct application of AI in resource management and cold-climate resilience."
          className="md:col-span-2"
        />
      </div>
    </div>
  </section>
);

const Quote = () => (
  <section className="py-32 bg-surface-container-low border-y border-outline-variant/10">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <QuoteIcon className="w-16 h-16 text-primary/20 mx-auto mb-8" />
      <blockquote className="text-3xl md:text-4xl font-headline italic text-on-surface leading-relaxed mb-10">
        "Intelligence is not a generic resource; it is a cultural artifact. To import our intelligence is to import another culture's priorities."
      </blockquote>
      <cite className="not-italic font-label text-sm tracking-widest uppercase text-primary font-bold">
        — Director of Ethics, Ethereal Archive
      </cite>
    </div>
  </section>
);

const MissionSection = ({ image, quote, author, title, description, reverse = false }: { image: string, quote: string, author: string, title: string, description: string, reverse?: boolean }) => (
  <section className="py-32 px-6">
    <div className="container mx-auto max-w-6xl">
      <div className={cn("flex flex-col md:flex-row gap-16 items-center", reverse && "md:flex-row-reverse")}>
        <div className="w-full md:w-3/5 relative group">
          <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/10">
            <img 
              src={image} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt={title}
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Frosted glass square quote overlay */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "absolute top-1/2 -translate-y-1/2 w-64 h-64 glass-card rounded-3xl flex flex-col items-center justify-center p-8 text-center shadow-2xl backdrop-blur-3xl border border-white/40 z-20",
              reverse ? "-left-8 md:-left-16" : "-right-8 md:-right-16"
            )}
          >
            <QuoteIcon className="w-8 h-8 text-primary/40 mb-4" />
            <p className="text-on-surface font-headline italic text-sm leading-relaxed mb-4">"{quote}"</p>
            <cite className="not-italic font-label text-[10px] uppercase tracking-widest text-primary font-bold">— {author}</cite>
          </motion.div>
        </div>
        <div className="w-full md:w-2/5 space-y-6">
          <h3 className="text-3xl font-headline font-bold text-on-surface tracking-tight">{title}</h3>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Mission = () => (
  <div className="min-h-screen bg-surface">
    <header className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-surface-container-low">
      {/* Subtle Mountain Outline */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-end justify-center">
        <svg viewBox="0 0 1000 300" className="w-full h-auto max-w-7xl text-primary/40 fill-none stroke-current stroke-[0.5]" preserveAspectRatio="none">
          <path d="M0,250 L100,180 L200,220 L350,80 L500,150 L650,40 L800,180 L900,100 L1000,200" />
          <path d="M0,280 L150,200 L300,240 L450,120 L600,190 L750,100 L900,220 L1000,180" opacity="0.5" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1 mb-6 rounded-full hero-glass text-[0.75rem] uppercase tracking-[0.1em] font-label text-primary font-semibold">
            Our Purpose
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-on-surface mb-8 tracking-tighter">
            The Mission <br/>
            <span className="italic text-primary">of Sovereignty</span>
          </h1>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </header>

    <div className="divide-y divide-outline-variant/10">
      <MissionSection 
        title="Arctic Sovereignty"
        description="The North is not a frontier, it is our foundation. We are building intelligence that respects the unique geopolitical and environmental realities of the High Arctic."
        quote="The North is not a frontier, it is our foundation."
        author="Arctic Research Lead"
        image="https://picsum.photos/seed/arctic/1200/800"
      />
      <MissionSection 
        title="Boreal Intelligence"
        description="Our forests are massive carbon sinks and complex ecosystems. We develop models that translate biological signals into actionable environmental policy."
        quote="The forest breathes data; we are simply learning to listen."
        author="Environmental Scientist"
        image="https://picsum.photos/seed/forest/1200/800"
        reverse
      />
      <MissionSection 
        title="Prairie Innovation"
        description="From the vast grain fields to the tech hubs of the plains, we are optimizing the backbone of Canada's resource economy through precision AI."
        quote="Vastness requires a specific kind of focus."
        author="Agricultural Tech Fellow"
        image="https://picsum.photos/seed/prairie/1200/800"
      />
      <MissionSection 
        title="Coastal Resilience"
        description="Protecting our three coasts requires a deep understanding of maritime data. Our models predict oceanic shifts to safeguard coastal communities."
        quote="The tide brings more than water; it brings the pulse of the planet."
        author="Maritime Data Analyst"
        image="https://picsum.photos/seed/ocean/1200/800"
        reverse
      />
      <MissionSection 
        title="Linguistic Duality"
        description="Canada's strength lies in its voices. We are pioneering models that treat French and English not as separate silos, but as a unified cultural heritage."
        quote="Language is the architecture of thought."
        author="Sociolinguistics Professor"
        image="https://picsum.photos/seed/city/1200/800"
      />
      <MissionSection 
        title="Indigenous Wisdom"
        description="We partner with First Nations, Inuit, and Métis communities to ensure that AI serves as a tool for language revitalization and traditional knowledge preservation."
        quote="Traditional knowledge is the original frontier of intelligence."
        author="Indigenous Relations Director"
        image="https://picsum.photos/seed/lake/1200/800"
        reverse
      />
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-surface border-t border-outline-variant/10">
    <div className="container mx-auto px-12 py-16 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="text-lg font-headline italic text-on-surface mb-4">Ethereal Archive</div>
          <p className="font-label text-xs uppercase tracking-[0.05em] text-primary-container max-w-sm">
            © 2024 Ethereal Archive AI Research. Rooted in the Canadian Landscape.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col gap-3 items-center md:items-start">
            {["Privacy Policy", "Terms of Service"].map(link => (
              <a key={link} href="#" className="font-label text-xs uppercase tracking-[0.05em] text-on-surface-variant hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 items-center md:items-start">
            {["Research Ethics", "Accessibility"].map(link => (
              <a key={link} href="#" className="font-label text-xs uppercase tracking-[0.05em] text-on-surface-variant hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "mission">("home");

  return (
    <div className="min-h-screen bg-surface-container p-4 md:p-8 lg:p-12">
      <div className="mx-auto max-w-[1600px] bg-surface border border-outline-variant/20 shadow-2xl relative overflow-hidden min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-8rem)]">
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
        {currentPage === "home" ? (
          <>
            <Hero />
            <FoundationalPillars />
            <ResearchDomains />
            <Quote />
          </>
        ) : (
          <Mission />
        )}
        <Footer />
      </div>
    </div>
  );
}
