
// import css from "./SearchBox.module.css";

// export default function searchBox({ value, onUpdate }) {
//    const handleChange = (event) => {
//       onUpdate(event.target.value);
//       console.log(onUpdate)
//    };
//    // onChange ={handleChange}

//    return (<div className ={css.searchBox}>
//       <p className={css.searchTitle} > Find contacts by name</p >
//       <input className={css.searchInput}  type="text" value={value} onChange={handleChange}/>
//    </div>
// )
// }
 

// ===========================my last=====================================
// import css from "./SearchBox.module.css";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onUpdate }) {
   const handleChange = (event) => {
      onUpdate(event.target.value);
      console.log(onUpdate);
   };

   return (
      <div className={css.searchBox}>
         <p className={css.searchTitle}>Find contacts by name</p>
         <input className={css.searchInput} type="text" value={value} onChange={handleChange} />
      </div>
   );
}

// ======================================================================

// ================boys===========================================
// const SearchBox = ({ value, onChange }) => (
//    <div >
//      <label  htmlFor="filter">
//        Find contacts by name
//      </label>
//      <input
//        type="text"
//        value={value}
//        onChange={onChange}
//      />
//    </div>
//  );
 
//  export default SearchBox;
