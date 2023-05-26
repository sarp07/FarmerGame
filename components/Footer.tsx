import { Container, Flex, Heading, Link, Box } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Footer() {
  return (
    <Container
      backgroundColor={"#0f1318"}
      color={"#e7e8e8"}
      maxW={"full"}
      py={4}
    >
      <div className="gamfi-footer-section">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="footer-area">
          <div className="container">
            <div className="footer-listing text-center mb-100 md-mb-70 xs-mb-50">
              <ul className="footer-icon-list">
                <li>
                  <a href="#">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-medium"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-discord"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-logo text-center mb-45" style={{display: "flex", justifyContent: "center"}}>
              <img src="/logo.png" alt="Footer-logo" style={{maxWidth: "200px"}} />
            </div>
            <div className="copyright-area text-center mb-0">
              <div className="dsc mb-37 md-mb-25">
                Copyright © 2022. All Rights Reserved by
                <a target="_blank" className="Sci-Fi" href="#">
                  Sci-Fi
                </a>
              </div>
            </div>
            <div className="scrollup text-center">
              <a href="#navbar">
                <i className="icon-arrow_up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
