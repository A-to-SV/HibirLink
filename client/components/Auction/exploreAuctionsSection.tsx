"use client";
import React, { useState, useEffect } from 'react';
import ProductCard from '../Home/FlashSales/flash-sales-card';
import { FaMobileAlt, FaHeartbeat, FaIndustry, FaTshirt, FaShoppingCart, FaWrench, FaCouch, FaSpa, FaPaintBrush } from 'react-icons/fa'; // Example icons
import { AuctionsList } from './auctions';
import { FaCar, FaHouse } from "react-icons/fa6";
import AuctionListCard from './AuctionListCard';

const productTypes: { type: string; icon: React.ElementType }[] = [
    { type: "House", icon: FaHouse },
    { type: "Vehicle", icon: FaCar },
    { type: "Electronics", icon: FaMobileAlt },
    { type: "Arts", icon: FaPaintBrush },
    { type: "Industrial", icon: FaIndustry },
    { type: "Fashion", icon: FaTshirt },
    { type: "Furniture", icon: FaCouch },
];

const ExploreAuctionsSection: React.FC = () => {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>(AuctionsList as any[]);

    const toggleType = (type: string) => {
        setSelectedTypes(prevSelectedTypes =>
            prevSelectedTypes.includes(type)
                ? prevSelectedTypes.filter(t => t !== type)
                : [...prevSelectedTypes, type]
        );
    };

    useEffect(() => {
        if (selectedTypes.length === 0) {
            setFilteredProducts(AuctionsList);
        } else {
            setFilteredProducts(
                (AuctionsList).filter(product =>
                    selectedTypes.includes(product?.type ?? '')
                )
            );
        }
    }, [selectedTypes]);

    return (
        <div className="flex justify-center">
            <div className="mt-32 flex flex-col align-center w-fit">
                <span className="text-lg md:text-2xl lg:text-3xl pl-20 lg:pl-10 mb-6">Explore Auctions</span>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {productTypes.map(({ type, icon: Icon }) => (
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
                <div className="w-full flex justify-center mt-8">
                    <div style={{ maxWidth: '1400px' }} className="flex flex-wrap p-4 pl-20 lg:pl-10 gap-12 justify-start">
                        {filteredProducts.map((product, index) => (
                            <AuctionListCard
                                key={index}
                                starts={product.starts}
                                image={product.image}
                                imageAlt={product.imageAlt}
                                name={product.name}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreAuctionsSection;
