import {GiPencilRuler, GiPodiumWinner} from "react-icons/gi";
import { FaWrench } from "react-icons/fa";
import { done, idea, preview, working } from "../assets/index"

export const navLinks = [
    {
        id: "about",
        title: "O nas",
        href: "about"
    },
    {
        id: "pricing",
        title: "Oferta",
        href: "pricing"
    },
    // {
    //     id: "portfolio",
    //     title: "Portfolio",
    //     href: "portfolio"
    // },
    {
        id: "contact",
        title: "Kontakt",
        href: "contact"
    }
]
export const about = [
    {
        img: GiPencilRuler,
        title: "Strony na wymiar",
        description: "Twój pomysł + nasze wykonanie = Strona idealnie skrojona pod Ciebie!",
    },
    {
        img: GiPodiumWinner,
        title: "Pozycjonowanie",
        description: "Zadbamy o to, żeby Twoja strona była widoczna w sieci!",
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