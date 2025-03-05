import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Technical and specialized services with quality assurance.",
    quickLinks: [
        {
            text: "Services",
            url: "#services"
        },
        {
            text: "Clients",
            url: "#clients"
        },
        {
            text: "Contact Us",
            url: "#contactus"
        }
    ],
    email: 'address@yoursite.com',
    telephone: '+55 (51) 99740 - 5047',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        //twitter: 'https://twitter.com/Twitter',
        //facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        //linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/eletro_nobre',
    }
}