/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Eye, 
  Gavel, 
  Shield, 
  Globe, 
  Quote as QuoteIcon,
  Mountain,
  Clock,
  Database,
  Activity,
  Loader,
  PlusCircle,
  Send
} from "lucide-react";
import { cn } from "./lib/utils";

const Navbar = ({ onNavigate, currentPage }: { onNavigate: (page: "home" | "mission" | "research") => void, currentPage: string }) => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full bg-white/60 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(28,28,24,0.06)] flex justify-between items-center px-8 py-3 z-50">
    <button 
      onClick={() => onNavigate("home")}
      className="text-xl font-bold font-headline text-on-surface hover:text-primary transition-colors"
    >
      Ethereal Archive
    </button>
    <div className="hidden md:flex items-center gap-8">
      {[
        { name: "Home", page: "home" },
        { name: "Research", page: "research" },
        { name: "Mission", page: "mission" },
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
          description="Infrastructure and foundational models developed for national security and data residency."
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
        <ResearchDomainCard 
          id="Field 06" 
          title="Accessibility" 
          description="Democratizing AI for seniors, persons with disabilities, and rural communities from coast to coast to coast."
          className="md:col-span-6"
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
        title="Sovereign AI"
        description="Nations around the world are racing to build AI systems that reflect their values, protect their data, and serve their citizens. Canada — despite being the birthplace of modern deep learning — risks falling behind."
        quote="Canada must lead, not just follow, in the development of frontier intelligence."
        author="Sovereignty Lead"
        image="https://picsum.photos/seed/sovereign-ai/1200/800"
      />
      <MissionSection 
        title="Linguistic Tuning"
        description="Most AI language models are trained on data that skews heavily toward American English and European French. This means Canadians regularly encounter AI that misunderstands their context, gets idioms wrong, and defaults to cultural references that do not fit."
        quote="The difference between an AI that feels natural and one that feels foreign."
        author="Linguistics Team"
        image="https://picsum.photos/seed/urban-canada/1200/800"
        reverse
      />
      <MissionSection 
        title="Indigenous Communities"
        description="Canada is home to more than 70 distinct Indigenous languages across First Nations, Métis, and Inuit communities. Many of these languages are endangered — some spoken by fewer than 500 people."
        quote="This is not optional — it is an ethical and legal requirement reflecting Canada's commitment to reconciliation."
        author="Indigenous Relations"
        image="https://picsum.photos/seed/canadian-lake/1200/800"
      />
      <MissionSection 
        title="Society & Culture"
        description="AI is not just a technology — it is a force that is actively reshaping Canadian society. From how news is written and consumed, to how hiring decisions are made, to how government services are delivered, AI is already woven into the fabric of daily life."
        quote="AI strengthens rather than erodes Canadian values of fairness, diversity, and inclusion."
        author="Society Research"
        image="https://picsum.photos/seed/canadian-city/1200/800"
        reverse
      />
      <MissionSection 
        title="Applied Research"
        description="Canada has world-class AI researchers, but too often their work stays in academic journals. The gap between AI research and real-world deployment is one of Canada's biggest missed opportunities."
        quote="Research is only valuable if it leads to better outcomes for Canadians."
        author="Applied Research"
        image="https://picsum.photos/seed/canadian-forest/1200/800"
      />
      <MissionSection 
        title="Accessibility"
        description="Canada has one of the fastest-aging populations in the G7. Nearly 19% of Canadians are seniors, and that number is growing. AI should work for everyone — including seniors, people with disabilities, and those encountering technology for the first time."
        quote="Accessibility means designing AI that serves everyone, not just the tech-savvy."
        author="Accessibility Team"
        image="https://picsum.photos/seed/canadian-prairie/1200/800"
        reverse
      />
    </div>
  </div>
);

const Research = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="min-h-screen bg-surface">
      <header className="relative py-32 bg-surface-container-low overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 400 400" className="w-full h-full text-primary">
            <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 5" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 10" />
            <path d="M200,50 L200,350 M50,200 L350,200" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 mb-6 rounded-full hero-glass text-[0.75rem] uppercase tracking-[0.1em] font-label text-primary font-semibold">
              Research Hub
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface mb-8 leading-tight">
              Frontier <br/>
              <span className="italic text-primary">Knowledge</span>
            </h1>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-xl">
              Exploring the intersection of Canadian identity and artificial intelligence through rigorous archival and technical research.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-24 space-y-32">
        {/* Latest & Archive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-headline font-bold">Latest Publications</h2>
            </div>
            <div className="space-y-6">
              {[
                { title: "Boreal Transformer: Cold-Climate Optimization", date: "March 2024", category: "Models" },
                { title: "Linguistic Sovereignty in the Digital Age", date: "Feb 2024", category: "Ethics" },
                { title: "Arctic Data Residency Protocols v2.1", date: "Jan 2024", category: "Policy" }
              ].map((pub, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover:bg-surface-container transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{pub.category}</span>
                    <span className="text-xs text-on-surface-variant">{pub.date}</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold group-hover:text-primary transition-colors">{pub.title}</h3>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <Database className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-headline font-bold">Full Archive</h2>
            </div>
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-between overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8"></div>
              <div>
                <p className="text-on-surface-variant font-light leading-relaxed mb-8">
                  Access our complete repository of research papers, datasets, and technical documentation dating back to the initiative's inception.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/10">
                    <div className="text-2xl font-headline font-bold text-primary">450+</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Papers</div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/10">
                    <div className="text-2xl font-headline font-bold text-primary">12TB</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Open Data</div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-on-surface text-surface py-4 rounded-xl font-medium hover:bg-primary transition-all flex items-center justify-center gap-2">
                Browse Repository
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </div>

        {/* Current & In Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Activity className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-headline font-bold">Current Focus</h2>
            </div>
            <div className="glass-card p-10 rounded-3xl border-l-4 border-l-primary">
              <h3 className="text-2xl font-headline font-bold mb-4">Multi-Modal Indigenous Preservation</h3>
              <p className="text-on-surface-variant font-light leading-relaxed mb-6">
                Our primary focus this quarter is the development of non-extractive data collection methods for oral histories in Northern communities.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-surface bg-primary-fixed flex items-center justify-center text-[10px] font-bold text-primary">
                      R{i}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-on-surface-variant font-medium">12 Researchers Active</span>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <Loader className="w-6 h-6 text-primary animate-spin-slow" />
              <h2 className="text-3xl font-headline font-bold">In Progress</h2>
            </div>
            <div className="space-y-4">
              {[
                { label: "Maritime Signal Processing", progress: 75 },
                { label: "French-Canadian Dialect Model", progress: 40 },
                { label: "Sovereign Compute Infrastructure", progress: 90 }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-primary font-bold">{item.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Submit Topic Form */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <PlusCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-headline font-bold mb-4">Submit a Research Topic</h2>
            <p className="text-on-surface-variant font-light">
              We value community-driven research. If you have a topic that aligns with our mission of Canadian sovereignty and AI, let us know.
            </p>
          </div>

          <div className="glass-card p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            {formStatus === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-2">Topic Received</h3>
                <p className="text-on-surface-variant">Our ethics committee will review your submission and reach out if it aligns with our current roadmap.</p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 text-primary font-bold border-b border-primary/30 hover:border-primary transition-all"
                >
                  Submit another topic
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant ml-1">Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant ml-1">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant ml-1">Research Topic</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Brief title of the research area"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant ml-1">Description & Impact</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="How does this topic benefit the Canadian AI landscape?"
                  />
                </div>
                <button 
                  disabled={formStatus === "submitting"}
                  className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Proposal
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

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
  const [currentPage, setCurrentPage] = useState<"home" | "mission" | "research">("home");

  return (
    <div className="min-h-screen bg-surface-container p-4 md:p-8 lg:p-12">
      <div className="mx-auto max-w-[1600px] bg-surface border border-outline-variant/20 shadow-2xl relative overflow-hidden min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-8rem)]">
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
        {currentPage === "home" && (
          <>
            <Hero />
            <FoundationalPillars />
            <ResearchDomains />
            <Quote />
          </>
        )}
        {currentPage === "mission" && <Mission />}
        {currentPage === "research" && <Research />}
        <Footer />
      </div>
    </div>
  );
}
