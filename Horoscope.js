export function Horoscope(text){
    let nshan=""
    switch (text) {
        case "ՀՈՐՈՍԿՈՊ-ԱՌՅՈՒԾ":
            nshan="leo"
            break;
        case "ՀՈՐՈՍԿՈՊ-ԽՈՅ":
            nshan="aries"
            break;
        case "ՀՈՐՈՍԿՈՊ-ՋՐՀՈՍ":
            nshan="aquarius"
            break;
        case "ՀՈՐՈՍԿՈՊ-ՑՈՒԼ":
            nshan="taurus"
            break;
        case "ՀՈՐՈՍԿՈՊ-ԱՅԾԵՂՋՈՒՐ":
            nshan="capricorn"
            break;
        case "ՀՈՐՈՍԿՈՊ-ԵՐԿՎՈՐՅԱԿ":
            nshan="gemini"
            break;
        case "ՀՈՐՈՍԿՈՊ-ԿՇԵՌՔ":
            nshan="libra"
            break;
        case "ՀՈՐՈՍԿՈՊ-ԽԵՂԳԵՏԻՆ":
            nshan="cancer"
            break;
        case "ՀՈՐՈՍԿՈՊ-ՁՈՒԿ":
            nshan="pisces"
            break;
        case "ՀՈՐՈՍԿՈՊ-ԿԱՐԻՃ":
            nshan="scorpio"
            break;
        case "ՀՈՐՈՍԿՈՊ-ԱՂԵՂՆԱՎՈՐ":
            nshan="sagittarius"
            break;
            break;
        case "ՀՈՐՈՍԿՈՊ-ԿՈՒՅՍ":
            nshan="virgo"
            break;


        default:
            break;
    }
    return nshan
}