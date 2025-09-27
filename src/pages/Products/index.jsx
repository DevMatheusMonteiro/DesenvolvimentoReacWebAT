import { useMemo, useState } from "react";
import { faker } from "@faker-js/faker";
import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export default function Products() {
  const [search, setSearch] = useState("");
  const products = useMemo(
    () =>
      Array.from({ length: 100 }, () => ({
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.productName(),
      })),
    [search]
  );

  const filteredProducts = products.filter((product) =>
    product.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
  );
  return (
    <PageContainer>
      <Container className="wrapper">
        <Link to="/" className="home-link">
          Home
        </Link>
        <h2 className="title">Países</h2>
        <Input
          id="search"
          label="Pesquise por produtos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </Container>
    </PageContainer>
  );
}
