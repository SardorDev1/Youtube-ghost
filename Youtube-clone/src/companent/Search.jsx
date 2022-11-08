import React, { useState } from 'react';
import "../App.css"
const Search = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState("")
    const handleChange = (event) => setSearchTerm(event.target.value)

    const onkeyPress = (event) => {
        if (event.key === "Enter") {
            onSubmit(searchTerm)
        
        }

    }



    return (

        <>
       <div className="container">
        <div className="row">
            <div  className="mx-auto input">
            <input className='searchApi mx-auto  ' type="text" placeholder='Qidiring...' value={searchTerm}  onChange={handleChange} onKeyPress={onkeyPress} />
<button className='btn btn-' ></button>
            </div>
        </div>
       </div>


        </>
    );
};

export default Search;