import React from "react";
import { MenuItems } from "../navbar/MenuItems";
import { LinkWeb } from "./LinkWeb";

export const LinkWebs = ({ location }) => {
  return MenuItems.map((item, index) => (
    <LinkWeb key={index} item={item} index={index} location={location} />
  ));
};
