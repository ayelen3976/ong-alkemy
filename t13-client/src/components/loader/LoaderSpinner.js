import React from "react";
import Loader from "react-loader-spinner";
import "./loader.css";

/* Reusable loader that uses  react-loader-spinner*/

const LoaderSpinner = (props) => {
  return (
    <div className='container__loader'>
      <Loader type='Rings' color='#00BFFF' height={100} width={100} />
    </div>
  );
};

export default LoaderSpinner;
