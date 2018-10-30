import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import ParallaxImage from './Components/ParallaxImage/ParallaxImage';

// importing logo picture for parallax component
import shoesPic from './Images/shoes.jpg';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<About />
				<Gallery />
				<ParallaxImage imageUrl={shoesPic} />
			</div>
		);
	}
}

export default App;
