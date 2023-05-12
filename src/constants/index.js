import {GiPencilRuler, GiPodiumWinner} from "react-icons/gi";
import { FaWrench, FaBolt, FaPencilRuler, FaChartLine } from "react-icons/fa";
import { done, idea, preview, working, pizza, trainer, testimonial01, testimonial_vladyslaw } from "../assets/index"

export const navLinks = [
    {
        id: "about",
        title: "O nas",
        href: "about"
    },
    {
        id: "howItsDone",
        title: "Jak działamy",
        href: "howItsDone"
    },
    {
        id: "pricing",
        title: "Oferta",
        href: "pricing"
    },
    {
        id: "portfolio",
        title: "Referencje",
        href: "portfolio"
    },
    {
        id: "contact",
        title: "Kontakt",
        href: "contact"
    }
]
export const about = [
    {
        img: FaPencilRuler,
        title: "Indywidualizm",
        description: "Twój pomysł + nasze wykonanie = Strona idealnie skrojona pod Ciebie!",
    },
    {
        img: FaChartLine,
        title: "Pozycjonowanie",
        description: "Nasze strony są dostosowanie do wyszukiwarek internetowych",
    },
    {
        img: FaBolt,
        title: "Prędkość",
        description: "Dzięki nowoczesnej technologii, Twoja strona załaduje się błyskawicznie",
    },
    {
        img: FaWrench,
        title: "Wsparcie",
        description: "Na każdym etapie tworzenia strony otrzymasz nasze pełne wsparcie!",
    },
]

export const howItsDone = [
    {
        title: "Przedstawiasz swój pomysł",
        description: "Konsultujemy się z Tobą i uważnie słuchamy Twoich potrzeb jakie masz względem swojej strony. Doradzamy również jakie rozwiązania mogą zostać zaimplementowane, żeby Twoja strona internetowa była stworzona idealnie pod Ciebie i Twoich klientów!",
        img: idea
    },
    {
        title: "Tworzymy wizualizację",
        description: "Posługując się najnowszymi technologiami upewniamy się, że produkt, który będzie dla Ciebie tworzony, spełni wszystkie Twoje wymagania i będziesz miło zaskoczony finalnym wyglądem oraz funkcjonalnością Twojej witryny internetowej.",
        img: preview
    },
    {
        title: "Pracujemy nad Twoją stroną",
        description: "Wracasz do swojej pracy, w której jesteś ekspertem, a w międzyczasie powstaje twoja indywidualna strona internetowa, która wypozycjonuje Twój biznes w Google, oraz przekaże potencjalnym klientom wszystkie potrzebne informacje do kontaktu z Tobą.",
        img: working
    },
    {
        title: "Gotowe!",
        description: "Twój biznes jest już widoczny w sieci! Twoja strona jest wizytówką Twojego biznesu, którą możesz się posługiwać w internecie oraz poza nim. Dzięki nowoczesnemu wyglądowi oraz funkcjonalności Twojej witryny masz pewność, że jesteś odbierany jako ekspert i profesjonalista w swojej branży!",
        img: done
    },
]

export const pricing = [
    {
        id:"basic",
        title: "Basic Plan",
        desc: "Strona-wizytówka w najlepszej proporcji jakości do ceny",
        price: 1299,
        discount: 0,
        features: [
            {
                feature: "Własna Domena"
            },
            {
                feature: "Roczny hosting i certyfikat SSL"
            },
            {
                feature: "Firmowy mail"
            },
            {
                feature: "Bez podstron"
            },
            {
                feature: "Optymalizacja SEO strony"
            },
            {
                feature: "Google Analytics"
            },
            {
                feature: "Wsparcie miesiąc GRATIS"
            },
        ]
    }, 
    {
        id:"standard",
        title: "Standard Plan",
        desc: "Propozycja dla małych biznesów, które potrzebują większej ilości treści na stronie",
        price: 1899,
        discount: 0,
        features: [
            {
                feature: "Własna domena"
            },
            {
                feature: "Roczny hosting i certyfikat SSL"
            },
            {
                feature: "5 firmowych maili"
            },
            {
                feature: "Do trzech podstron"
            },
            {
                feature: "Optymalizacja SEO strony"
            },
            {
                feature: "Google Analytics"
            },
            {
                feature: "Wsparcie 2 miesiące GRATIS"
            },
            {
                feature: "Formularz kontaktowy"
            },
        ]
    }, 
    {
        id:"premium",
        title: "Premium Plan",
        desc: "Okazała strona dla małych i średnich biznesów oraz długoterminowe wsparcie",
        price: 2499,
        discount: 0,
        features: [
            {
                feature: "Własna domena"
            },
            {
                feature: "Roczny hosting i certyfikat SSL"
            },
            {
                feature: "Dowolna ilość firmowych maili"
            },
            {
                feature: "Bez limitu podstron"
            },
            {
                feature: "Optymalizacja SEO strony"
            },
            {
                feature: "Google Analytics"
            },
            {
                feature: "Wsparcie 6 miesięcy GRATIS"
            },
            {
                feature: "Formularz kontaktowy"
            },
            {
                feature: "Animowana zawartość strony"
            },
            {
                feature: "Anglojęzyczna wersja tekstów"
            },
            {
                feature: "Zintegrowany Facebook chat"
            },
        ]
    }, 
]

export const portfolio = [
    {
        title:"Spartan Trener",
        desc: "Landing site dla trenera personalnego",
        img:trainer,
        link:"https://spartan-trener.online/",
        features:[
            'Landing site',
            'Animowane zdjęcia',
            'Sekcja oferty',
            'Formularz kontaktowy'
        ]
    },
    {
        title:"Pizza Eccezionale",
        desc: "Strona internetowa pizzerii z kilkoma podstronami",
        img:pizza,
        link:"https://pizzaeccezionale.online/",
        features:[
            '3 podstrony',
            'Sekcja ocen',
            'Formularz kontaktowy',
            'Menu',
            'Sekcja z animowanym losowaniem'
        ]
    },
]

export const testimonials = [
    {
        name:"Kuba",
        job: "Java Developer",
        desc:"This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it. ",
        img:testimonial01
    },
    {
        name:"Vladyslaw",
        job: "Software Developer",
        desc:"Zespół Web-Masters.pl znakomicie wywiązuje się ze swoich zadań. Współpraca z nimi była przyjemnością.",
        img:testimonial_vladyslaw
    },
    {
        name:"Dawid",
        job: "Software Developer",
        desc:"This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it. ",
        img:testimonial01
    },
    {
        name:"Tomek",
        job: "DevOps",
        desc:"This is a great app and the value is amazing. Since I purchased it I have been using it everyday! Highly recommend it. ",
        img:testimonial01
    },
]