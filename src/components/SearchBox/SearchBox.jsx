
import css from "./SearchBox.module.css";

export default function searchBox({ value, onUpdate }) {
   const handleChange = (event) => {
      onUpdate(event.target.value);
      console.log(onUpdate)
   };
   // onChange ={handleChange}

   return (<div className ={css.searchBox}>
      <p className={css.searchTitle} > Find contacts by name</p >
      <input className={css.searchInput}  type="text" value={value} onChange={handleChange}/>
   </div>
)
}
 


