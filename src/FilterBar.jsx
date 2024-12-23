import AllergenSelect from "./AllergenSelect";
import TypeSelect from "./TypeSelect";
import SearchBar from "./SearchBar";

const FilterBar = (props) => {
    return(
        <>
            <SearchBar onSearchChanged={props.onSearchChanged}/>
            <TypeSelect onTypeChanged={props.onTypeChanged}/>
            <AllergenSelect onSoyChanged={props.onSoyChanged} onEggChanged={props.onEggChanged} onMilkChanged={props.onMilkChanged} onFishChanged={props.onFishChanged} onPeanutChanged={props.onPeanutChanged} onShellfishChanged={props.onShellfishChanged} onTreeNutChanged={props.onTreeNutChanged} onGlutenChanged={props.onGlutenChagned} onSesameChanged={props.onSesameChanged}/>
        </>
    );
}

export default FilterBar;
