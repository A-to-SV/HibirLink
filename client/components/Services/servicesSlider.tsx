import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ServiceCard from './serviceCard';
import { ServicesList } from './services';
import Slider from 'react-slick';

const NextArrow = ({ onClick }: { onClick: () => void }) => (
    <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-300 rounded-full z-10"
        style={{ marginRight: '-40px' }}
        onClick={onClick}
    >
        <FaArrowRight />
    </div>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
    <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer bg-gray-300 rounded-full z-10"
        onClick={onClick}
        style={{ marginLeft: '-40px' }}
    >
        <FaArrowLeft />
    </div>
);

const ServicesSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow onClick={() => { }} />,
        prevArrow: <PrevArrow onClick={() => { }} />,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='px-8'>
            <div className="relative md:w-[70%] mx-auto mt-10 md:mt-20">
                <h1 className='mb-4 text-xl md:text-2xl text-gray-500'>Featured Service Providers</h1>
                <Slider {...settings}>
                    {ServicesList.map((service, index) => (
                        <div style={{ marginLeft: '10px' }} className='me-6' key={index}>
                            <ServiceCard {...service} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ServicesSlider;
