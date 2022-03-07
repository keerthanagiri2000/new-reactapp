import { useState, useEffect, useRef } from "react";

export function Slideshow(){
    const images=[
        "https://png.pngtree.com/background/20210711/original/pngtree-summer-atmosphere-restaurant-supermarket-vegetable-psd-layered-promotion-background-picture-image_1098004.jpg",
        "https://w0.peakpx.com/wallpaper/929/367/HD-wallpaper-fruits-fruits-vegetables-fruit-vegetable.jpg",
        "https://hdwallpaperim.com/wp-content/uploads/2017/08/25/466345-food-vegetables-748x468.jpg",
    ]
    const delay = 3500;
    const [index, setIndex] = useState(0);
    const timeoutRef=useRef(null);

    useEffect(() => {
       timeoutRef.current = setTimeout(() => setIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1),
       delay
       );
       return () => {};
    }, [index]);
    return(
        <div className="slideshow">
            <div 
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {images.map((backgroundImg, index) => (
                    <div className="slide" key={index} >
                        <img src={backgroundImg} alt="bg-img" className="slider-image"/>
                    </div>
                ))}
            </div>
            <div className="slideshowDots">
                {images.map((_, id) => (
                   <div 
                   key={id} 
                   className={`slideshowDot${index === id ? " active" : ""}`} 
                   onClick={() => {
                    setIndex(id);
                  }}
                  ></div> 
                ))}
            </div>
        </div>
    );
}