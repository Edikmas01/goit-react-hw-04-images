
import"./ImageGallery.css"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({ images, onClick }) => {
   return (
     <ul className="ImageGallery">
       {images.map(image => (
         <ImageGalleryItem
           image={image}
           key={image.id}
           src={image.webformatURL}
           alt={image.tags}
           onClick={() => onClick(image.largeImageURL)}
         />
       ))}
     </ul>
   );
};

