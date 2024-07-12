import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        image: string; 
        occupation: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addAnimation = () => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerRef.current && scrollerRef.current.appendChild(duplicatedItem);
            });

            getDirection();
            getSpeed();
        }
    };

    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            const duration = {
                fast: "20s",
                normal: "40s",
                slow: "80s",
            }[speed];
            containerRef.current.style.setProperty("--animation-duration", duration);
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full gap-4 py-4 w-max flex-nowrap",
                    "animate-scroll",
                    pauseOnHover && "hover:animation-play-state:paused"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        key={item.name}
                        className="w-[350px] bg-primary max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full mr-4"
                                    style={{width: '70px', height: '70px'}}
                                    width={100}
                                    height={100}
                                />
                                <div>
                                    <span className="block text-sm font-medium text-white">{item.name}</span>
                                    <span className="block text-xs text-gray-300">{item.occupation}</span>
                                </div>
                            </div>
                            <FaQuoteRight className="text-3xl text-gray-300" />
                        </div>
                        <blockquote>
                            <span className="text-sm leading-[1.6] text-gray-100 font-normal">
                                {item.quote}
                            </span>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
