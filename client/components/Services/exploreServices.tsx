"use client";
import React, { useState, useEffect } from 'react';
import { FaWrench, FaUserTie, FaBroom, FaBolt, FaChalkboardTeacher } from 'react-icons/fa';
import { ServicesList } from './services';
import ServiceCard from './serviceCard';

const serviceTypes: { type: string; icon: React.ElementType }[] = [
    { type: "Freelancer", icon: FaUserTie },
    { type: "Plumber", icon: FaWrench },
    { type: "Electrician", icon: FaBolt },
    { type: "Cleaning", icon: FaBroom },
    { type: "Tutoring", icon: FaChalkboardTeacher },
];

const ExploreServiceProviders: React.FC = () => {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [filteredServices, setFilteredServices] = useState<any[]>(ServicesList as any[]);

    const toggleType = (type: string) => {
        setSelectedTypes(prevSelectedTypes =>
            prevSelectedTypes.includes(type)
                ? prevSelectedTypes.filter(t => t !== type)
                : [...prevSelectedTypes, type]
        );
    };

    useEffect(() => {
        if (selectedTypes.length === 0) {
            setFilteredServices(ServicesList);
        } else {
            setFilteredServices(
                ServicesList.filter(service =>
                    selectedTypes.includes(service?.type ?? '')
                )
            );
        }
    }, [selectedTypes]);

    return (
        <div className="flex justify-center">
            <div className=" flex justify-center mt-32 w-full max-w-screen-xl px-4 lg:px-0">
                <div>
                <p className="text-lg text-primary md:text-2xl lg:text-3xl pl-4 lg:pl-10 mb-10">Explore Services</p>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {serviceTypes.map(({ type, icon: Icon }) => (
                        <button
                            key={type}
                            className={`p-2 border w-40 rounded flex flex-col items-center justify-center ${selectedTypes.includes(type) ? 'bg-blue-500 text-white' : 'bg-white text-primary'}`}
                            onClick={() => toggleType(type)}
                        >
                            <Icon size={30} />
                            <span className={`${selectedTypes.includes(type) ? 'text-white' : 'text-black'}`}>{type}</span>
                        </button>
                    ))}
                </div>
                <div className="w-full max-w-screen-lg mt-8">
                    {filteredServices.map((service, index) => (
                        <div className='mb-10' key={index}>
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreServiceProviders;
