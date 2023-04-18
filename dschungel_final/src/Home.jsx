
function Home() {
    const news = [
        {
            title: "Asiens letzte Menschenaffen",
            paragraphs: ["Orang-Utans sind die größten heute noch lebenden Baumsäugetiere sowie die einzigen überlebenden Großen Menschenaffen Asiens. Es sind überwiegend Einzelgänger, die die meiste Zeit des Tages auf Bäumen verbringen. Sie schlafen sogar in den Bäumen und bauen sich hierfür jeden Abend ein neues Nest. Ebenso wie andere Menschenaffen benutzen Orang-Utans Werkzeuge: Äste nutzen sie zur Verteidigung oder als Speer zum Fische fangen, Blätter nutzen sie wie eine Art Handschuh beim Öffnen stacheliger Früchte."],
            img: "assets/news/orang-utan.jpg",
            link: "/tiere/orang-utan"
        },
        {
            title: "Der Lebensraum der Lemuren schrumpft",
            paragraphs: ["Heute sind laut IUCN über 90 Prozent der Lemuren-Arten auf Madagaskar in ihrer Existenz gefährdet. Damit gehören die Lemuren zu der Gruppe der am meisten gefährdeten Tiere der Erde. Die kontinuierliche Zerstörung ihres Lebensraumes und die illegale Jagd auf sie haben zu dieser alarmierenden Situation geführt.", "Seit der Abkoppelung Madagaskars vom afrikanischen Kontinent vor etwa 160 Millionen Jahren konnten sich die Halbaffen dort isoliert entwickeln. Es entstand eine beeindruckende Vielfalt und heute leben über 100 Lemuren-Arten auf Madagaskar. Die kleinsten unter ihnen, die Zwerg-Mausmakis, wiegen nur 30 Gramm. Die grössten, die Indris und Diademsifakas, können über 9 Kilo schwer werden. "],
            img: "assets/news/Katta-Lemuren-Gruppe.jpg",
            link: "/tiere/lemuren"
        },
        {
            title: "Gesellige Riesen im Fadenkreuz der Wilderer",
            paragraphs: ["Elefanten sind die grössten Landsäugetiere der Erde und können bis zu sechs Tonnen schwer werden. Die imposante Körpergrösse, ihr Rüssel, die grossen Ohren und ihre Stosszähne machen ihr charakteristisches Erscheinungsbild aus. Das Elfenbein, das «weisse Gold» ist jedoch in vielen Ländern Asiens heiss begehrt und hat dazu geführt, dass die grossen Dickhäuter eine ungewisse Zukunft haben.", "Die Familie der Elefanten umfasst zwei Gattungen: die Afrikanischen und die Asiatischen Elefanten, die sich vor Langem, zwischen 3 und 5 Millionen Jahren voneinander getrennt haben. Asiatische Elefanten sind kleiner als ihre afrikanischen Verwandten."],
            img: "assets/news/Elefantenherde-Serengeti.jpg",
            link: "/tiere/elefanten"
        },
        {
            title: " Anakonda - züngelnder Lauerjäger ",
            paragraphs: ["Kannst du dir eine Schlange vorstellen, die in etwa so lang ist wie ein Bus? Unvorstellbar, aber die grüne oder große Anakonda kann tatsächlich bis zu 9 Meter lang werden. Erfahre hier mehr über die riesige Würgeschlange aus dem Regenwald des Amazonas und lass dich auf einen der spektakulärsten Bewohner des Regenwaldes ein.", "Anakondas verfügen, da sie schlecht sehen und hören können, über andere faszinierende Sinnesorgane mit denen sie sich orientieren. Zunächst können sich Anakondas mit ihrer gespaltenen Zunge ein Bild von ihrer Umgebung machen: beim schlangentypischen Züngeln nehmen die Tiere Duftstoffe auf und führen sie zum Jacobson-Organ in ihrem Gaumendach.", "Wie viele Wirbeltiere besitzen auch Anakondas dieses spezielle Geruchsorgan. Dort können sie die Duftspuren analysieren und aufgrund der gespaltenen Zunge sogar verorten aus welcher Richtung der Geruch gekommen ist. Sie riechen tatsächlich räumlich. Außerdem können Anakondas Wärme orten und sehen infrarot, wodurch sie warmblütige Beutetiere aufspüren können. Mit ihrer sensiblen Haut spürt die Anakonda selbst feinste Vibrationen von potentiellen Beutetieren oder Angreifern."],
            img: "assets/news/gruene_anakonda.jpg",
            link: "/tiere/anakonda"
        }
    ]

    return (
        <main style={{display: "flex", justifyContent: "center"}}>
            <div className={"container"}>
                <h1>NEWS</h1>

                {news.map((Article) => (
                    <div className={"section article"}
                         style={{display: "flex", margin: "5vh 0 10vh 0"}}>
                        <div><h2>{Article.title}</h2>
                            {Article.paragraphs.map(paragraph => (
                                <p>{paragraph}</p>
                            ))}</div>
                        <a style={{marginLeft: "30px", marginTop: "2px", maxWidth: "30vw"}} href={Article.link}>
                            <img style={{maxWidth: "30vw"}}
                                 src={Article.img}
                                 alt={"Bild " + Article.img}/>
                        </a>
                    </div>
                ))}

            </div>
        </main>
    )
}

export default Home;