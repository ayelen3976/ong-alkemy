import React from "react";
import { DummyPic } from "./DummyPic";
import "./myProfile.css";

const MyProfile = ({ id, firstName, lastName, email, password }) => {
  return (
    <div className="profile-card">
      <div className="card__container bd-container">
        <DummyPic />
        <div className="card__data">
          <h3 className="card__title">{`${firstName} ${lastName}`}</h3>
          <span className="card__email">{email}</span>
        </div>
        <button className="card__button">Editar perfil</button>
        <button className="card__button">Eliminar cuenta</button>
      </div>
    </div>
  );
};

export default MyProfile;
