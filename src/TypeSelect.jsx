const TypeSelect = (props) => {

    const onInputChange = (event) => {
        const inputValue = event.target.value;
        props.onTypeChanged(inputValue);
    };

    return(
        <>
            <p>Filter by Item Type</p>
            <select onChange={onInputChange} className="form-select" aria-label="Default select example">
                <option value="All">All</option>
                <option value="Plaza Signature Favorites">Plaza Signature Favorites</option>
                <option value="On the Lighter Side">On the Lighter Side</option>
                <option value="Eggs and Things">Eggs and Things</option>
                <option value="From the Griddle">From the Griddle</option>
                <option value="Taste of South">Taste of South</option>
                <option value="Sandwiches">Sandwiches</option>
                <option value="A La Carte">A La Carte</option>
            </select>
        </>
    )
}

export default TypeSelect;
