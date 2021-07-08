import axios from "axios";

export const getSocialNetworks = async (id) => {
  const url = `http://localhost:3000/organizations/${id}/public`;
  try {
    const data = await axios.get(url);
    const { facebook, instagram, linkedin } = await data.data;
    const networks = [
      {
        id: 1,
        logo: "https://assets.stickpng.com/images/584ac2d03ac3a570f94a666d.png",
        url: facebook,
      },
      {
        id: 2,
        logo: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png",
        url: instagram,
      },
      {
        id: 3,
        logo: "https://png.pngtree.com/png-clipart/20190614/original/pngtree-linkedin-social-media-icon-png-image_3609691.jpg",
        url: linkedin,
      },
    ];
    return networks;
  } catch (error) {
    console.log(error);
  }
};
