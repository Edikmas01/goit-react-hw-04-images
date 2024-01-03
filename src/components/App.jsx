import {  useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { Loader } from "./Loader/Loader";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";


const API_KEY = '39656186-c095d2ee573b1c30fdf5cbeaa';


export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('')
  
  const handleSearchSubmit = async newQuery => {
    const querySegment = newQuery ? `q=${newQuery}&` : '';

    if (newQuery !== query) {
      setPage(1);
    }

    setQuery(newQuery);

    setIsLoading(true);

    const response = await fetch(`
        https://pixabay.com/api/?${querySegment}page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12
      `);

    const data = await response.json();
    setImages(data.hits);

    setIsLoading(false);
  };

  const handleLoadMore = async () => {
    // this.setState(prevState => ({ ...prevState, page: prevState.page + 1 }));
    setPage(prev => prev + 1);

    const querySegment = query ? `q=${query}&` : '';

    setIsLoading(true);

    const response = await fetch(`
        https://pixabay.com/api/?${querySegment}page=${
        page + 1
      }&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12
        `);

    const data = await response.json();

    console.log(data.hits);
    setImages(prev => [...prev, ...data.hits])
    // this.setState(prevState => ({
    //   images: [...prevState.images, ...data.hits],
    // }));
      setIsLoading(false);
    // this.setState({ isLoading: false });
  };

  const handleOpenModal = largeImageURL => {
    // this.setState({
    //   isModalOpen: true,
    //   largeImageURL: largeImageURL,
    // });
    setIsModalOpen(true);
    setLargeImageURL(largeImageURL);
  };

  const handleCloseModal = () => {
    // this.setState({
    //   isModalOpen: false,
    //   largeImageURL: '',
    // });
    setIsModalOpen(false);
    setLargeImageURL('');
  };
return (
  <>
    <Searchbar onSubmit={handleSearchSubmit} />

    {images.length > 0 && (
      <>
        <ImageGallery images={images} onClick={handleOpenModal} />
        <Button onClick={handleLoadMore} />
      </>
    )}
    {isLoading && <Loader />}
    <Modal
      isOpen={isModalOpen}
      imageURL={largeImageURL}
      onClose={handleCloseModal}
    />
  </>
);
}