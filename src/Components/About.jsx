import React from 'react';
import Reveal from './Reveal';

const StorySection = () => {
  return (
    <section className="bg-[#fcfaf8] py-24 md:py-32 px-6 md:px-12 overflow-hidden relative">
      {/* Background Subtle Texture/Watermark */}
      <div className="absolute top-20 right-[-5%] opacity-[0.03] pointer-events-none hidden lg:block">
        <h2 className="text-[20rem] font-serif italic leading-none">AMBI VINES</h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-8 items-center">
          
          {/* Visual Side: Multi-layered images */}
          <div className="lg:col-span-6 relative">
            <Reveal direction="left" className="relative z-10">
              {/* Main Image with refined shadow */}
              <div className="aspect-[4/5] overflow-hidden shadow-[30px_30px_80px_-15px_rgba(0,0,0,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1500" 
                  alt="Vineyard Detail" 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-[2000ms] hover:scale-105"
                />
              </div>
            </Reveal>

            {/* Floating Accent Image (The Premium Touch) */}
            <Reveal direction="up" delay={0.2} className="absolute -bottom-16 -right-12 md:-right-20 w-1/2 aspect-square z-20 hidden sm:block">
              <div className="w-full h-full p-2 bg-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=1000" 
                  alt="Hands holding grapes" 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            {/* Decorative Geometry */}
            <div className="absolute top-12 -left-12 w-48 h-48 border-[0.5px] -z-0" style={{ borderColor: 'rgba(129, 19, 49, 0.1)' }} />
          </div>

          {/* Text Side */}
          <Reveal direction="right" delay={0.1} className="lg:col-span-5 lg:col-start-8 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-[1px]" style={{ backgroundColor: 'rgba(129, 19, 49, 0.3)' }} />
              <span className="text-[10px] uppercase tracking-[0.5em] font-medium font-sans" style={{ color: '#811331' }}>
                Our Heritage
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.1] mb-10 md:mb-16">
              A Legacy Poured <br /> 
              <span className="italic" style={{ color: 'rgba(129, 19, 49, 0.8)' }}>With Intention</span>
            </h2>

            <div className="space-y-8">
              <p className="text-stone-600/90 leading-relaxed font-light text-base md:text-lg italic font-sans">
                "We believe that great wine isn't made—it's listened to."
              </p>
              
              <div className="w-12 h-[1px] bg-stone-200" />

              <p className="text-stone-500 leading-relaxed font-light tracking-wide text-sm md:text-base font-sans">
                Nestled within the rolling foothills, our estate spans three distinct 
                micro-climates. From the hand-harvesting of our sun-drenched grapes 
                to the patient maturation in French oak, every bottle tells the story of 
                a season, a soil, and a soul.
              </p>

              <div className="pt-10">
                <button
                  type="button"
                  className="group relative inline-flex items-center justify-center px-10 md:px-12 py-4 border border-[#811331] text-[#811331] overflow-hidden transition-all duration-300 ease-out hover:text-white"
                >
                  <span className="relative z-10 uppercase text-[11px] tracking-[0.4em] font-bold font-sans">
                    Discover Our Philosophy
                  </span>
                  <div
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.25,1)]"
                    style={{ backgroundColor: '#811331' }}
                  />
                </button>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default StorySection;
