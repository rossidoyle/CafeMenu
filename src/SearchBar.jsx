const SearchBar = (props) => {
    const onInputChange = (event) => {
        const inputValue = event.target.value;
        props.onSearchChanged(inputValue);
    };

    return(
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">🔍</span>
                <input onChange={onInputChange} type="text" className="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </>
    )
}

export default SearchBar;
