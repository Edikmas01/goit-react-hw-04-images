import './ImageGalleryItem.css';

export const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItemImage"
        onClick={onClick}
      />
    </li>
  );
};
