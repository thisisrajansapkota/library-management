import React from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import AdminLayout from "../../components/layouts/AdminLayout";
import { Button, Card, Carousel } from "react-bootstrap";
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";

function Homepage() {
  return (
    <>
      <AdminLayout title="Dashboard">
        <Carousel>
          <Carousel.Item>
            <img
              className=" m-auto d-flex justify-content-center"
              src={image1}
              width="600px"
              height="600px"
            ></img>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" m-auto d-flex justify-content-center"
              src={image2}
              width="600px"
              height="600px"
            ></img>

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" m-auto d-flex justify-content-center"
              src={image3}
              width="600px"
              height="600px"
            ></img>

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="bookList">
          <hr></hr>
          <h1 className="text-center">Book List</h1>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

        </div>
      </AdminLayout>
      ;
    </>
  ); 
}

export default Homepage;
