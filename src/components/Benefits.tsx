import React from 'react';
import { Scale, Droplet, Battery, CandyCane, Moon, Sparkles } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  text: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, text }) => {
  return (
    <div 
      className="flex items-start gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-white/50 animate-on-scroll show"
    >
      <div className="bg-jade-100 p-2 rounded-full text-jade-600 hover-bounce">
        {icon}
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-800">{text}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Scale className="h-6 w-6" />,
      text: "Perda de até 9kg sem dietas"
    },
    {
      icon: <Droplet className="h-6 w-6" />,
      text: "Barriga visivelmente menos inchada em 72h"
    },
    {
      icon: <Battery className="h-6 w-6" />,
      text: "Mais energia sem precisar de café"
    },
    {
      icon: <CandyCane className="h-6 w-6" />,
      text: "Desejo por doces desaparecendo"
    },
    {
      icon: <Moon className="h-6 w-6" />,
      text: "Sono mais profundo e humor mais estável"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      text: "Melhora na pele, unhas e cabelo"
    }
  ];

  return (
    <section className="section-spacing" id="benefits">
      <div className="container-custom">
        <h2 className="section-title animate-on-scroll show mb-2">Resultados que você vai sentir nos primeiros dias:</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;