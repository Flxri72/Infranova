import { useState, useEffect, useRef } from 'react';
import { Server, Shield, Code, Database, Lightbulb, Clock, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { servicesConfig } from '../config';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server, Shield, Code, Database, Lightbulb, Clock, Users,
};

export function WineShowcase() {
  // Null check: if config is empty, render nothing
  if (!servicesConfig.mainTitle || servicesConfig.services.length === 0) return null;

  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = servicesConfig.services;
  const features = servicesConfig.features;
  const quote = servicesConfig.quote;
  const service = services[activeService];

  const nextService = () => setActiveService((prev) => (prev + 1) % services.length);
  const prevService = () => setActiveService((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Title */}
        <div className="fade-up text-center mb-16">
          <span className="font-script text-3xl text-blue-400 block mb-2">{servicesConfig.scriptText}</span>
          <span className="text-blue-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            {servicesConfig.subtitle}
          </span>
          <h2 className="font-serif text-h1 text-white">{servicesConfig.mainTitle}</h2>
        </div>

        {/* Service Tabs */}
        <div className="fade-up flex justify-center gap-2 mb-16 flex-wrap" style={{ transitionDelay: '0.1s' }}>
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveService(i)}
              className={`px-6 py-3 rounded-sm text-sm transition-all duration-300 ${
                i === activeService
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Service Info */}
          <div className="slide-in-left lg:col-span-2 order-2 lg:order-1">
            {/* Number + Name */}
            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-serif text-6xl lg:text-7xl text-blue-500/30 leading-none">{service.year}</span>
                <div>
                  <h2 className="font-serif text-h3 text-white leading-tight">{service.name}</h2>
                  <span className="font-script text-xl text-blue-400">{service.subtitle}</span>
                </div>
              </div>
              <div className="w-16 h-px bg-blue-500 mt-4" />
            </div>

            {/* Description */}
            <p className="text-white/85 leading-relaxed mb-8">{service.description}</p>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-8">
              {service.features.map((feature, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm text-sm text-white/70">
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary rounded-sm flex items-center gap-2 group bg-blue-500 hover:bg-blue-600"
              aria-label="Contact Us"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Center: Service Image */}
          <div className="lg:col-span-1 order-1 lg:order-2 flex justify-center">
            <div className="relative" style={{ width: '280px', height: '380px' }}>
              {/* Glow */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none`}>
                <div className={`w-48 h-48 ${service.glowColor} rounded-full blur-3xl transition-colors duration-700`} />
              </div>

              {/* Images */}
              {services.map((s, i) => (
                <img
                  key={s.id}
                  src={s.image}
                  alt={`${s.name} - ${s.subtitle}`}
                  loading={i === 0 ? undefined : 'lazy'}
                  style={s.filter ? { filter: s.filter } : undefined}
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg z-10 drop-shadow-2xl transition-all duration-700 ${
                    i === activeService
                      ? 'opacity-100 scale-100 translate-y-0'
                      : i < activeService
                        ? 'opacity-0 scale-90 -translate-y-6 pointer-events-none'
                        : 'opacity-0 scale-90 translate-y-6 pointer-events-none'
                  }`}
                />
              ))}

              {/* Switcher Arrows */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                <button
                  onClick={prevService}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm text-white/50 font-serif tabular-nums whitespace-nowrap">
                  {activeService + 1} / {services.length}
                </span>
                <button
                  onClick={nextService}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Features + Quote */}
          <div className="slide-in-right lg:col-span-2 order-3">
            <div className="space-y-6">
              {features.map((feature) => {
                const IconComponent = iconMap[feature.icon] || Server;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/30 transition-colors">
                      <IconComponent className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-white/65 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote */}
            {quote.text && (
              <div className="mt-10 p-6 bg-white/[0.03] rounded-lg border-l-2 border-blue-500/50">
                {quote.prefix && <p className="font-script text-2xl text-blue-400 mb-2">{quote.prefix}</p>}
                <p className="text-white/70 text-sm italic leading-relaxed">
                  "{quote.text}"
                </p>
                {quote.attribution && <p className="text-blue-500 text-xs mt-3">— {quote.attribution}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
