import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './layout.css'

import App from './App.jsx';

// Declare the menu items to filter
const menuItems = [
    {
        name: "Simple Avocado Toast",
        soy: false,
        egg: false,
        milk: false,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "Plaza Signature Favorites"
    },
    {
        name: "Plaza Scramble",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: false,
        sesame: false,
        type: "Plaza Signature Favorites"
    },
    {
        name: "Classic Breakfast",
        soy: false,
        egg: true,
        milk: false,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: false,
        sesame: false,
        type: "Plaza Signature Favorites"
    },
    {
        name: "Plaza Pleaser",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "Plaza Signature Favorites"
    },
    {
        name: "Plaza Breakfast Burrito",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        type: "Plaza Signature Favorites"
    },
    {
        name: "1007 Breakfast Sandwich",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: true,
        type: "Plaza Signature Favorites"
    },
    {
        name: "Berry & Granola Yogurt Parfait",
        soy: false,
        egg: false,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: false,
        sesame: false,
        type: "On the Lighter Side"
    },
    {
        name: "Blueberry Steel Cut Oats",
        soy: false,
        egg: false,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: true,
        gluten: true,
        sesame: false,
        type: "On the Lighter Side"
    },
    {
        name: "Homemade Pastry",
        soy: false,
        egg: false,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "On the Lighter Side"
    },
    {
        name: "Mexican Scramble",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: false,
        sesame: false,
        type: "Eggs and Things"
    },
    {
        name: "Greek Chicken Egg White Scramble",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: false,
        sesame: false,
        type: "Eggs and Things"
    },
    {
        name: "Plaza Benedict",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "Eggs and Things"
    },
    {
        name: "Veggie Benedict",
        soy: false,
        egg: true,
        milk: false,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "Eggs and Things"
    },
    {
        name: "Classic Benedict",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "Eggs and Things"
    },
    {
        name: "Ruben Benedict",
        soy: false,
        egg: true,
        milk: false,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "Eggs and Things"
    },
    {
        name: "Corned Beef Hash",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "Eggs and Things"
    },
    {
        name: "Build your own Omelette",
        soy: false,
        egg: true,
        milk: false,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: false,
        sesame: false,
        type: "Eggs and Things"
    },
    {
        name: "Buttermilk Pancakes",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "From the Griddle"
    },
    {
        name: "Lemon Poppyseed Pancakes",
        soy: true,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: true,
        gluten: true,
        sesame: false,
        type: "From the Griddle"
    },
    {
        name: "Challah Bread French Toast",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "From the Griddle"
    },
    {
        name: "Stuffed Hash Browns",
        soy: false,
        egg: false,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "Taste of South"
    },
    {
        name: "Chicken and Waffles",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "Taste of South"
    },
    {
        name: "Southern Style Shrimp and Grits",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: true,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "Taste of South"
    },
    {
        name: "Biscuits and Gravy",
        soy: false,
        egg: true,
        milk: true,
        fish: false,
        peanut: false,
        shellfish: false,
        treeNut: false,
        gluten: true,
        sesame: false,
        type: "Taste of South"
    }
];

/**
 * Initialize the app and render the application
 */
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App menuItems={menuItems} />
    </React.StrictMode>
);
