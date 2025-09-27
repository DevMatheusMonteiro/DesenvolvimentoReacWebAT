import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { Select } from "../../components/Select";
import { fetchCountries } from "../../services/restCountriesService";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SelectCountries() {
  const { country } = useParams();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectCountry, setSelectCountry] = useState();
  async function loadCountries() {
    setLoading(true);
    const res = await fetchCountries();
    const mapCountries = res.map((item, i) => ({
      label: item.name.common,
      value: i,
    }));
    setCountries(mapCountries);
    const selectedCountry = mapCountries.find((c) => c.label === country);

    setSelectCountry(selectedCountry);
    setLoading(false);
  }

  useEffect(() => {
    loadCountries();
  }, []);
  return (
    <PageContainer>
      <Container className="wrapper">
        <Link to="/" className="home-link">
          Home
        </Link>
        <h2 className="title">Países</h2>
        <Select
          value={selectCountry}
          isLoading={loading}
          disabled={loading}
          defaultValue={countries[0]}
          options={countries}
          onChange={(val) => setSelectCountry(val)}
          label="Países"
          id="country"
          placeholder="Selecione um país"
          isClearable
        />
      </Container>
    </PageContainer>
  );
}
