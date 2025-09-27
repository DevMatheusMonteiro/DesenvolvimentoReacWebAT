import { Container } from "./styles";
import { PageContainer } from "../../components/PageContainer";
import { Select } from "../../components/Select";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../services/theMelDbService";

export default function SelectFood() {
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState();

  async function loadCategories() {
    const res = await fetchCategories();

    setCategories(res.categories);
  }

  useEffect(() => {
    loadCategories();
  }, []);
  return (
    <PageContainer>
      <Container className="wrapper">
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
