import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.techyshop.co.ke/wp-content/uploads/2022/07/hd2-scaled.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h4>HP laptop Envy 13</h4>
          <p>The HP Envy 13 should BE ABLE to do ANY job nicely; it's compact and highlycapable</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/ca/9c/af/ca9caffeed76fece63f9611ab28b096f.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h4>NEW BALANCE SHOES</h4>
          <p> Get the new New Balance shoes launched just this week NOW!! 50% OFF.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/QUV-PNwaQ0o/maxresdefault.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4>Eames Lounge</h4>
          <p>
          Innovative: all foam. Designed for delivery as a flat pack—open the box, and the chair grows out of a flat disc.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
