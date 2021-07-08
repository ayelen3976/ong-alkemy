import React, { useEffect } from "react";
import useHomeForm from "./UseHomeForm";
import HomeForm from "./HomeForm";
import "./homeEdit.css";

function HomeEdit() {
  const [slide, handleChange] = useHomeForm({
    welcomeText: "",
    title1: "",
    title2: "",
    title3: "",
    image1: "",
    image2: "",
    image3: "",
  });

  useEffect(() => {
    localStorage.setItem("Slide", JSON.stringify(slide));
  }, [slide]);

  return <HomeForm {...slide} handleChange={handleChange} />;
}

export default HomeEdit;
