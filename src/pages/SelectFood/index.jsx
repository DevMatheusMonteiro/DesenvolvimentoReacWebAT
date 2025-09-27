import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { Select } from "../../components/Select";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../services/theMelDbService";
import { Link } from "react-router-dom";
import { notify } from "../../services/toastService";

export default function SelectFood() {
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState();

  async function loadCategories() {
    try {
      const res = await fetchCategories();
      setCategories(res.categories);
    } catch () {
      notify.error("Erro ao carregar categorias.");
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);
  return (
    <PageContainer>
      <Container className="wrapper">
        <Link to="/" className="home-link">
          Home
        </Link>
        <h2 className="title">Select Food</h2>
        <Select
          options={categories}
          getOptionLabel={(opt) => opt.strCategory}
          getOptionValue={(opt) => opt.idCategory}
          value={selectCategory}
          onChange={(val) => setSelectCategory(val)}
          label="Categorias de Pratos"
          id="country"
          placeholder="Selecione uma categoria"
          isClearable
        />

        {selectCategory && (
          <div className="card-category">
            <h3>{selectCategory.strCategory}</h3>
            <p>{selectCategory.strCategoryDescription}</p>
            <img
              src={selectCategory.strCategoryThumb}
              alt={selectCategory.strCategory}
            />
          </div>
        )}
      </Container>
    </PageContainer>
  );
}
