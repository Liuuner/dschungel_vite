import './Gallery.css';
import './Responsive.css';

function Gallery() {
    const animals = [
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/04/714-kw_120915282_Kattas.jpg?v=1-0",
            figcaption: "Lemuren – Die guten Geister von Madagaskar"
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/01/1591-Orang-Utan-Regenwald-iStock-stretch.jpg?v=2-0",
            figcaption: "Orang-Utans – Die Genies auf den Bäumen"
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/01/2211-Bildschirmfoto%202022-09-13%20um%2021.02.56.png?v=1-9",
            figcaption: "Der Pfeilgiftfrosch: Schön & tödlich"
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/05/215-afrikanische-elefanten.jpg?v=1-0",
            figcaption: "Elefanten - Kraftkerl mit Superhirn"
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/08/1778-komodowaran-indonesien.jpg?v=1-1",
            figcaption: "Komodowarane - Die letzten Drachen der Erde"
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/06/216-regenwald-tiere-faultier-mit-jungem.jpg?v=1-0",
            figcaption: "Faultiere – schlaue Langschläfer im Regenwald"
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/00/220-regenwaldtiere-kolibri-nix6658.jpg?v=1-0",
            figcaption: "Kolibris – glänzende Luftakrobaten"
        },
        {
            img: "https://cdn.pixabay.com/photo/2019/05/20/18/01/armadillo-4217183_1280.jpg",
            figcaption: "Gürteltier – bei Gefahr macht es sich rund"
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/09/989-ameisenbaer-regenwald.jpg?v=2-12",
            figcaption: "Ameisenbär – immer die Nase vorn "
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/04/1424-8858799708_e26dd2a596_o.jpg?v=1-0",
            figcaption: "Löwenäffchen – Die Könige der Mata Atlântica"
        },
        {
            img: "https://www.abenteuer-regenwald.de/uploads/media/core-xl-x2/06/1266-Capivara%28Hydrochoerus_hydrochaeris%29.jpg?v=1-6",
            figcaption: "Wasserschweine – die „Herren der Gräser“"
        },
        {
            img: "https://cdn.pixabay.com/photo/2015/11/03/16/00/keel-billed-toucan-1021048_1280.jpg",
            figcaption: "Tukane – die Spaßvögel des Dschungels"
        },
    ]

    return (
        <main id={"gallery"} className={"border"}>
            <h1>Galerie</h1>
            <div className={"galleryView"}>
                {animals.map(animal => (
                    <figure>
                        <img src={animal.img} alt=""/>
                        <figcaption>{animal.figcaption}</figcaption>
                    </figure>
                ))}
            </div>
        </main>
    )
}

export default Gallery;