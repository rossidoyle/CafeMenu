const AllergenSelect = (props) => {

    const onSoyInputChange = (event) => {
        const inputValue = event.target.checked;
        props.onSoyChanged(inputValue);
    };

    const onEggInputChange = (event) => {
        const inputValue = event.target.checked;
        props.onEggChanged(inputValue);
    };

    const onMilkInputChange = (event) => {
        const inputValue = event.target.checked;
        props.onMilkChanged(inputValue);
    };

    const onFishInputChange = (event) => {
        const inputValue = event.target.checked;
        props.onFishChanged(inputValue);
    };

    const onPeanutInputChange = (event) => {
        const inputValue = event.target.checked;
        props.onPeanutChanged(inputValue);
    };

    const onShellfishInputChange = (event) => {
        const inputValue = event.target.checked;
        props.onShellfishChanged(inputValue);
    };
    const onTreeNutInputChange = (event) => {
        const inputValue = event.target.checked;
        props.onTreeNutChanged(inputValue);
    };

    const onGlutenInputChange = (event) => {
        const inputValue = event.target.checked;
        props.onGlutenChanged(inputValue);
    };

    const onSesameInputChange = (event) => {
        const inputValue = event.target.checked;
        props.onSesameChanged(inputValue);
    };

    return(
        <>
            <div className="form-check form-switch">
                <input onChange={onSoyInputChange} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Soy Free</label>
            </div>
            <div className="form-check form-switch">
                <input onChange={onEggInputChange} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Egg Free</label>
            </div>
            <div className="form-check form-switch">
                <input onChange={onMilkInputChange} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Milk Free</label>
            </div>
            <div className="form-check form-switch">
                <input onChange={onFishInputChange} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Fish Free</label>
            </div>
            <div className="form-check form-switch">
                <input onChange={onPeanutInputChange} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Peanut Free</label>
            </div>
            <div className="form-check form-switch">
                <input onChange={onShellfishInputChange} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Shellfish Free</label>
            </div>
            <div className="form-check form-switch">
                <input onChange={onTreeNutInputChange} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Tree Nut Free</label>
            </div>
            <div className="form-check form-switch">
                <input onChange={onGlutenInputChange} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Gluten Free</label>
            </div>
            <div className="form-check form-switch">
                <input onChange={onSesameInputChange} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Sesame Free</label>
            </div>
        </>

    );
}

export default AllergenSelect;
