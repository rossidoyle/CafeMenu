const MenuItem = (props) => {

    return(
        <>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.type}</p>
                <p>Allergens: </p>
                {props.soy ? <span className="badge rounded-pill text-bg-secondary">Soy</span> : null }
                {props.egg ? <span className="badge rounded-pill text-bg-secondary">Egg</span> : null }
                {props.milk ? <span className="badge rounded-pill text-bg-secondary">Milk</span> : null }
                {props.fish ? <span className="badge rounded-pill text-bg-secondary">Fish</span> : null }
                {props.peanut ? <span className="badge rounded-pill text-bg-secondary">Peanut</span> : null }
                {props.shellfish ? <span className="badge rounded-pill text-bg-secondary">Shellfish</span> : null }
                {props.treeNut ? <span className="badge rounded-pill text-bg-secondary">Tree Nut</span> : null }
                {props.gluten ? <span className="badge rounded-pill text-bg-secondary">Gluten</span> : null }
                {props.sesame ? <span className="badge rounded-pill text-bg-secondary">Sesame</span> : null }
            </div>
        </>
    );
}

export default MenuItem;
