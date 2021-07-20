import css from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ image, onClick }) =>
<li className={css.imageGalleryItem}>
        <img src={image.webformatURL} alt={image.tags} className={css.imageGalleryItemImage} onClick={onClick} />
</li>

export default ImageGalleryItem;