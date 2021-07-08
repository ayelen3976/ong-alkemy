import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Wrapper from "../wrapper/Wrapper";
import CategoriesForm from "./CategoriesForm";
import HomeFormInput from "../homeForm/HomeFormInput";

import getCategory from "../../services/categories/getCategory";
import postCategory from "../../services/categories/postCategory";
import updateCategory from "../../services/categories/updateCategory";

const CategoriesContainer = () => {
  const [categoryData, setCategoryData] = useState({});
  const [editView, setEditView] = useState(true);

  let history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const getDataCategory = async () => {
        const category = await getCategory(id);
        if (category) {
          setCategoryData(category);
          setEditView(true);
        }
      };
      getDataCategory();
    } else {
      setEditView(false);
    }
  }, [id]);

  return (
    <Wrapper>
      <div className='news'>
        <div className='news__main'>
          <CategoriesForm
            categoryData={categoryData}
            setCategoryData={setCategoryData}
            editView={editView}
          />
          {editView ? (
            <HomeFormInput
              className={"news__btn"}
              type={"submit"}
              value='Editar'
              onClick={() => updateCategory(categoryData, history)}
            />
          ) : (
            <HomeFormInput
              className={"news__btn"}
              type={"submit"}
              value='Agregar'
              onClick={() => postCategory(categoryData)}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default CategoriesContainer;
