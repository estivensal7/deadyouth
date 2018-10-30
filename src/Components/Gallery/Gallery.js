import React, { Component } from 'react';

//importing reactstrap components
import { Jumbotron, Container, Row, Col } from 'reactstrap';

//importing custom css file
import './Gallery.css';

// importing reactstrap components
import { Card, CardImg } from 'reactstrap';

// importing pictures 
import galleryOne from '../../Images/gallery1.jpg';
import galleryTwo from '../../Images/gallery2.jpg';
import galleryThree from '../../Images/gallery3.jpg';
import galleryFour from '../../Images/gallery4.jpg';

class Gallery extends Component {
	render() {
		return (
			<div className="gallery">
                                <Jumbotron fluid className="gallery-jumbo">
                                        <Container fluid>
                                                <Row>
                                                        <Col md={3}>
                                                                <Card>
                                                                        <CardImg top width="100%" src={galleryOne} alt="gallery-picture" id="grayscale"/>
                                                                </Card>
                                                        </Col>
                                                        <Col md={3}>
                                                                <Card>
                                                                        <CardImg top width="100%" src={galleryTwo} alt="gallery-picture" id="grayscale"/>
                                                                </Card>
                                                        </Col>
                                                        <Col md={3}>
                                                                <Card>
                                                                        <CardImg top width="100%" src={galleryThree} alt="gallery-picture" id="grayscale"/>
                                                                </Card>
                                                        </Col>
                                                        <Col md={3}>
                                                                <Card>
                                                                        <CardImg top width="100%" src={galleryFour} alt="gallery-picture" id="grayscale"/>
                                                                </Card>
                                                        </Col>
                                                </Row>        
                                        </Container>
                                </Jumbotron>
			</div>
		);
	}
}

export default Gallery;