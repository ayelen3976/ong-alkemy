import React, { useState, useEffect } from "react";
import Card from "../home/Card";
import getNews from "../../services/entries/getNews";
import {NavLink} from "react-router-dom";

const ListNews = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getDataEntries = async () => {
      const dataEntries = await getNews();
      setEntries(dataEntries);
    };
    getDataEntries();
  }, []);

  return (
    <div className="card__section">
      {entries?.map((entry) => (
        <NavLink to={`/novedades/${entry.id}`} key={entry.id}>
          <Card imgSrc={entry.image} title={entry.title} description={entry.createdAt} />
        </NavLink>
      ))}
    </div>
  );
};

export default ListNews;
