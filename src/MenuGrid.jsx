import MenuItem from "./MenuItem";

const MenuGrid = (props) => {

    return(
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {props.items.map((item, key) => (
                    <MenuItem key={key} name={item.name} type={item.type} soy={item.soy} egg={item.egg} milk={item.milk} fish={item.fish} peanut={item.peanut} shellfish={item.shellfish} treeNut={item.treeNut} gluten={item.gluten} sesame={item.sesame}/>
                ))}
            </div>
        </>
    );
}

export default MenuGrid;