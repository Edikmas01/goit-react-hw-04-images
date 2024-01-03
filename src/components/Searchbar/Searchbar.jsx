import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Searchbar.css';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className="Searchbar">
      <form
        className="SearchForm"
        onSubmit={e => {
          e.preventDefault();
          onSubmit(e.target.lastChild.value);
        }}
      >
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label"></span>
        </button>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
