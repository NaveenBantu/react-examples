import React, { useState } from 'react'

const SearchBar = () => {
    // const [fruits, setFruits] = useState([]);
    const fruits = ['apple', 'banana', 'orange','pineapple','watermelon', 'pear'];
    const [filteredFruits, setFilteredFruits] = useState(fruits);

    const inpHandler = (event) => {
        console.log("changed input ",event.target.value);
        const inpVal = event.target.value;
        const filtereVals = fruits.filter((item) => {
            return item.toLowerCase().indexOf(inpVal.toLowerCase()) !== -1
        })
        console.log(filtereVals);
        setFilteredFruits(filtereVals);
    }

    return (
        <div>
            Search Fruit: <input type="text" onChange={inpHandler}/>
            <ul>
                {filteredFruits.map(fruit => <li>{fruit}</li>)}
            </ul>
        </div>
    )
}

export default SearchBar;