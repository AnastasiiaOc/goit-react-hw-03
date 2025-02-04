

import css from "./SearchBox.module.css";


const SearchBox = ({ filter, onChange }) => {
  return (
    <div className={css.searchBox}>
      <p className={css.searchTitle}>Find contacts by name</p>
      <input className={css.searchInput}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;