import React, { useState, useEffect } from "react";
import "./testimonialStyles.css";
import HomeFormInput from "../homeForm/HomeFormInput";
import TestimonialsForm from "./TestimonialsForm";
import TestimonialsContent from "./TestimonialsContent";
import { useHistory, useParams } from "react-router-dom";
import getTestimonialsByID from "../../services/testimonials/getTestimonialsByID";
import postTestimonials from "../../services/testimonials/postTestimonials";
import editTestimonials from "../../services/testimonials/editTestimonials";

function Testimonials() {
  let history = useHistory();

  const { id } = useParams();
  const [testimonialsData, setTestimonialsData] = useState({});
  const [editView, setEditViews] = useState(true);

  useEffect(() => {
    if (id) {
      const getTestimonialsData = async () => {
        const testimonialsData = await getTestimonialsByID(id);
        setTestimonialsData(testimonialsData);
        setEditViews(true);
      };
      getTestimonialsData();
    } else {
      setEditViews(false);
    }
  }, []);

  return (
    <div className="testimonials">
      <div className="testimonials__main">
        <TestimonialsForm
          testimonialsData={testimonialsData}
          setTestimonialsData={setTestimonialsData}
          editView={editView}
        />
        <TestimonialsContent
          testimonialsData={testimonialsData}
          setTestimonialsData={setTestimonialsData}
          isPost={editView ? false : true}
        />
        {editView ? (
          <HomeFormInput
            className={"testimonials__btn"}
            type={"submit"}
            value="Editar"
            onClick={() => editTestimonials(id, testimonialsData, history)}
          />
        ) : (
          <HomeFormInput
            className={"testimonials__btn"}
            type={"submit"}
            value="Agregar"
            onClick={() => postTestimonials(testimonialsData, history)}
          />
        )}
      </div>
    </div>
  );
}
export default Testimonials;
