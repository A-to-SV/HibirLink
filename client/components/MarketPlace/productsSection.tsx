'use client';
import React, { useState, useEffect } from 'react';
import ProductCard from '../Home/FlashSales/flash-sales-card';
import { useGetAllProductsQuery } from '@/redux/api/endpoints';
import { FaMobileAlt, FaIndustry, FaTshirt, FaShoppingCart,FaBookOpen, FaWrench, FaCouch, FaSpa } from 'react-icons/fa'; 
import { MdLocalGroceryStore } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";

const productTypes: { type: string; icon: React.ElementType }[] = [
    { type: "electronics", icon: FaMobileAlt },
    { type: "health", icon: FaSpa },
    { type: "industry", icon: FaIndustry },
    { type: "fashion", icon: FaTshirt },
    { type: "grocery", icon: MdLocalGroceryStore },
    { type: "maintenance", icon: GrVmMaintenance },
];

const OurProductsSection: React.FC = () => {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const { data: products, isLoading, isError } = useGetAllProductsQuery({});

    const toggleType = (type: string) => {
        setSelectedTypes(prevSelectedTypes =>
            prevSelectedTypes.includes(type)
                ? prevSelectedTypes.filter(t => t !== type)
                : [...prevSelectedTypes, type]
        );
    };

    const filteredProducts = selectedTypes.length === 0
        ? products
        : products?.filter((product: { category: string; }) => selectedTypes.includes(product.category));

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Failed to load Market products. refresh the page.</div>;

    return (
        <div className="flex justify-center">
            <div className="mt-32 flex flex-col align-center w-fit">
                <span className="text-lg md:text-2xl lg:text-3xl pl-20 lg:pl-10 mb-6">Explore Our Products</span>
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
                        {filteredProducts?.map((product: { image: string; name: string; price: string ; }, index: React.Key | null | undefined) => (
                            <ProductCard
                                key={index}
                                percent="-40%"
                                image={product.image}
                                imageAlt="productimage"
                                name={product.name}
                                price={product.price}
                                oldPrice={product.price + 10}
                                rating={4}
                                vote={88}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProductsSection;
