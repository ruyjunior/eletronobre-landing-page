import ServicesSection from "./ServicesSection"

import { services } from "@/data/services"

const Services: React.FC = () => {
    return (
        <div id="features">
            <h2 className="sr-only">Features</h2>
            {services.map((item, index) => {
                return <ServicesSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Services