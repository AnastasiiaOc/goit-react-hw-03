
// import css from "./SearchBox.module.css";


// const SearchBox = ({ filter, onChange }) => {
//   return (
//     <div className={css.searchBox}>
//       <p className={css.searchTitle}>Find contacts by name</p>
//       <input className={css.searchInput}
//         type="text"
//         value={filter}
//         onChange={onChange}
//       />
//     </div>
//   );
// };

// export default SearchBox;

export default function searchBox({value, onSearch}){
    return (
        <div>
            <p>Find contacts by name</p>
            <input type ="text" value={value} onChange={(e) =>onSearch(e.target.value)}></input>
        </div>
    )
}