import ServiceCard from "./serviceCard"
import { ServicesList } from "./services";

const ServicesBottomSection = () => {
    return (
        <div className="w-full flex justify-center px-4 lg:px-0">
            <div className='mb-12 max-w-screen-lg self-center'>
                {ServicesList.slice(0, 1).map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default ServicesBottomSection;