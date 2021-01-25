import React from 'react';

const Search = ( ) => {
    return ( 
        <form>
            <input 
            type="text" 
            value={keyword} 
            onChange={ ( e ) } => {  setKeyword( e. target . value ) } }
            />
            <button>Submit</button>
        </form>
    ) ;
} ;

export default Search ;