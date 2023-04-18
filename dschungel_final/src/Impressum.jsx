import './Impressum.css';

function Impressum() {
    //<a href={'https://www.fedlex.admin.ch/eli/cc/54/757_781_799/de'}>AGB</a>
    return(
        <main className={"impressum"}>
            <div className="container">
                <h1>Kontakt</h1>
                <br/>
                <div className="section contact">
                    <p><strong>Liun Tappolet</strong><br/>
                        Hauffeld 11<br/>
                        8455 Rüdlingen<br/>
                        Schweiz CH</p>
                    <p>Telefon: <a href={"tel:0799633090"}>079 963 30 90</a><br/>
                        E-Mail: <a href={"mailto:liun.tappolet@lernende.bbw.ch"}>liun.tappolet@lernende.bbw.ch</a></p>
                </div>

            </div>
        </main>
    )
}

export default Impressum;