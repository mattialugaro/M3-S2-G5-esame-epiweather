import { useState } from "react";
import { Alert, Button, Container, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {

    const apiKey = `a2bef9f3d286a65b0bb7fee3f3c70e4d`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`;

    try {
      const resp = await fetch(url);
      if (resp.status >= 300) {
        setError(true);
        console.error(error, "Errore, da controllare...");
        return;
      }

      const country = await resp.json();
      console.log(country);
      const lat = country.coord.lat
      const lon = country.coord.lon
      
      navigate(`/card?lat=${lat}&lon=${lon}`);
      
    } catch (err) {
      setError(true);
      console.error("Errore", err);
    }
  };

  const onSearchClick = () => {
    fetchData();
  };

  return (
    <div style={{height: "100vh"}}>
      <Container>
        <Alert variant="primary" className="my-5 mx-auto w-50 display-5 fst-italic">
          Meteo
        </Alert>
        <InputGroup className="mb-3 w-25 mx-auto">
            <input className="border-1 rounded text-center" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cerca una città"></input>
          <Button onClick={() => onSearchClick()} className="btn btn-primary p-2">
            <i className="bi bi-search icons text-white me-3"></i>
          </Button>
        </InputGroup>
      </Container>
    </div>
  );
};

export default Welcome;
