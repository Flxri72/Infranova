import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronRight } from 'lucide-react';
import { teamConfig } from '../config';

export function News() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right, .scale-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleMember = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Null check: if config is empty, render nothing
  if (!teamConfig.mainTitle) return null;

  return (
    <section
      id="team"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="fade-up flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="font-script text-3xl text-blue-400 block mb-2">{teamConfig.scriptText}</span>
            <span className="text-blue-500 text-xs uppercase tracking-[0.2em] mb-4 block">
              {teamConfig.subtitle}
            </span>
            <h2 className="font-serif text-h1 text-white has-bar">
              {teamConfig.mainTitle}
            </h2>
          </div>
        </div>

        {/* Team Grid - Vertical List with Expandable Animation */}
        {teamConfig.members.length > 0 && (
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3">
              {teamConfig.members.map((member, index) => {
                const isExpanded = expandedId === member.id;
                return (
                  <li
                    key={member.id}
                    className="fade-up overflow-hidden rounded-lg border border-white/10 bg-white/5"
                    style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <button
                      onClick={() => toggleMember(member.id)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors duration-300"
                    >
                      {/* Left Side - Name and Role */}
                      <div className={`flex items-center gap-4 transition-all duration-500 ease-out ${isExpanded ? 'w-1/3' : 'w-full'}`}>
                        {/* Index Number */}
                        <span className="text-2xl font-serif text-blue-500/60">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        
                        {/* Name and Role */}
                        <div className={`transition-all duration-500 ease-out ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-100'}`}>
                          <h3 className="font-serif text-lg text-white">
                            {member.name}
                          </h3>
                          <p className="text-blue-400 text-sm">{member.role}</p>
                        </div>
                      </div>

                      {/* Right Side - Description (appears when expanded) */}
                      <div className={`transition-all duration-500 ease-out overflow-hidden ${isExpanded ? 'w-2/3 opacity-100' : 'w-0 opacity-0'}`}>
                        <p className="text-white/70 text-sm pl-4 border-l border-blue-500/30">
                          {member.description}
                        </p>
                      </div>

                      {/* Chevron Icon */}
                      <ChevronRight 
                        className={`w-5 h-5 text-blue-400 transition-transform duration-300 ml-3 flex-shrink-0 ${isExpanded ? 'rotate-90' : ''}`} 
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Testimonials Section */}
        {teamConfig.testimonials.length > 0 && (
          <div className="mt-24">
            <div className="fade-up text-center mb-12">
              <span className="font-script text-3xl text-blue-400 block mb-2">{teamConfig.testimonialsScriptText}</span>
              <span className="text-blue-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                {teamConfig.testimonialsSubtitle}
              </span>
              <h2 className="font-serif text-h2 text-white">
                {teamConfig.testimonialsMainTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamConfig.testimonials.map((t, index) => (
                <div
                  key={t.name}
                  className="scale-in p-8 bg-white/5 rounded-lg border border-white/10 relative"
                  style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
                >
                  <Quote className="w-8 h-8 text-blue-500/30 absolute top-6 right-6" />
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-blue-500 fill-blue-500" />
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About/Story Section */}
        {teamConfig.storyTitle && (
          <div id="about" className="fade-up mt-24 pt-20 border-t border-white/10" style={{ transitionDelay: '0.1s' }}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="slide-in-left">
                <span className="font-script text-3xl text-blue-400 block mb-2">{teamConfig.storyScriptText}</span>
                <span className="text-blue-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                  {teamConfig.storySubtitle}
                </span>
                <h2 className="font-serif text-h2 text-white mb-6">
                  {teamConfig.storyTitle}
                </h2>
                <div className="space-y-4 text-white/75 leading-relaxed">
                  {teamConfig.storyParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Timeline Highlights */}
                {teamConfig.storyTimeline.length > 0 && (
                  <div className="mt-8 grid grid-cols-4 gap-4">
                    {teamConfig.storyTimeline.map((item, index) => (
                      <div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="font-serif text-2xl text-blue-500 mb-1">{item.value}</div>
                        <div className="text-xs text-white/60">{item.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="slide-in-right relative">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  {teamConfig.storyImage && (
                    <>
                      <img
                        src={teamConfig.storyImage}
                        alt={teamConfig.storyImageCaption}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </>
                  )}
                </div>

                {/* Quote Overlay */}
                {teamConfig.storyQuote.text && (
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-sm rounded-lg">
                    {teamConfig.storyQuote.prefix && (
                      <p className="font-script text-2xl text-blue-400 mb-1">{teamConfig.storyQuote.prefix}</p>
                    )}
                    <p className="text-white italic text-sm leading-relaxed mb-2">
                      "{teamConfig.storyQuote.text}"
                    </p>
                    {teamConfig.storyQuote.attribution && (
                      <p className="text-blue-400 text-xs">— {teamConfig.storyQuote.attribution}</p>
                    )}
                  </div>
                )}

                {/* Decorative Frame */}
                <div className="absolute -top-4 -right-4 w-full h-full border border-blue-500/20 rounded-lg -z-10" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
