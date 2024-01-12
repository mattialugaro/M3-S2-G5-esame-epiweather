import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { NavLink, useLocation, useParams, useSearchParams } from "react-router-dom";

const CardMeteo = () => {
  const [error, setError] = useState(false);

  const params = useParams();
  console.log("params", params);

  const loc = useLocation();
  console.log("loc", loc);

  const [country, setCountry] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams", searchParams);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  console.log(lat, lon);

  const fetchData = async () => {
    const apiKey = `a2bef9f3d286a65b0bb7fee3f3c70e4d`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    try {
      const resp = await fetch(url);
      if (resp.status >= 300) {
        setError(true);
        console.error(error, "Errore-S, da controllare...");
        return;
      }
      const country = await resp.json();
      console.log(country);

      setCountry({
        cond: country.weather[0].description,
        temp: country.main.temp - 273.15,
        tempMin: country.main.temp_min - 273.15,
        tempMax: country.main.temp_max - 273.15,
        humidity: country.main.humidity + "%",
        name: country.name,
        icon: country.weather[0].icon,
        state: country.sys.country,
      });
    } catch (err) {
      setError(true);
      console.error("Errore", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{height: "100vh"}} className="d-flex justify-content-center align-items-center">
      {country ? (
        <Card className="mt-5 border w-25" style={{alignItems: 'center'}}>
          <Card.Img variant="top" className="m-3" style={{width: '120px'}} src={`https://openweathermap.org/img/w/${country.icon}.png`} />
          <Card.Body>
            <Card.Title>{country.name} - {country.state}</Card.Title>
            <Card.Text className="m-0 fs-5"><strong>Weather Forecast:</strong> {country.cond}</Card.Text>
            <Card.Text className="m-0 fs-5"><strong>Temperature:</strong> {Math.floor(country.temp)}° C <i class="bi bi-thermometer-half"></i></Card.Text>
            <Card.Text className="m-0 fs-5"><strong>Min:</strong> {Math.floor(country.tempMin)}° C <i class="bi bi-thermometer"></i> - <strong>Max:</strong> {Math.floor(country.tempMax)}° C <i class="bi bi-thermometer-high"></i></Card.Text>
            <Card.Text className="m-0 fs-5 mb-3"><strong>Humidity:</strong> {country.humidity} <i class="bi bi-droplet"></i></Card.Text>
            <NavLink to="/" className="btn btn-primary fw-bold my-3">Torna Indietro</NavLink>
          </Card.Body>
        </Card>
      ) : <Spinner variant="primary" />
      }
    </div>
  );
};

export default CardMeteo;
