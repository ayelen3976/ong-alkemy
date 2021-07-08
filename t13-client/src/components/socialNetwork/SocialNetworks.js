import React, { useState, useEffect } from "react";
import "./socialNetwork.css";
import { getSocialNetworks } from "../../services/socialNetwork/getSocialNetworks";

export const SocialNetworks = () => {
  const [socialData, setSocialData] = useState([]);

  useEffect(() => {
    const getNetworks = async () => {
      const dataSocialNetworks = await getSocialNetworks(1);
      setSocialData(dataSocialNetworks);
    };
    getNetworks();
  }, []);

  return (
    <div className="social__container">
      {socialData?.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={social.logo} className="social__img" alt={social.url} />
        </a>
      ))}
    </div>
  );
};
