import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({ info }) {


    const RAIN_URL = "https://media.istockphoto.com/id/472784066/photo/monsoon-over-kolkata.webp?a=1&b=1&s=612x612&w=0&k=20&c=tBFS70k3IOnu9KTQpTvaX4YcYlAopW1McMzTh1IbQ-c=";

    const HOT_URL = "https://images.unsplash.com/photo-1549389055-008961ff0002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VtbWVyJTIwc2Vhc29ufGVufDB8fDB8fHww";


    const COLD_URL = "https://images.unsplash.com/photo-1516384315388-90f7b1d0302c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D"

    return (
        <div className="info-box">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80
                            ? RAIN_URL
                            : info.temp > 15
                                ? HOT_URL
                                : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{
                            info.humidity > 80
                                ? <ThunderstormIcon />
                                : info.temp > 15
                                    ? <SunnyIcon />
                                    : <AcUnitIcon />
                        }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature :- {info.temp}&deg;C</p>
                        <p>Humidity :- {info.humidity}</p>
                        <p>Max Temp :- {info.tempMin}</p>
                        <p>Min Temp :- {info.tempMin}</p>
                        <p>The Whether can be described as <i>{info.Whether}</i> feels Like :- {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );

}