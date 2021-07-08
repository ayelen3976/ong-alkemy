import { fetchWithoutToken } from "../fetch/fetch";

export const getTestimonials = async () => {
  const resp = await fetchWithoutToken("testimonials");
  const body = await resp.json();
  return body;
};
