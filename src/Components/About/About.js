import React, { Component } from 'react';

//importing reactstrap components
import { Jumbotron, Container } from 'reactstrap';

//importing custom css file
import './About.css';

class About extends Component {
	render() {
		return (
			<div className="About">
                                <Jumbotron fluid className="about-us-jumbo">
                                        <Container fluid>
                                                <h1 className="display-3 about-title">About Us</h1>
                                                <p className="lead" id="aboutInfo">
                                                        DE∀DYOUTH is a streetwear clothing brand inspired to lead people to follow their dreams no matter 
                                                        what.(our main concept) - the concept that all human beings were born with hopes and dreams until society told 
                                                        us it was unrealistic and to grow up. The brand was founded by Ariel salazar, Jose Peraza, and Xavier Marricco-Holmes 
                                                        in June of 2018 although (it was in the works since 2016 but fully executed in 2018)
                                                </p>
                                        </Container>
                                </Jumbotron>
			</div>
		);
	}
}

export default About;