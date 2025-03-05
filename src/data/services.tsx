import { 
    FiBarChart2, FiActivity, FiCalendar, FiTarget, FiTrendingUp, FiDollarSign, FiAlertTriangle, FiBatteryCharging, FiThermometer
 } from "react-icons/fi";

import { IServices } from "@/types"

export const services: IServices[] = [
    {
        title: "Industrial Electrical",
        description: "Maximize efficiency and reliability in your industrial electrical systems with cutting-edge automation and control solutions.",
        bullets: [
            {
                title: "Advanced Power Management",
                description: "Optimize energy consumption and reduce operational costs with smart power distribution.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Customized Automation Solutions",
                description: "Tailored automation systems to enhance productivity and safety in industrial environments.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Predictive Maintenance",
                description: "Minimize downtime with real-time monitoring and proactive maintenance alerts.",
                icon: <FiTrendingUp size={26} />
            }
        ]
        ,
        imageSrc: "/images/service1.jpg"
    },
    {
        title: "Thermography",
        description: "Enhance predictive maintenance and prevent failures with advanced thermal imaging solutions.",
        bullets: [
            {
                title: "Early Fault Detection",
                description: "Identify overheating components before they cause critical failures.",
                icon: <FiAlertTriangle size={26} />
            },
            {
                title: "Energy Efficiency Optimization",
                description: "Detect insulation issues and energy losses to improve system performance.",
                icon: <FiBatteryCharging size={26} />
            },
            {
                title: "Real-Time Monitoring",
                description: "Access thermal data instantly for quick decision-making and safety assurance.",
                icon: <FiThermometer size={26} />
            }
        ],
        imageSrc: "/images/service2.jpg"
    },
        {
            title: "Preventive Maintenance",
            description: "Reduce downtime and extend the lifespan of your equipment with proactive maintenance strategies.",
            bullets: [
                {
                    title: "Condition Monitoring",
                    description: "Continuously track equipment performance to detect potential failures early.",
                    icon: <FiActivity size={26} />
                },
                {
                    title: "Automated Scheduling",
                    description: "Plan and execute maintenance tasks efficiently to prevent unexpected breakdowns.",
                    icon: <FiCalendar size={26} />
                },
                {
                    title: "Cost Reduction",
                    description: "Optimize resources and lower repair costs by addressing issues before they escalate.",
                    icon: <FiDollarSign size={26} />
                }
            ],
            imageSrc: "/images/service3.jpg"
        }
        
]