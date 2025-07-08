import proxy from "../proxies/media"

const media = {
    email: "gauravkumar98910@gmail.com",
    linkedin: "gaurav-kumar-a1bb37237/",
    github: "gaurav1999724",
    discord: {
        id: "",
        tag: "Gaurav Kumar",
    },
    stackOverflow: {
        id: "",
        name: "Gaurav Kumar",
    },

    // figma: "elias_dev",
    // replit: "EliasDev",
    // codewars: "EliasDevis",
    // devTo: "eliasdevis",
    // cssBattle: "elias_dev",
    // codepen: "elias_dev",
    // dribble: "Elias_dev",

    whatsapp: "8130954090"

}

export default new Proxy(media, proxy);

