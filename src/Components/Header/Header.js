import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div className="Header">
                                <p aria-label="CodePen">
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
			</div>
		);
	}
}

export default Header;