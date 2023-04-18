import './App.css';
import './Responsive.css';
import Memory from './Memory.jsx';
import Home from "./Home.jsx";
import Tiere from "./Tiere.jsx";
import Gallery from "./Gallery.jsx";
import Impressum from "./Impressum.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import Visit from "./Visit.jsx";
import {useState} from "react";

function App() {
    const [active, setActive] = useState([true, false, false, false, false, false, false])


    function Map() {
        return(
            <main style={{width:"100%", display:"flex", alignItems:"center", flexDirection:"column"}}>
                <h1>Zürich Zoo</h1>
                <iframe
                    src='https://map.geo.admin.ch/embed.html?lang=en&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,ch.astra.wanderland-sperrungen_umleitungen&layers_opacity=1,1,1,0.8,0.8&layers_visibility=false,false,false,false,false&layers_timestamp=18641231,,,,&E=2685926.10&N=1249120.20&zoom=10'
                    width='800' height='600' style={{border: "3px solid #559e4d", height:"60vh", width:"80%"}} allow='geolocation'/>
            </main>
        )
    }
    function Header() {

        function activate(index) {
            const tempActive = [false, false, false, false, false, false, false];
            tempActive[index] = true;
            setActive(tempActive);
        }

        return (
            <header>
                <nav>
                    <NavLink onClick={() => activate(0)} id={active[0] === true && "active"} className={"navLink "}
                             to={'/home'}><strong>Dschungel</strong></NavLink>
                    <NavLink onClick={() => activate(1)} id={active[1] === true && "active"} className={"navLink "}
                             to={'/animals'}>Tiere</NavLink>
                    <NavLink onClick={() => activate(2)} id={active[2] === true && "active"} className={"navLink "}
                             to={'/gallery'}>Galerie</NavLink>
                    <NavLink onClick={() => activate(3)} id={active[3] === true && "active"} className={"navLink "}
                             to={'/memory'}>Memory</NavLink>
                    <NavLink onClick={() => activate(4)} id={active[4] === true && "active"} className={"navLink "}
                             to={'/visit'}>Besuch</NavLink>
                    <NavLink onClick={() => activate(5)} id={active[5] === true && "active"} className={"navLink "}
                             to={'/map'}>Karte</NavLink>
                    <NavLink onClick={() => activate(6)} id={active[6] === true && "active"} className={"navLink "}
                             to={'/impressum'}>Impressum</NavLink>
                </nav>
            </header>
        )
    }


    function NoMatch() {
        return (
            <main>
                <h1>No Match</h1>
            </main>
        )
    }

    function Display() {
        return (
            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
                <Route exact path={'/home'} element={<Home/>}/>
                <Route exact path={'/animals'} element={<Tiere/>}/>
                <Route exact path={'/memory'} element={<Memory/>}/>
                <Route exact path={'/impressum'} element={<Impressum/>}/>
                <Route exact path={'/gallery'} element={<Gallery/>}/>
                <Route exact path={'/visit'} element={<Visit/>}/>
                <Route exact path={'/map'} element={<Map/>}/>
                <Route exact path={'*'} element={<NoMatch/>}/>
            </Routes>
        )
    }


    return (
        <>
            <Header/>
            <Display/>
        </>
    );
}

export default App;
