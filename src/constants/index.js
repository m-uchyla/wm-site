import {GiPencilRuler, GiPodiumWinner} from "react-icons/gi";
import { FaWrench } from "react-icons/fa";

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