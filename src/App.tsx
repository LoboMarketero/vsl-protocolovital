import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CTAButton from './components/CTAButton';
import Pricing from './components/Pricing';

function App() {
  const [showContent, setShowContent] = useState(true); // Show immediately

  useEffect(() => {
    // Show content immediately
    setShowContent(true);
    document.querySelectorAll('.hidden-content').forEach(el => {
      el.classList.add('show');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative">
      <Header />
      <div className="bg-white/30">
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md mb-4">
              <div style={{position:'relative',paddingTop:'176.66666666666666%'}}>
                <iframe 
                  id="panda-3cccc2a2-419f-40a7-a19e-976b4b3b04a2" 
                  src="https://player-vz-ff1d2603-87c.tv.pandavideo.com.br/embed/?v=3cccc2a2-419f-40a7-a19e-976b4b3b04a2" 
                  style={{border:'none',position:'absolute',top:0,left:0}} 
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                  allowFullScreen={true}
                  width="100%" 
                  height="100%" 
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-100 max-h-none">
        <div className="container-custom">
          <div className="w-full max-w-xl mx-auto px-4 mb-8">
            <CTAButton 
              text="ACESSAR MEU PROTOCOLO 4F AGORA" 
              className="w-full md:w-auto text-center uppercase show"
            />
          </div>
        </div>
        <Benefits />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <FAQ />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}

export default App