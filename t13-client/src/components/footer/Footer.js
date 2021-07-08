import React from "react";
import { Logo } from "../logo/Logo";
import { SocialNetworks } from "../socialNetwork/SocialNetworks";
import "./footer.css";
import { LinkWebs } from "./LinkWebs";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
const Footer = () => {
  const footer = "footer";
  return (
    <MDBFooter
      color="#d85752"
      style={{ backgroundColor: "#d85752" }}
      className="font-small pt-4 mt-8"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="row-footer">
          <MDBCol className="col-logo">
            <Logo location={footer} />
          </MDBCol>
          <MDBCol className="col-social">
            <LinkWebs location={footer} />
          </MDBCol>
          <MDBCol className="col-icons">
            <SocialNetworks />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#">SomosMas.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
