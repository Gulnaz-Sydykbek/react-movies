import { useState } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css';

function SearchBar(props) {
  const [movieName, setMovieName] = useState('');

  const handleNameChange = e => {
    const target = e.currentTarget.value;

    setMovieName(target.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (movieName.trim() === '') {
      toast('Enter name of image, please!');
      return;
    }

    props.onFormSubmit(movieName.trim());

    setMovieName('');
  };

  const {
    Searchbar,
    SearchForm,
    SearchFormButton,
    SearchFormButtonLabel,
    SearchFormInput,
  } = s;

  return (
    <header className={Searchbar}>
      <form className={SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={SearchFormButton}>
          <AiOutlineSearch className={SearchFormButtonLabel} />
        </button>

        <input
          className={SearchFormInput}
          type="text"
          name="imageName"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          value={movieName}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
