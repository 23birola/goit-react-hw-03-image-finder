import css from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

const ImageGallery = ({ images }) =>
  <ul className={css.imageGallery}>
        {images.map(image => {
            return (
                <ImageGalleryItem key={image.id} image={image} />)}
        )}
  </ul>

export default ImageGallery;