import React from 'react';
import {MdSearch} from 'react-icons/md';

const Search = ({ handleSearchNotes }) => {
    return (  
       <div className="search">
        <MdSearch className="search-icons" size='1.3em' />

        <input 
            onChange={(e) => 
                handleSearchNotes(e.target.value)
            } 
            type="text" 
            placeholder="search here ..."
        />
       </div> 
    );
}
 
export default Search;
