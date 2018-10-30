import React from 'react';

//importing custom css file
import './ParallaxImage.css';

function ParallaxImage(props) {
        return (
                <div 
                        className='parallax-image-container'
                        style={{
                                'background': `url(${props.imageUrl})`,
                                'backgroundSize': 'cover',
                                'backgroundAttachment': 'fixed',
                                'margin': 'auto'
                        }}
                >
                <p className="parallax-text">(YOU)r hopes and dreams get closer with every step. Keep Moving.</p>
                </div>
        )
}

export default ParallaxImage;