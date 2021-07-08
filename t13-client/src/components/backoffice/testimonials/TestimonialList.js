import React, { useState, useEffect } from "react";
import "./testimonials.css";
import { getTestimonials } from "../../../services/testimonials/getTestimonials";
import { Testimonial } from "./Testimonial";

export const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const getDataTestimonials = async () => {
      const dataTestimonials = await getTestimonials();
      setTestimonials(dataTestimonials.testimonials);
    };
    getDataTestimonials();
  }, []);
  return (
    <div className="testimonials__box container">
      <h1 className="testimonials__title">Testimoniales</h1>
      {testimonials.map((testimonial) => (
        <Testimonial testimonial={testimonial} />
      ))}
    </div>
  );
};
