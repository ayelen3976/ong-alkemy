import React, { useState, useEffect } from "react";
import "./newsStyles.css";
import NewsForm from "./NewsForm";
import CKEditorContent from "./CKEditorContent";
import HomeFormInput from "../homeForm/HomeFormInput";
import editNews from "../../services/news/editNews";
import postNews from "../../services/news/postNews";
import getNewsByID from "../../services/entries/getNewsByID";
import { useHistory, useParams } from "react-router-dom";

function News() {
  let history = useHistory();
  const { id } = useParams();
  const [newsData, setNewsData] = useState({});
  const [editView, setEditViews] = useState(true);

  useEffect(() => {
    if (id) {
      const getNewsData = async () => {
        const newsData = await getNewsByID(id);
        setNewsData(newsData);
        setEditViews(true);
      };
      getNewsData();
    } else {
      setEditViews(false);
    }
  }, []);

  return (
    <div className='news'>
      <div className='news__main'>
        <NewsForm
          newsData={newsData}
          setNewsData={setNewsData}
          editView={editView}
        />
        <CKEditorContent
          newsData={newsData}
          setNewsData={setNewsData}
          isPost={editView ? false : true}
        />
        {editView ? (
          <HomeFormInput
            className={"news__btn"}
            type={"submit"}
            value='Editar'
            onClick={() => editNews(id, newsData, history)}
          />
        ) : (
          <HomeFormInput
            className={"news__btn"}
            type={"submit"}
            value='Agregar'
            onClick={() => postNews(newsData, history)}
          />
        )}
      </div>
    </div>
  );
}
export default News;
