import React, { Component } from 'react';
import './Header.css';

// importing dependency
import ReactCompareImage from 'react-compare-image';

// importing pictures
import headerOne from '../../Images/header1.jpg';
import headerTwo from '../../Images/header2.jpg';
 

class Header extends Component {
        render() {
                return (
                        <div className="Header">
                                <p>
                                        <span data-text="D">D</span>
                                        <span data-text="E">E</span>
                                        <span data-text="A">A</span>
                                        <span data-text="D">D</span>
                                        <span data-text="(">(</span>
                                        <span data-text="Y">Y</span>
                                        <span data-text="O">O</span>
                                        <span data-text="U">U</span>
                                        <span data-text=")">)</span>
                                        <span data-text="T">T</span>
                                        <span data-text="H">H</span>
                                </p>
                                <ReactCompareImage leftImage={headerOne} rightImage={headerTwo} />
			</div>
		);
	}
}

export default Header;