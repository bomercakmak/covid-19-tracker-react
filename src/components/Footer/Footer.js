import React from "react";
import styles from './Footer.module.css'
import { MDBContainer,  MDBFooter } from "mdbreact";

const Footer = () => {
  return (
<div className={styles.container}>
    <MDBFooter color="blue" >
    <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/bomercakmak">Bahadir Omer Cakmak </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
};
export default Footer;
