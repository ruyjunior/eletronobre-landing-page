import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `How does ${siteDetails.siteName} improve industrial electrical systems?`,
        answer: 'We optimize energy distribution, enhance system reliability, and implement automation solutions to increase efficiency and reduce operational costs.',
    },
    {
        question: `What are the benefits of thermography in industrial maintenance?`,
        answer: 'Thermography allows early detection of overheating components, preventing failures and reducing downtime. It also helps identify insulation issues and energy losses.',
    },
    {
        question: 'How does preventive maintenance reduce costs?',
        answer: 'By proactively monitoring equipment conditions and scheduling maintenance in advance, we help prevent unexpected failures and expensive emergency repairs.',
    },
    {
        question: 'Can your solutions be customized for my facility?',
        answer: 'Absolutely! We tailor our automation, electrical, and maintenance solutions to meet the specific needs of your industrial or commercial environment.',
    },
    {
        question: 'Do you offer real-time monitoring solutions?',
        answer: 'Yes! Our advanced monitoring systems provide real-time data and predictive analytics to ensure optimal performance and early fault detection.',
    }
];
