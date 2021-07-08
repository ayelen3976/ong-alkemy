import React, { useState, useEffect } from "react";
import getNewsByID from "../../services/entries/getNewsByID";
import { Button, Col, Row, Container, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './style.css'

const NewsDetails = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const id = props.match.params.id
    let getDetails = async () => {
      const details = await getNewsByID(id);
      setData(details);
    };
    getDetails();
  }, [props.match.params.id]);

  return (
    <Container fluid="sm" className={"mt-3 news-detail-container"}>
      <Col>
      <Row className="news-detail__row">
        <Col sm={2}>
          <NavLink to="/novedades">
            <Button className="news-detail__button">Atrás</Button>
          </NavLink>
        </Col>
        <Col sm={10} className="news-details__col">
          <h1 className="news-detail__title">{data && data.title}</h1>
          <p>creado el {data && data.createdAt}</p>
        </Col>
        <hr style={{ width: '100%' }} />
      </Row>
        <Row className="news-detail__row">
          <Image
            className="news-detail__image"
            fluid 
            src={data && data.image}
            rounded
          />
        </Row>
        <Row className="news-detail__row">
          <p className={"text-justify"}>{data && data.content}</p>
        </Row>
      </Col>
    </Container>
  );
};

export default NewsDetails;
