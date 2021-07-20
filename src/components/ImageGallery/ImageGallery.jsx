import css from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

const ImageGallery = ({ images, onSelectImg }) =>
  <ul className={css.imageGallery}>
        {images.map(image => {
            return (
              <ImageGalleryItem key={image.id} image={image} onClick={()=> onSelectImg(image.largeImageURL, image.tags)}/>)}
        )}
  </ul>

export default ImageGallery;