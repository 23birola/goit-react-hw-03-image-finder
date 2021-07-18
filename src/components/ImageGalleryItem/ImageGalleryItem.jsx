import css from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ image }) =>
<li className={css.imageGalleryItem}>
        <img src={image.webformatURL} alt={image.tags} className={css.imageGalleryItemImage} />
</li>

export default ImageGalleryItem;