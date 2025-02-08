import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "../../components/navbar/Navbar";
import "../Aboutus/About.css";

const About = () => {
  return (
    <div className="aboutus">
      <Navbar />
      
      {/* About Section */}
      <section className="about__page-section mt-5">
        <Container>
          <Row>
            <Col lg="12" md="12" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">About Easy Buy</h2>

                <p className="section__description">
                  Easy Buy is your go-to e-commerce platform for all your clothing needs. Whether you're looking for trendy outfits, classic styles, or seasonal collections, Easy Buy offers a wide range of clothing to suit every taste and occasion. We believe that shopping for clothes should be convenient, affordable, and enjoyable. 
                </p>
                
                <p className="section__description">
                  At Easy Buy, we make it easy for you to shop for the latest fashion trends and essential wardrobe pieces from the comfort of your home. Our platform is designed to give you a seamless shopping experience, with a user-friendly interface that lets you browse, select, and purchase your favorite clothing in just a few clicks.
                </p>

                <p className="section__description">
                  Whether you're shopping for casual wear, formal attire, or special occasion outfits, Easy Buy has something for everyone. Our curated collections ensure that you stay up-to-date with the latest fashion trends, while our commitment to quality guarantees that you'll always receive premium clothing that fits perfectly.
                </p>

                <p className="section__description">
                  With Easy Buy, shopping for clothes is as easy as it gets. Explore our wide selection of clothing, enjoy easy returns, and experience fast and reliable delivery right to your doorstep. Join the Easy Buy family today and elevate your wardrobe with ease!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Us Section in Navy Blue Box */}
      <section className="contact-section mt-5">
        <Container>
          <div className="contact-box">
            <h5 className="contact-title">Contact Us</h5>
            <Row>
              <Col sm="12" md="6">
                <div className="contact-info">
                  <h6>Email:</h6>
                  <p className="contact-email">support@easybuy.com</p>
                </div>
              </Col>
              <Col sm="12" md="6">
                <div className="contact-info">
                  <h6>Phone:</h6>
                  <p className="contact-phone">+123-456-7890</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
