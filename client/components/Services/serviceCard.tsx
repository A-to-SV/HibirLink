import React from 'react';

interface ServiceCardProps {
  logoSrc: string;
  title: string;
  subtitle: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ logoSrc, title, subtitle, features }) => {
  return (
    <div className="bg-gray-100 w-full p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-center mb-4">
      <img 
        src={logoSrc} 
        alt="icon" 
        className="w-24 h-24 object-contain mb-4 sm:mb-0 sm:w-32 sm:h-32 me-6"
      />
      <div className="border-l-2 border-r-2 border-gray-400 px-4 flex-grow">
        <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
        <p className="text-blue-600 font-semibold">{subtitle}</p>
        <ul className="mt-4 text-blue-700 space-y-1">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </div>
      <button className="bg-white p-2 m-4 rounded-lg shadow-md">
        <img src='/assets/send-icon.png' alt="icon" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
      </button>
    </div>
  );
};

export default ServiceCard;
