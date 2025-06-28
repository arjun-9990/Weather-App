import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_KEY = "330513707ba58c1218150ac80359c7d8";

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

    let handleChange = (event) => {
        setCity(event.target.value)
    }

    let getWetherInfo = async () => {
        try {
            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonData = await responce.json();
            console.log(jsonData);

            let result = {
                city: city,
                temp: jsonData.main.temp,
                tempMin: jsonData.main.temp_min,
                tempMax: jsonData.main.temp_max,
                humidity: jsonData.main.humidity,
                feelsLike: jsonData.main.feels_like,
                Whether: jsonData.weather[0].description
            }
            return result;

        } catch (error) {
            throw error;
        }
    }

    let handleSubmit = async (ent) => {
        try {
            ent.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWetherInfo();
            console.log(newInfo);
            updateInfo(newInfo);
        } catch (error) {
            setError(true);
        }
    }


    return (
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Search City" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" endIcon={<SendIcon />} type='submit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place Exists!</p>}
                {/* {setError(false)} */}
            </form>
        </div>
    );
}