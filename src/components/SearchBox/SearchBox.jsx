 import css from "./SearchBox.module.css";
export default function searchBox({value, onSearch}){
    return (
        <div className={css.searchBox}>
            <p className={css.searchTitle}>Find contacts by name</p>
            <input className={css.searchInput} type ="text" value={value} onChange={(e) =>onSearch(e.target.value)}></input>
        </div>
    )
}

