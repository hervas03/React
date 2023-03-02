import Carousel from "react-bootstrap/Carousel";
import IMG1 from "../img/carousel1.png";
import IMG2 from "../img/carousel2.png";
import IMG3 from "../img/carousel3.png";

function PaginaPrincipal() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG2}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG3}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default PaginaPrincipal;
