import "../assets/css/Image.css";
const Image = (props) => {
    const image = props.image;

    const handlImageClick = () => {
        props.showCartHandler(image);
    }

    return (
        <div class="image-grid-item"  onClick={ handlImageClick}>
            <img src={image.src} alt={image.title} class="inner-img"/>
            <p>{image.title}</p>
        </div>
    )
}

export default Image;