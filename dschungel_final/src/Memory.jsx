import './Memory.css';
import {useEffect, useRef, useState} from "react";


export default function Memory() {
    const [cards, setCards] = useState([
        {type: "elephant", img: 'assets/elephant.png'},
        {type: "elephant", img: 'assets/elephant.png'},
        {type: "monkey", img: 'assets/monkey.png'},
        {type: "monkey", img: 'assets/monkey.png'},
        {type: "rhino", img: 'assets/rhino.png'},
        {type: "rhino", img: 'assets/rhino.png'},
        {type: "tiger", img: 'assets/tiger.png'},
        {type: "tiger", img: 'assets/tiger.png'},
        {type: "snake", img: 'assets/snake.png'},
        {type: "snake", img: 'assets/snake.png'},
        {type: "lemur", img: 'assets/lemur.png'},
        {type: "lemur", img: 'assets/lemur.png'}
    ]);


    const [openCards, setOpenCards] = useState([]);
    const [clearedCards, setClearedCards] = useState({});
    const [disableAllCards, setDisableAllCards] = useState(false);
    const [turnCounter, setTurnCounter] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const timeout = useRef(null);

    function disable() {
        setDisableAllCards(true);
    };

    function enable() {
        setDisableAllCards(false);
    };

    useEffect(() => {
        setCards(shuffleCards(cards));
    }, []);


    function checkCompletion() {
        console.log(Object.keys(clearedCards).length)
        if (Object.keys(clearedCards).length === cards.length / 2) {
            console.log('Super!');
            setShowModal(true);
        }
    };

    function checkIfMatch() {
        const [first, second] = openCards;
        enable();
        if (cards[first].type === cards[second].type) {
            setClearedCards((prev) => ({...prev, [cards[first].type]: true}));
            setOpenCards([]);
            return;
        }
        // This is to flip the cards back after 500ms duration
        timeout.current = setTimeout(() => {
            setOpenCards([]);
        }, 500);
    };


    function actionHandler(index) {
        if (openCards.length === 1) {
            setOpenCards((prev) => [...prev, index]);
            disable();
            setTurnCounter(turnCounter + 1);
        } else {
            clearTimeout(timeout.current);
            setOpenCards([index]);
        }
    }


    useEffect(() => {
        let timeout = null;
        if (openCards.length === 2) {
            timeout = setTimeout(checkIfMatch, 300);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [openCards]);


    useEffect(() => {
        checkCompletion();
    }, [clearedCards]);


    function checkIsFlipped(index) {
        return openCards.includes(index);
    }

    function checkIsInactive(card) {
        return Boolean(clearedCards[card.type]);
    }

    function restart() {
        setShowModal(false)
        setOpenCards([]);
        setClearedCards({});
        setDisableAllCards(false);
        timeout.current = setTimeout(() => {
            setCards(shuffleCards(cards));
        }, 500);
        setTurnCounter(0);
    }


    function WinModal() {
        return (
            <div className="details-modal">
                <button onClick={() => setShowModal(false)} className="winModal-close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                              fill="black"/>
                    </svg>
                </button>
                <div className="details-modal-title">
                    <h1>Super! Du hast es geschafft</h1>
                </div>
                <div className="details-modal-content">
                    <p>
                        Super, du hast das Memory mit {turnCounter} Zügen erledigt.
                    </p>
                    <button className={"memoryRestart"} onClick={restart}>Neu Starten</button>
                </div>
            </div>
        )
    }

    return (
        <main id={"memory"}>
            <div id={"memoryInfo"}>
                <h1 id={"memoryScore"}>Score: {turnCounter}</h1>
                <button className={"memoryRestart"} onClick={restart}>Neu Starten</button>
            </div>
            <div id={"memoryView"}>
                {cards.map((card, index) => (
                    <MemoryCard
                        key={index}
                        img={card.img}
                        index={index}
                        isDisabled={disableAllCards}
                        isInactive={checkIsInactive(card)}
                        isFlipped={checkIsFlipped(index)}
                        onClick={actionHandler}
                    />
                ))}
            </div>
            {showModal && <WinModal/>}
        </main>
    )
}

function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        const currentIndex = i - 1;
        const temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}


function MemoryCard({onClick, img, index, isInactive, isFlipped, isDisabled}) {

    function clickHandler() {
        if (!isFlipped && !isDisabled) {
            onClick(index);
        }
    }

    return (
        <div onClick={clickHandler} className={"memoryField"}>
            <img
                className={`item animal ${isFlipped ? "animalActivated" : ""} ${isInactive ? "animalCompleted" : ""}`}
                src={img} alt="Memory Animal"/>
            <img
                className={`item bushLeft ${isFlipped ? "bushLeftActivated" : ""} ${isInactive ? "bushLeftCompleted" : ""}`}
                src={"assets/bush.png"} alt="Memory Bush"/>
            <img
                className={`item bushRight ${isFlipped ? "bushRightActivated" : ""} ${isInactive ? "bushRightCompleted" : ""}`}
                src={"assets/bush.png"} alt="Memory Bush"/>
        </div>
    )
}




