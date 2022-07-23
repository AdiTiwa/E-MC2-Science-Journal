import {Carousel} from 'flowbite-react';
import React, { Component } from 'react';

class ImageCarousel extends Component{
    render(){        
        var sources = this.props.sources;

        var carouselImages = sources.map(({src, alt, caption}) => {
            return (
                <div>
                    <img src={src} alt={alt} />
                    <h1 class="absolute text-5xl text-white top-1/2 left-36">{caption}</h1>
                </div>
            );
        });

        return (
            <div className="mx-auto h-96 relative">
                <Carousel>
                    {carouselImages}
                </Carousel>
            </div>
    
        );
    }
}

export default ImageCarousel;