import { useState } from 'react';
import s from './SearchBar.module.css';

function SearchBar(props) {
  const { form, input } = s;

  const [movieName, setMovieName] = useState('');

  const handleNameChange = e => {
    const target = e.currentTarget.value;

    setMovieName(target.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onFormSubmit(movieName.trim());

    setMovieName('');
  };

  console.log(props.id);

  return (
    <div className={s.formContainer}>
      <form className={form} onSubmit={handleSubmit}>
        <input
          className={input}
          type="text"
          name="imageName"
          autoComplete="off"
          autoFocus
          placeholder="Search movie..."
          value={movieName}
          onChange={handleNameChange}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SearchBar;
