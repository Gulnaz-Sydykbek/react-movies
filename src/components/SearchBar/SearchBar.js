import s from './SearchBar.module.css';

function SearchBar() {
  const { form, input } = s;

  return (
    <form className={form}>
      <input
        className={input}
        type="text"
        placeholder="Search movie..."
        name="query"
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default SearchBar;
