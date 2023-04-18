import './Tiere.css';

function Tiere() {
    const animals = [
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/04/714-kw_120915282_Kattas.jpg?v=1-0",
            name: "Lemuren",
            figcaption: "Die guten Geister von Madagaskar",
            paragraphs: []
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/01/1591-Orang-Utan-Regenwald-iStock-stretch.jpg?v=2-0",
            name: "Orang-Utan",
            figcaption: "Die Genies auf den Bäumen",
            paragraphs: []
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/01/2211-Bildschirmfoto%202022-09-13%20um%2021.02.56.png?v=1-9",
            name: "Pfeilgiftfrosch",
            figcaption: "Schön & tödlich",
            paragraphs: []
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/05/215-afrikanische-elefanten.jpg?v=1-0",
            name: "Elefanten",
            figcaption: "Kraftkerl mit Superhirn",
            paragraphs: []
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/08/1778-komodowaran-indonesien.jpg?v=1-1",
            name: "Komodowarane",
            figcaption: "Die letzten Drachen der Erde",
            paragraphs: []
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/06/216-regenwald-tiere-faultier-mit-jungem.jpg?v=1-0",
            name: "Faultier",
            figcaption: "schlaue Langschläfer im Regenwald",
            paragraphs: []
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/00/220-regenwaldtiere-kolibri-nix6658.jpg?v=1-0",
            name: "Kolibri",
            figcaption: "glänzende Luftakrobaten",
            paragraphs: []
        },
        {
            img: "https://cdn.pixabay.com/photo/2019/05/20/18/01/armadillo-4217183_1280.jpg",
            name: "Gürteltier",
            figcaption: "bei Gefahr macht es sich rund",
            paragraphs: []
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/09/989-ameisenbaer-regenwald.jpg?v=2-12",
            name: "Ameisenbär",
            figcaption: "immer die Nase vorn ",
            paragraphs: []
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/04/1424-8858799708_e26dd2a596_o.jpg?v=1-0",
            name: "Löwenäffchen",
            figcaption: "Die Könige der Mata Atlântica",
            paragraphs: []
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/06/1266-Capivara%28Hydrochoerus_hydrochaeris%29.jpg?v=1-6",
            name: "Wasserschweine",
            figcaption: "die „Herren der Gräser“",
            paragraphs: []
        },
        {
            img: "https://cdn.pixabay.com/photo/2015/11/03/16/00/keel-billed-toucan-1021048_1280.jpg",
            name: "Tukane",
            figcaption: "die Spaßvögel des Dschungels",
            paragraphs: []
        },
    ]


    return (
        <main className={"animals"}>
                <h1>Tiere</h1>

                <div className={"animalsView"}>

                    {animals.map(animal => (
                        <figure className={"animalCard"}>
                            <div className={"cardImg"}>
                                <img src={animal.img} alt="Lemur"/>
                            </div>
                            <figcaption className={"cardBody"}>
                                <h2 className={"cardTitle"}>{animal.name}</h2>
                                <p className={"cardBodyText"}>{animal.figcaption}</p>
                                <button className={"cardButton"} onClick={() => alert("Noch nicht fertig implementiert")}><h3>Mehr</h3></button>
                            </figcaption>
                        </figure>
                    ))}

                </div>
        </main>
    )
}

export default Tiere;