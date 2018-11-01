import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import ParallaxImage from './Components/ParallaxImage/ParallaxImage';
import Contact from './Components/Contact/Contact';

// importing logo picture for parallax component
import parallaxImg from './Images/parallaxImg.png';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<About />
				<Gallery />
				<ParallaxImage imageUrl={parallaxImg} />
				<Contact />
			</div>
		);
	}
}

export default App;
