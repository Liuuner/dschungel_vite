import './Visit.css';
import {useEffect, useState} from "react";

function Visit() {
    const [coords, setCoords] = useState({x: 47.5801981240548, y: 8.573140527144032});
    const destination = "Zürich, Zoo";

    const [currentLocation, setCurrentLocation] = useState("");
    const [connections, setConnections] = useState([]);
    const [won, setWon] = useState(false)

    function fetchPostiton() {
        navigator.geolocation.getCurrentPosition((position) => {

            console.log(position.coords.latitude, position.coords.longitude)

            if (position.coords != null) {
                setCoords({x: position.coords.latitude, y: position.coords.longitude});
                fetchLocationName()
            } else {
                setCoords({x: 47.5801981240548, y: 8.573140527144032})
            }

        })
    }

    function fetchConnections() {
        console.log(currentLocation)
        if (currentLocation.trim() !== "") {
            fetch(`http://transport.opendata.ch/v1/connections?from=${currentLocation}&to=${destination}&limit=6`)
                .then(data => data.json())
                .then(obj => setConnections(obj.connections))
                .then(() => console.log(connections));
        }
    }


    function fetchLocationName() {
        fetch(`http://transport.opendata.ch/v1/locations?x=${coords.x}&y=${coords.y}`)
            .then(response => response.json())
            .then(data => {
                setCurrentLocation(data.stations[0].name);
            })
    }

    function buttonHandler(gps) {
        if (gps) {
            fetchPostiton();
        } else {
            fetchConnections();
        }
    }

    useEffect(() => {
        console.log(connections);
    }, [connections])



    //Calculates the time in format "hh:mm"
    function calcTime(strDate) {
        const date = new Date(strDate);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }


    return (
        <main className={"visit"}>
            <h1>Anfahrt</h1>
            <p>Du kannst viele Tiere welche im Dschungel leben auch im Zürich Zoo entdecken. <br/> Hier sind die Verbindungen mit dem ÖV.</p>
            <div>
                <input onChange={(e) => setCurrentLocation(e.target.value)} type="text" value={currentLocation} placeholder={"Dein Abfahrtsort"}/>
                <button onClick={() => buttonHandler(true)}>Aktuelle Position</button>
            </div>
            <button onClick={() => buttonHandler(false)}>Suchen</button>
            {connections.length > 0 && <h2 className={"connectionTitle"}>Verbindungen von: {currentLocation}</h2>}

            <table>
                <tbody>
                {connections.map((connection) => (
                    <>
                        <tr className={"connection"}>
                            <td>Richtung {connection.sections[0].arrival.location.name} <br/> <strong>{calcTime(connection.from.departure)} ●———————————————◉ {calcTime(connection.to.arrival)}</strong></td>
                            <td>{connection.from.location.name} — {connection.to.location.name}</td>
                        </tr>
                    </>
                ))}

                </tbody>
            </table>

        </main>
    )

}


export default Visit;