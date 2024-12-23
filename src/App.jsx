import { useState } from 'react';

// Import layout to use the holy grail layout
import './layout.css';
import MenuGrid from "./MenuGrid";
import Header from "./Header";
import Footer from "./Footer";
import FilterBar from "./FilterBar";

const App = (props) => {

    // Setup state and any other functions needed by the application

    const [searchString, setSearchString] = useState("");
    const [typeString, setTypeString] = useState("All");
    const [soyString, setSoyString] = useState(false);
    const [eggString, setEggString] = useState(false);
    const [milkString, setMilkString] = useState(false);
    const [fishString, setFishString] = useState(false);
    const [peanutString, setPeanutString] = useState(false);
    const [shellfishString, setShellfishString] = useState(false);
    const [treeNutString, setTreeNutString] = useState(false);
    const [glutenString, setGlutenString] = useState(false);
    const [sesameString, setSesameString] = useState(false);
    const onSearchChanged = (value) => {
        setSearchString(value);
    };

    const onTypeChanged = (value) =>{
        setTypeString(value);
    }

    const onSoyChanged = (value) => {
        setSoyString(value);
    }

    const onEggChanged = (value) => {
        setEggString(value);
    }

    const onMilkChanged = (value) => {
        setMilkString(value);
    }

    const onFishChanged = (value) => {
        setFishString(value);
    }

    const onPeanutChanged = (value) => {
        setPeanutString(value);
    }

    const onShellfishChanged = (value) => {
        setShellfishString(value);
    }
    const onTreeNutChanged = (value) => {
        setTreeNutString(value);
    }

    const onGlutenChanged = (value) => {
        setGlutenString(value);
    }

    const onSesameChanged = (value) => {
        setSesameString(value);
    }

    const filterWords = () => {
        let displayList = [];
        for (let i = 0; i < props.menuItems.length; i++) {
            if((props.menuItems[i].name.includes(searchString) || searchString === "")&&(props.menuItems[i].type === typeString || typeString === "All") && (soyString=== false || (soyString=== true && props.menuItems[i].soy === false)) && (eggString=== false || (eggString=== true && props.menuItems[i].egg === false)) && (milkString === false || (milkString === true && props.menuItems[i].milk === false)) && (fishString === false || (fishString === true && props.menuItems[i].fish === false)) && (peanutString === false || (peanutString === true && props.menuItems[i].peanut === false)) && (shellfishString === false || (shellfishString === true && props.menuItems[i].shellfish === false)) && (treeNutString === false || (treeNutString === true && props.menuItems[i].treeNut === false)) && (glutenString === false || (glutenString === true && props.menuItems[i].gluten === false)) && (sesameString === false || (sesameString === true && props.menuItems[i].sesame === false))){
                displayList.push(props.menuItems[i]);
            }
        }
        return displayList;
    }
    const filteredItems = filterWords();

    // Return the rendered App using the holy grail layout
    return (
        <div className="HolyGrail">

            <div className="HolyGrail-header"><Header/></div>
            <div className="HolyGrail-content">
                <MenuGrid items={filteredItems}/>
            </div>
            <div className="HolyGrail-nav"><FilterBar onSearchChanged={onSearchChanged} onTypeChanged={onTypeChanged} onSoyChanged={onSoyChanged} onEggChanged={onEggChanged} onMilkChanged={onMilkChanged} onFishChanged={onFishChanged} onPeanutChanged={onPeanutChanged} onShellfishChanged={onShellfishChanged} onTreeNutChanged={onTreeNutChanged} onGlutenChagned={onGlutenChanged} onSesameChanged={onSesameChanged}/></div>
            <div className="HolyGrail-footer"><Footer/></div>
        </div>
    );
};

export default App;
