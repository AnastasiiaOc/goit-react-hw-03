
// ===========================my last=====================================
// import css from "./SearchBox.module.css";
import css from "./SearchBox.module.css";

// export default function SearchBox({ value, onUpdate }) {
//    const handleChange = (event) => {
//       onUpdate(event.target.value);
//       console.log(onUpdate);
//    };

//    return (
//       <div className={css.searchBox}>
//          <p className={css.searchTitle}>Find contacts by name</p>
//          <input className={css.searchInput} type="text" value={value} onChange={handleChange} />
//       </div>
//    );
// }

// ======================================================================

// ================improved===========================================

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