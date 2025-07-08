/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "payomatix",
        links: {
            live: "payomatix.com",
            github: "payomatix/payment-gateway"
        },
        techs: ["php", "laravel", "react", "mysql", "aws", "rest"],
        hasImage: true,
    },
    {
        id: "payagency",
        links: {
            live: "pay.agency",
            github: "#",
        },
        techs: ["node", "react", "api", "rest", "postgreSql" , "aws"],
        hasImage: true
    },
    {
        id: "getglobal",
        links: {
            live: "getglobalgroup.com",
            github: "#"
        },
        techs: ["laravel", "node", "angular", "mysql", "elasticsearch", "mongo", "aws"],
        hasImage: true,
    },
    {
        id: "khubii",
        links: {
            live: "khubii.com",
            github: "#"
        },
        techs: ["angular", "node", "aws", "s3"],
        hasImage: true,
    },
    {
        id: "mytripchance",
        techs: ["laravel", "php", "mysql", "razorpay"],
        links: {

            live: "mytripchance.com",
            github: "#"
        },
        hasImage: true,
    },
    {
        id: "takeyourgrocery",
        techs: ["node", "react", "mysql", "razorpay"],
        links: {
            live: "takeyourgrocery.com",
            github: "takeyourgrocery/ecommerce",
        },
        hasImage: true,
    },
    {
        id: "portfolio",
        techs: ["js", "sass", "webpack"],
        links: {
            // figma: "1164933568884615740",
            github: "/gaurav1999724.github.io",
            live: "gaurav1999724.github.io"
        },
        hasImage: true,
    },
    {
        id: "payment-gateway",
        techs: ["laravel", "stripe", "razorpay", "incash", "cashfree", "paytm", "payu", "api"],
        links: {
            github: "#",
        },
        isSmall: true,
    },
    {
        id: "ai-chat",
        techs: ["php", "mysql", "api", "rest"],
        links: {
            live: "16.171.144.184/ai-chat-php/",
            github: "gaurav1999724/ai-chat-php",
        },
        isSmall: true,
    },
    {
        id: "laravel-drive",
        techs: ["laravel", "php", "mysql", "bootstrap", "api", "rest"],
        links: {
            github: "#",
        },
        isSmall: true,
    },
    {
        id: "ecommerce",
        techs: ["node", "mysql", "payment", "websockets", "shiprocket", "razorpay", "stripe", "incash", "cashfree", "paytm", "payu", "api", "rest"],
        links: {
            github: "#",
        },
        isSmall: true,
    },
    {
        id: "travel-platform",
        techs: ["laravel", "php", "mysql", "booking"],
        links: {
            github: "#",
        },
        isSmall: true,
    },
];

export default projects;
