import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { Select } from "../../components/Select";
import { fetchCountries } from "../../services/restCountriesService";
import { useEffect, useState } from "react";

export default function SelectCountries() {
  const [countries, setCountries] = useState([]);
  const [selectCountry, setSelectCountry] = useState("");
  async function loadCountries() {
    const res = await fetchCountries();
    const mapCountries = res.map((item, i) => ({
      label: item.name.common,
      value: i,
    }));
    setCountries(mapCountries);
  }

  useEffect(() => {
    loadCountries();
  }, []);
  return (
    <PageContainer>
      <Container className="wrapper">
        <Select
          options={countries}
          label="Países"
          id="country"
          placeholder="Selecione um país"
          isClearable
        />
      </Container>
    </PageContainer>
  );
}
