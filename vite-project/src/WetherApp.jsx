import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WetherApp() {

    const [wetherInfo, setWetherInfo] = useState({
        city: "pune",
        feelsLike: 29.6,
        temp: 25,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        Whether: "haze"
    });

    let updateInfo = (result) =>{
        setWetherInfo(result);
    }

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Welcome To ApnaWether App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={wetherInfo} />
        </>
    );
}