import { useState, useEffect, useRef } from 'react';
import { Search, Layout, Settings, TrendingUp } from 'lucide-react';
import { methodologyConfig } from '../config';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search, Layout, Settings, TrendingUp,
};

export function Museum() {
  // Null check: if config is empty, render nothing
  if (!methodologyConfig.mainTitle) return null;

  const [activeTab, setActiveTab] = useState(methodologyConfig.tabs[0]?.id || '');
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

  const activeTabData = methodologyConfig.tabs.find(tab => tab.id === activeTab);

  return (
    <section
      id="methodology"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-500/5 to-transparent" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <div className="slide-in-left mb-10">
              <span className="font-script text-3xl text-blue-400 block mb-2">{methodologyConfig.scriptText}</span>
              <span className="text-blue-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                {methodologyConfig.subtitle}
              </span>
              <h2 className="font-serif text-h1 text-white has-bar">
                {methodologyConfig.mainTitle}
              </h2>
            </div>

            {/* Introduction */}
            {methodologyConfig.introText && (
              <p className="fade-up text-white/75 leading-relaxed mb-10" style={{ transitionDelay: '0.1s' }}>
                {methodologyConfig.introText}
              </p>
            )}

            {/* Tabs */}
            {methodologyConfig.tabs.length > 0 && (
              <div className="fade-up flex flex-wrap gap-2 mb-8" style={{ transitionDelay: '0.15s' }}>
                {methodologyConfig.tabs.map((tab) => {
                  const IconComponent = iconMap[tab.icon];
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      aria-pressed={activeTab === tab.id}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {IconComponent && <IconComponent className="w-4 h-4" />}
                      {tab.name}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Tab Content */}
            <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
              {activeTabData && (
                <div className="p-6 bg-white/5 rounded-lg border border-white/10 transition-all duration-300">
                  <h3 className="font-serif text-h5 text-white mb-4">
                    {activeTabData.content.title}
                  </h3>
                  <p className="text-white/75 leading-relaxed mb-4">
                    {activeTabData.content.description}
                  </p>
                  <div className="flex items-center gap-3 text-blue-500">
                    <div className="w-8 h-px bg-blue-500" />
                    <span className="text-sm font-medium">
                      {activeTabData.content.highlight}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Horizontal Timeline */}
            {methodologyConfig.timeline.length > 0 && (
              <div className="fade-up mt-8" style={{ transitionDelay: '0.25s' }}>
                <div className="relative">
                  {/* Horizontal line */}
                  <div className="absolute top-3 left-0 right-0 h-px bg-blue-500/30" />
                  {/* Timeline points */}
                  <div className="flex justify-between overflow-x-auto gap-2">
                    {methodologyConfig.timeline.map((event) => (
                      <div key={event.year} className="relative flex flex-col items-center flex-shrink-0 min-w-[70px]">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#141414] border-2 border-blue-500 z-10" />
                        <span className="font-serif text-sm text-blue-500 mt-2">{event.year}</span>
                        <span className="text-[11px] text-white/60 mt-0.5 text-center whitespace-nowrap">{event.event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Quote */}
            {methodologyConfig.quote.text && (
              <div className="fade-up mt-8 flex items-center gap-6" style={{ transitionDelay: '0.3s' }}>
                {methodologyConfig.founderPhoto && (
                  <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-blue-500/30 shadow-lg flex-shrink-0">
                    <img
                      src={methodologyConfig.founderPhoto}
                      alt={methodologyConfig.founderPhotoAlt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  {methodologyConfig.quote.prefix && (
                    <p className="font-script text-2xl text-blue-400 mb-1">
                      &ldquo;{methodologyConfig.quote.prefix}&rdquo;
                    </p>
                  )}
                  <p className="text-white/70 text-sm italic">
                    "{methodologyConfig.quote.text}"
                  </p>
                  {methodologyConfig.quote.attribution && (
                    <p className="text-blue-500 text-xs mt-2">
                      — {methodologyConfig.quote.attribution}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="slide-in-right relative" style={{ transitionDelay: '0.15s' }}>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              {methodologyConfig.tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeTab === tab.id
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={tab.image}
                    alt={`${tab.name} - ${methodologyConfig.mainTitle}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                </div>
              ))}

              {/* Year Badge */}
              {methodologyConfig.yearBadge && (
                <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-black/40 backdrop-blur-sm border border-blue-500/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-2xl text-blue-400">{methodologyConfig.yearBadge}</div>
                    <div className="text-[10px] text-white/70 uppercase tracking-wider">{methodologyConfig.yearBadgeLabel}</div>
                  </div>
                </div>
              )}

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    {methodologyConfig.openingHoursLabel && <p className="text-blue-400 text-sm">{methodologyConfig.openingHoursLabel}</p>}
                    {methodologyConfig.openingHours && <p className="text-white text-lg">{methodologyConfig.openingHours}</p>}
                  </div>
                  {methodologyConfig.ctaButtonText && (
                    <button
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn-primary rounded-sm text-sm px-6 bg-blue-500 hover:bg-blue-600"
                      aria-label={methodologyConfig.ctaButtonText}
                    >
                      {methodologyConfig.ctaButtonText}
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
