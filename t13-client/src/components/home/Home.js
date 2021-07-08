import React from "react";
import Card from "./Card";
import "./home.css";
import Title from "../title/Title";
import Slider from "../slider/Slider";

function Home() {
  let home = "home";

  return (
    <div className="home">
      <Slider />
      <Title location={home} />
      <div className="card__section">
        <Card
          imgSrc="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_portada__medium/public/categorias/educacion-infantil.jpg"
          title="Programas educativos"
          description="Destinados a incrementar la capacidad
          intelectual, moral y afectiva de las personas en cuanto a la cultura y las normas de convivencia en sociedad."
        />
        <Card
          imgSrc="https://www.guatemala.com/fotos/201804/lectura-885x500.jpg"
          title="Arte y cuentos"
          description="Taller literario y de manualidades realizados semanalmente."
        />
        <Card
          imgSrc="https://gmotivar.files.wordpress.com/2015/07/vacaciones-recreativas.jpg?w=288&h=196"
          title="Paseos recreativos"
          description="En busca de promover la participación y sentido de
          pertenencia de los niños, niñas y adolescentes al área educativa."
        />
      </div>
    </div>
  );
}

export default Home;
