import { Col, Container, Row } from "react-bootstrap";
import "./style.scss";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";

const Header = () => {
  return (
    <section id="header">
      <div className="header-top py-3">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={4} md={6} lg={6}>
              <MdOutlineLocalPhone className="text-white fs-2" />
              <a
                className="text-decoration-none text-white"
                href="tel:+7483832314"
              >
                +748 383 23 14
              </a>
            </Col>
            <Col xs={8} md={6} lg={6} className="d-flex justify-content-end">
              <ul className="list-unstyled d-flex">
                <li>
                  <a className="text-decoration-none text-white" href="#">
                    Terms of Use
                  </a>
                </li>
                <li className="text-white">|</li>
                <li>
                  <a className="text-decoration-none text-white" href="#">
                    FAQ
                  </a>
                </li>
                <li className="text-white">|</li>
                <li>
                  <a className="text-decoration-none text-white" href="#">
                    Customer service
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-middle py-3">
        <Container>
          <Row className="d-flex justify-content-between">
            <Col xs={5} md={3} lg={3}>
              <div className="header-logo">
                <h2 className="fw-bold">ChicCharry</h2>
              </div>
            </Col>
            <Col md={4} lg={4} className="d-none d-lg-block">
              <div className="header-search">
                <input
                  className="form-control"
                  placeholder="Search all product"
                />
              </div>
            </Col>
            <Col
              xs={7}
              md={5}
              lg={4}
              className="d-flex align-items-center justify-content-end"
            >
              <ul className="list-unstyled d-flex m-0">
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    <CiUser className="fs-2" />
                    Sign up
                  </a>
                </li>{" "}
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    <CiHeart className="fs-2" />
                    Wishlist
                  </a>
                </li>{" "}
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    <CiShoppingBasket className="fs-2" />
                    Basket
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-bottom">
        <nav>
          <Row>
            <Col className="d-flex justify-content-center">
              <ul className="list-unstyled d-flex column-gap-3">
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Evening bags
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Shoulder bag
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Backpack
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Handbag
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Postman bag
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-dark" href="#">
                    Belt bags
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </nav>
      </div>
    </section>
  );
};

export default Header;
