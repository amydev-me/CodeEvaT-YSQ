import Card from "./Card";
import { useState } from "react";
import Image from "./Image";
import "../assets/css/Images.css";

const Images = (props) => { 
    const [cartIsShown, setCartIsShown] = useState(false);
    const [src, setSrc] = useState(null);

    const showCartHandler = (image) => { 
        setSrc(image.src);
        setCartIsShown(true);
    }
    
    const hideCartHandler = () => {
        setCartIsShown(false);
    }  
    const renderedImages =  props.images.map(image => {
         
        return (
            <Image showCartHandler={showCartHandler} image={image} key={image.id}/>
        )
    });

    return (
        <div class="image-grid"> 
            {cartIsShown && <Card src={src} onClose={hideCartHandler}/>}

            {renderedImages} 
        </div>
    );
}

export default Images;